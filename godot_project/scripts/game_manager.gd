extends Node2D

class_name GameManager

signal coins_changed(value: int)
signal distance_changed(meters: int)
signal game_started
signal game_over(distance: int, coins: int)
signal revived

# Константы из оригинальной игры
const BASE_SPEED: float = 7.0
const MAX_SPEED: float = 18.0
const SPEED_INCREMENT: float = 0.003
const JUMP_VELOCITY: float = 12.0
const GRAVITY: float = 35.0
const LANE_WIDTH: float = 2.4
const LANES: Array[float] = [-2.4, 0.0, 2.4]

# Состояние игры
enum GameState { MENU, PLAYING, PAUSED, CRASHED, RESULTS }
var state: GameState = GameState.MENU

# Прогресс игрока
var coins: int = 0
var run_coins: int = 0
var distance: float = 0.0
var record: int = 0
var selected_pet: String = "fox"
var owned_pets: Array[String] = ["fox"]
var lang: String = "ru"
var muted: bool = false

# Эффекты
var active_effects: Dictionary = {"magnet": 0.0, "x2": 0.0, "rocket": 0.0}
const EFFECT_DURATION: float = 10.0

# Сохранение
const SAVE_FILE: String = "user://savegame.json"

func _ready() -> void:
	load_game()

func start_game() -> void:
	state = GameState.PLAYING
	distance = 0.0
	run_coins = 0
	active_effects = {"magnet": 0.0, "x2": 0.0, "rocket": 0.0}
	game_started.emit()

func crash() -> void:
	if state != GameState.PLAYING:
		return
	state = GameState.CRASHED
	game_over.emit(floor(distance), run_coins)

func revive() -> void:
	if state != GameState.CRASHED:
		return
	state = GameState.PLAYING
	revived.emit()

func add_coin(amount: int = 1) -> void:
	if is_effect_active("x2"):
		amount *= 2
	run_coins += amount
	coins_changed.emit(run_coins)

func activate_effect(effect_name: String) -> void:
	active_effects[effect_name] = Time.get_ticks_msec() / 1000.0 + EFFECT_DURATION

func is_effect_active(effect_name: String) -> bool:
	return active_effects.has(effect_name) and active_effects[effect_name] > Time.get_ticks_msec() / 1000.0

func update_effects() -> void:
	var current_time = Time.get_ticks_msec() / 1000.0
	for effect in active_effects:
		if active_effects[effect] > 0 and active_effects[effect] < current_time:
			active_effects[effect] = 0.0

func get_speed() -> float:
	var speed_multiplier = 1.0
	if is_effect_active("rocket"):
		speed_multiplier = 1.5
	var speed_increase = floor(distance / 1000.0) * SPEED_INCREMENT
	return min(MAX_SPEED, BASE_SPEED + speed_increase) * speed_multiplier

func save_game() -> void:
	var file = FileAccess.open(SAVE_FILE, FileAccess.WRITE)
	if file:
		var data = {
			"coins": coins,
			"record": record,
			"selected_pet": selected_pet,
			"owned_pets": owned_pets,
			"lang": lang,
			"muted": muted
		}
		file.store_string(JSON.stringify(data, "\t"))

func load_game() -> void:
	var file = FileAccess.open(SAVE_FILE, FileAccess.READ)
	if file:
		var text = file.get_as_text()
		var json = JSON.parse_string(text)
		if json:
			coins = json.get("coins", 0)
			record = json.get("record", 0)
			selected_pet = json.get("selected_pet", "fox")
			owned_pets = json.get("owned_pets", ["fox"])
			lang = json.get("lang", "ru")
			muted = json.get("muted", false)

func update_record(new_distance: int) -> void:
	if new_distance > record:
		record = new_distance
		save_game()
		return true
	return false

func spend_coins(amount: int) -> bool:
	if coins >= amount:
		coins -= amount
		coins_changed.emit(coins)
		save_game()
		return true
	return false

func buy_pet(pet_id: String, price: int) -> bool:
	if pet_id in owned_pets:
		selected_pet = pet_id
		save_game()
		return true
	elif spend_coins(price):
		owned_pets.append(pet_id)
		selected_pet = pet_id
		save_game()
		return true
	return false
