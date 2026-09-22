extends Node2D

class_name TrackManager

@export var stump_scene: PackedScene
@export var log_scene: PackedScene
@export var coin_scene: PackedScene
@export var powerup_scene: PackedScene

const LANE_POSITIONS: Array[float] = [-2.4, 0.0, 2.4]
const SPAWN_DISTANCE: float = -70.0
const DESPAWN_DISTANCE: float = 15.0

var stumps: Array[Dictionary] = []
var logs: Array[Dictionary] = []
var coins: Array[Dictionary] = []
var powerups: Array[Dictionary] = []

var spawn_timer: float = 0.0
var powerup_timer: float = 0.0
var last_stump_distance: float = -40.0

func _ready() -> void:
	powerup_timer = 60.0

func _process(delta: float) -> void:
	if GameManager.state != GameManager.GameState.PLAYING:
		return
	
	var speed = GameManager.get_speed() * delta
	
	# Обновляем позиции всех объектов
	update_obstacles(speed)
	update_coins(speed)
	update_powerups(speed)
	
	# Спавн новых препятствий
	spawn_timer -= speed
	if spawn_timer <= 0:
		spawn_pattern()
		spawn_timer = 11.0 + randf() * 6.0
	
	# Спавн бонусов
	powerup_timer -= speed
	if powerup_timer <= 0:
		spawn_powerup()
		powerup_timer = 90.0 + randf() * 60.0

func update_obstacles(speed: float) -> void:
	# Обновляем пни
	for i in range(stumps.size() - 1, -1, -1):
		var stump = stumps[i]
		stump.z += speed
		stump.node.position.z = stump.z
		
		# Проверка столкновений
		if not stump.passed and stump.lane == GameManager.pet_lane and abs(stump.z) < 0.55:
			if GameManager.player_height > 0.5:  # Игрок перепрыгнул
				stump.passed = true
			else:
				GameManager.player.hit_obstacle()
		
		# Удаление
		if stump.z > DESPAWN_DISTANCE:
			remove_node(stump.node)
			stumps.remove_at(i)
	
	# Обновляем бревна (аналогично)
	for i in range(logs.size() - 1, -1, -1):
		var log = logs[i]
		log.z += speed
		log.node.position.z = log.z
		
		if not log.passed and log.lanes.has(GameManager.pet_lane) and abs(log.z) < 0.55:
			if GameManager.player_height > 0.5:
				log.passed = true
			else:
				GameManager.player.hit_obstacle()
		
		if log.z > DESPAWN_DISTANCE:
			remove_node(log.node)
			logs.remove_at(i)

func update_coins(speed: float) -> void:
	for i in range(coins.size() - 1, -1, -1):
		var coin = coins[i]
		coin.z += speed
		coin.node.position.z = coin.z
		coin.node.rotation.y += 0.05
		
		# Магнит эффект
		if GameManager.is_effect_active("magnet") and abs(coin.z) < 8:
			var player_pos = GameManager.player.position
			coin.node.position.x = lerp(coin.node.position.x, player_pos.x, 0.25)
		
		# Сбор монет
		if abs(coin.z) < 1.0 and abs(coin.node.position.x - GameManager.player.position.x) < 0.85:
			GameManager.player.collect_coin()
			remove_node(coin.node)
			coins.remove_at(i)
			continue
		
		if coin.z > DESPAWN_DISTANCE:
			remove_node(coin.node)
			coins.remove_at(i)

func update_powerups(speed: float) -> void:
	for i in range(powerups.size() - 1, -1, -1):
		var powerup = powerups[i]
		powerup.z += speed
		powerup.node.position.z = powerup.z
		powerup.node.rotation.y += 0.05
		
		if powerup.lane == GameManager.pet_lane and abs(powerup.z) < 1.0:
			GameManager.player.collect_powerup(powerup.type)
			remove_node(powerup.node)
			powerups.remove_at(i)
			continue
		
		if powerup.z > DESPAWN_DISTANCE:
			remove_node(powerup.node)
			powerups.remove_at(i)

func spawn_pattern() -> void:
	var lane = randi() % 3
	var random_val = randf()
	
	if GameManager.distance - last_stump_distance > 25.0 or random_val < 0.5:
		last_stump_distance = GameManager.distance
		
		if GameManager.distance > 300 and random_val < 0.55:
			# Несколько препятствий на разных полосах
			for i in range(3):
				if i != lane:
					spawn_stump(i)
			# Монеты на свободной полосе
			for i in range(3):
				spawn_coin(lane, -3.2 - i * 2.4, 0.0)
		else:
			spawn_stump(lane)
			if randf() < 0.45:
				spawn_coin(lane, -2.0, 0.8)
				spawn_coin(lane, -3.4, 1.25)
				spawn_coin(lane, -4.8, 0.8)
	elif random_val < 0.8:
		# Линия монет
		var count = 3 + randi() % 2
		for i in range(count):
			spawn_coin(lane, -i * 2.4, 0.0)
	else:
		last_stump_distance = GameManager.distance
		spawn_stump(lane)
		spawn_coin(lane, -2.0, 0.8)
		spawn_coin(lane, -3.4, 1.25)
		spawn_coin(lane, -4.8, 0.8)

func spawn_stump(lane: int, z_offset: float = 0.0) -> void:
	if stump_scene:
		var stump = stump_scene.instantiate()
		stump.position = Vector3(LANE_POSITIONS[lane], 0, z_offset)
		add_child(stump)
		stumps.append({"node": stump, "lane": lane, "z": z_offset, "passed": false})

func spawn_coin(lane: int, z_offset: float, height: float) -> void:
	if coin_scene:
		var coin = coin_scene.instantiate()
		coin.position = Vector3(LANE_POSITIONS[lane], 0.85 + height, z_offset)
		add_child(coin)
		coins.append({"node": coin, "lane": lane, "z": z_offset, "h": height, "phase": randf() * TAU})

func spawn_powerup(z_offset: float = 0.0) -> void:
	if powerup_scene:
		var types = ["magnet", "x2", "rocket"]
		var powerup_type = types[randi() % types.size()]
		var lane = randi() % 3
		
		var powerup = powerup_scene.instantiate()
		powerup.position = Vector3(LANE_POSITIONS[lane], 1.3, z_offset)
		powerup.set_type(powerup_type)
		add_child(powerup)
		powerups.append({"node": powerup, "lane": lane, "z": z_offset, "type": powerup_type})

func remove_node(node: Node) -> void:
	if node and is_instance_valid(node):
		node.queue_free()

func clear_all() -> void:
	for obstacle in stumps:
		remove_node(obstacle.node)
	for log in logs:
		remove_node(log.node)
	for coin in coins:
		remove_node(coin.node)
	for powerup in powerups:
		remove_node(powerup.node)
	
	stumps.clear()
	logs.clear()
	coins.clear()
	powerups.clear()
