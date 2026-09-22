extends CharacterBody3D

class_name Player3D

@export var pet_type: String = "fox"
@export var lane: int = 1  # 0, 1, 2

# Физические параметры
@export var gravity: float = 25.0
@export var jump_velocity: float = 8.0
@export var move_speed: float = 6.0
@export var lane_change_smoothness: float = 8.0
@export var rotation_smoothness: float = 12.0

# Настройки полос (расстояние между полосами в метрах)
const LANE_WIDTH: float = 2.5
const LANE_TARGETS: Array[float] = [-2.5, 0.0, 2.5]

var is_jumping: bool = false
var vertical_velocity: float = 0.0
var target_lane: int = 1
var run_phase: float = 0.0

# Компоненты
@onready var model: Node3D = $Model  # Сюда помещаем 3D модель персонажа
@onready var animation_tree: AnimationTree = $Model/AnimationTree if has_node("Model/AnimationTree") else null
@onready var collision: CollisionShape3D = $CollisionShape3D

# Параметры для продвинутой физики
var velocity_target: Vector3 = Vector3.ZERO
var lateral_velocity: float = 0.0
var is_grounded: bool = true

func _ready() -> void:
    # Инициализация позиции на стартовой полосе
    position.x = LANE_TARGETS[lane]
    position.y = 0.5  # Высота центра персонажа
    
    # Настройка физики
    if collision:
        # Предполагаем CapsuleShape3D для персонажа
        var shape = collision.shape
        if shape is CapsuleShape3D:
            shape.radius = 0.4
            shape.height = 1.0
    
    # Загрузка модели в зависимости от типа питомца
    load_character_model(pet_type)

func _physics_process(delta: float) -> void:
    if GameManager.state != GameManager.GameState.PLAYING:
        return
    
    # === ВЕРТИКАЛЬНОЕ ДВИЖЕНИЕ (ПРЫЖКИ) ===
    if is_jumping:
        vertical_velocity -= gravity * delta
        position.y += vertical_velocity * delta
        
        # Проверка приземления
        if position.y <= 0.5:  # 0.5 - базовая высота (центр персонажа)
            position.y = 0.5
            is_jumping = false
            vertical_velocity = 0
            is_grounded = true
            on_land()
    else:
        is_grounded = true
        position.y = max(0.5, position.y)
    
    # === ГОРИЗОНТАЛЬНОЕ ДВИЖЕНИЕ (СМЕНА ПОЛОС) ===
    var target_x = LANE_TARGETS[target_lane]
    var current_x = position.x
    
    # Плавное перемещение между полосами с инерцией
    lateral_velocity = lerp(lateral_velocity, (target_x - current_x) * lane_change_smoothness, delta * 3.0)
    position.x += lateral_velocity * delta
    
    # Ограничение выхода за границы
    position.x = clamp(position.x, LANE_TARGETS[0] - 0.5, LANE_TARGETS[2] + 0.5)
    
    # === ВРАЩЕНИЕ МОДЕЛИ ===
    # Наклон корпуса в сторону движения для динамики
    var tilt_angle = -lateral_velocity * 0.15
    if model:
        model.rotation.z = lerp(model.rotation.z, tilt_angle, delta * rotation_smoothness)
        # Небольшой наклон вперёд при беге
        model.rotation.x = lerp(model.rotation.x, -0.1, delta * 2.0)
    
    # === АНИМАЦИЯ БЕГА ===
    if not is_jumping and animation_tree:
        run_phase += delta * GameManager.get_speed() * 0.8
        update_run_animation()
    elif animation_tree:
        # Анимация прыжка
        animation_tree.set("parameters/conditions/jump", true)
        animation_tree.set("parameters/conditions/grounded", false)

func try_jump() -> void:
    if not is_jumping and is_grounded and GameManager.state == GameManager.GameState.PLAYING:
        is_jumping = true
        is_grounded = false
        vertical_velocity = jump_velocity
        AudioManager.play_sound("jump")
        
        if animation_tree:
            animation_tree.set("parameters/conditions/jump", true)

func change_lane(direction: int) -> void:
    if GameManager.state != GameManager.GameState.PLAYING:
        return
    
    target_lane = clamp(target_lane + direction, 0, 2)
    lane = target_lane
    
    # Звук шага только если не в прыжке
    if is_grounded:
        AudioManager.play_sound("step")

func on_land() -> void:
    # Эффект приземления можно добавить через частицы или анимацию
    if animation_tree:
        animation_tree.set("parameters/conditions/grounded", true)
        animation_tree.set("parameters/conditions/jump", false)
    
    # Небольшой "отскок" камеры или тряска
    AudioManager.play_sound("land")

func update_run_animation() -> void:
    if animation_tree:
        # Установка скорости бега в AnimationTree
        var speed_param = run_phase * 2.0
        animation_tree.set("parameters/Run/blend_position", Vector2(speed_param, 0))
        
        # Переключение условий
        animation_tree.set("parameters/conditions/grounded", true)
        animation_tree.set("parameters/conditions/jump", false)

func load_character_model(character: String) -> void:
    """
    Загружает соответствующую 3D модель персонажа.
    Модели должны быть в папке assets/models/ в формате .glb или .gltf
    """
    if not model:
        return
    
    # Очистка текущей модели
    for child in model.get_children():
        model.remove_child(child)
        child.queue_free()
    
    var model_path: String = ""
    
    match character.to_lower():
        "fox":
            model_path = "res://assets/models/fox.glb"
        "bunny":
            model_path = "res://assets/models/bunny.glb"
        "hedgehog":
            model_path = "res://assets/models/hedgehog.glb"
        "squirrel":
            model_path = "res://assets/models/squirrel.glb"
        _:
            model_path = "res://assets/models/fox.glb"  # По умолчанию
    
    # Проверка существования файла
    if ResourceLoader.exists(model_path):
        var model_scene: PackedScene = load(model_path)
        if model_scene:
            var instance = model_scene.instantiate()
            model.add_child(instance)
            
            # Поиск AnimationTree в загруженной модели
            var anim_tree = instance.find_child("AnimationTree", true, false)
            if anim_tree:
                animation_tree = anim_tree
                setup_animation_tree()
    else:
        push_warning(f"Модель не найдена: {model_path}. Используем заглушку.")
        create_placeholder_model()

func create_placeholder_model() -> void:
    """Создаёт простую заглушку если 3D модель не найдена"""
    var mesh_instance = MeshInstance3D.new()
    var capsule = CapsuleMesh.new()
    capsule.radius = 0.4
    capsule.height = 1.0
    mesh_instance.mesh = capsule
    
    var material = StandardMaterial3D.new()
    material.albedo_color = Color.ORANGE
    mesh_instance.material_override = material
    
    model.add_child(mesh_instance)
    
    # Создаём простой AnimationTree для заглушки
    var anim_tree = AnimationTree.new()
    anim_tree.tree_root = AnimationNodeStateMachine.new()
    model.add_child(anim_tree)
    animation_tree = anim_tree

func setup_animation_tree() -> void:
    """Настройка параметров AnimationTree для blend space"""
    if not animation_tree:
        return
    
    animation_tree.active = true
    animation_tree.anim_player = "../AnimationPlayer" if has_node("../AnimationPlayer") else "AnimationPlayer"
    
    # Параметры для переключения состояний
    # Эти параметры должны быть созданы в самом AnimationTree в редакторе Godot
    # Здесь мы только устанавливаем их значения

func hit_obstacle() -> void:
    if GameManager.is_effect_active("rocket"):
        return
    GameManager.crash()

func collect_coin() -> void:
    GameManager.add_coin(1)
    AudioManager.play_sound("coin")

func collect_powerup(powerup_type: String) -> void:
    GameManager.activate_effect(powerup_type)
    AudioManager.play_sound("powerup")

# === ДОПОЛНИТЕЛЬНЫЕ МЕТОДЫ ДЛЯ 3D ===

func get_forward_vector() -> Vector3:
    """Возвращает вектор направления движения вперёд"""
    return -global_transform.basis.z

func get_right_vector() -> Vector3:
    """Возвращает вектор направления вправо"""
    return global_transform.basis.x

func apply_boost(multiplier: float) -> void:
    """Применяет ускорение от бонусов (ракета, x2)"""
    # Можно добавить визуальный эффект ускорения
    if animation_tree:
        animation_tree.set("parameters/Run/speed_scale", multiplier)

func stagger(duration: float = 0.3) -> void:
    """Эффект спотыкания при столкновении"""
    # Откат назад
    var backward_impulse = Vector3(0, 0, 1.5)
    position += backward_impulse
    
    # Анимация спотыкания
    if animation_tree:
        animation_tree.set("parameters/conditions/stagger", true)
    
    await get_tree().create_timer(duration).timeout
    
    if animation_tree:
        animation_tree.set("parameters/conditions/stagger", false)
