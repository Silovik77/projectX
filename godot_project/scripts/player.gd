extends CharacterBody2D

class_name Player

@export var pet_type: String = "fox"
@export var lane: int = 1  # 0, 1, 2

const GRAVITY: float = 35.0
const JUMP_VELOCITY: float = 12.0
const LANE_TARGETS: Array[float] = [-2.4, 0.0, 2.4]
const LANE_CHANGE_SPEED: float = 10.0

var is_jumping: bool = false
var jump_velocity: float = 0.0
var target_lane: int = 1
var run_phase: float = 0.0
var squash: float = 0.0

@onready var sprite: Sprite2D = $Sprite2D
@onready var animation_player: AnimationPlayer = $AnimationPlayer if has_node("AnimationPlayer") else null

func _ready() -> void:
	position.x = LANE_TARGETS[lane]

func _physics_process(delta: float) -> void:
	if GameManager.state != GameManager.GameState.PLAYING:
		return
	
	# Гравитация
	if is_jumping:
		jump_velocity -= GRAVITY * delta
		position.y += jump_velocity * delta
		
		if position.y <= 0:
			position.y = 0
			is_jumping = false
			jump_velocity = 0
			on_land()
	else:
		position.y = max(0, position.y)
	
	# Смена полосы
	var target_x = LANE_TARGETS[target_lane]
	position.x = lerp(position.x, target_x, LANE_CHANGE_SPEED * delta)
	
	# Анимация бега
	if not is_jumping:
		run_phase += delta * GameManager.get_speed() * 0.9
		update_run_animation()
	
	# Squash эффект при приземлении
	squash = lerp(squash, 0, delta * 5)
	scale = Vector2.ONE + Vector2(squash * 0.2, -squash * 0.3)

func try_jump() -> void:
	if not is_jumping and GameManager.state == GameManager.GameState.PLAYING:
		is_jumping = true
		jump_velocity = JUMP_VELOCITY
		AudioManager.play_sound("jump")

func change_lane(direction: int) -> void:
	if GameManager.state != GameManager.GameState.PLAYING:
		return
	target_lane = clamp(target_lane + direction, 0, 2)
	lane = target_lane
	AudioManager.play_sound("step")

func on_land() -> void:
	squash = 1.0
	AudioManager.play_sound("land")

func update_run_animation() -> void:
	if sprite:
		var frame = int(run_phase / (PI * 0.85)) % 2
		# Здесь можно переключать спрайты в зависимости от frame
		# sprite.frame = frame

func hit_obstacle() -> void:
	if GameManager.is_effect_active("rocket"):
		# Если активна ракета - разрушаем препятствие
		return
	GameManager.crash()

func collect_coin() -> void:
	GameManager.add_coin(1)
	AudioManager.play_sound("coin")

func collect_powerup(powerup_type: String) -> void:
	GameManager.activate_effect(powerup_type)
	AudioManager.play_sound("powerup")
