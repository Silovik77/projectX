extends Control

# UI менеджер - управление интерфейсом игры

@onready var menu_screen: Control = $MenuScreen
@onready var shop_screen: Control = $ShopScreen
@onready var quests_screen: Control = $QuestsScreen
@onready var leaderboard_screen: Control = $LeaderboardScreen
@onready var pause_screen: Control = $PauseScreen
@onready var results_screen: Control = $ResultsScreen
@onready var hud: Control = $HUD

@onready var coins_label: Label = $HUD/CoinsLabel
@onready var distance_label: Label = $HUD/DistanceLabel

var current_pet_index: int = 0
const PETS: Array[String] = ["fox", "bunny", "hedgehog", "squirrel"]
const PET_PRICES: Dictionary = {"fox": 0, "bunny": 100, "hedgehog": 150, "squirrel": 200}

func _ready() -> void:
	GameManager.coins_changed.connect(_on_coins_changed)
	GameManager.distance_changed.connect(_on_distance_changed)
	hide_all_screens()
	show_menu()

func _input(event: InputEvent) -> void:
	if event.is_action_pressed("jump"):
		if GameManager.state == GameManager.GameState.PLAYING:
			GameManager.player.try_jump()
	elif event.is_action_pressed("move_left"):
		if GameManager.state == GameManager.GameState.PLAYING:
			GameManager.player.change_lane(-1)
	elif event.is_action_pressed("move_right"):
		if GameManager.state == GameManager.GameState.PLAYING:
			GameManager.player.change_lane(1)
	elif event.is_action_pressed("pause"):
		if GameManager.state == GameManager.GameState.PLAYING:
			show_pause()

func hide_all_screens() -> void:
	for screen in [menu_screen, shop_screen, quests_screen, leaderboard_screen, pause_screen, results_screen, hud]:
		if screen:
			screen.visible = false

func show_menu() -> void:
	hide_all_screens()
	if menu_screen:
		menu_screen.visible = true
	update_menu_ui()

func show_shop() -> void:
	hide_all_screens()
	if shop_screen:
		shop_screen.visible = true
	update_shop_ui()

func show_quests() -> void:
	hide_all_screens()
	if quests_screen:
		quests_screen.visible = true

func show_leaderboard() -> void:
	hide_all_screens()
	if leaderboard_screen:
		leaderboard_screen.visible = true

func show_pause() -> void:
	GameManager.state = GameManager.GameState.PAUSED
	hide_all_screens()
	if pause_screen:
		pause_screen.visible = true

func show_results(distance: int, coins: int, is_new_record: bool) -> void:
	hide_all_screens()
	if results_screen:
		results_screen.visible = true
		$ResultsScreen/DistanceLabel.text = tr("Дистанция: ") + str(distance) + " м"
		$ResultsScreen/CoinsLabel.text = "+" + str(coins)
		$ResultsScreen/RecordLabel.visible = is_new_record

func start_game() -> void:
	hide_all_screens()
	if hud:
		hud.visible = true
	GameManager.start_game()

func update_menu_ui() -> void:
	if menu_screen:
		$MenuScreen/CoinsLabel.text = str(GameManager.coins)
		$MenuScreen/PetSprite.texture = load("res://assets/" + GameManager.selected_pet + "_side.png")
		$MenuScreen/RecordLabel.text = tr("Рекорд: ") + str(GameManager.record) + " м" if GameManager.record > 0 else ""

func update_shop_ui() -> void:
	if shop_screen:
		$ShopScreen/CoinsLabel.text = str(GameManager.coins)
		# Заполнение магазина персонажами
		var grid = $ShopScreen/GridContainer
		for child in grid.get_children():
			child.queue_free()
		
		for pet_id in PETS:
			var card = create_pet_card(pet_id)
			grid.add_child(card)

func create_pet_card(pet_id: String) -> Control:
	var card = Panel.new()
	var vbox = VBoxContainer.new()
	
	var sprite = Sprite2D.new()
	sprite.texture = load("res://assets/" + pet_id + "_side.png")
	sprite.scale = Vector2(2, 2)
	
	var name_label = Label.new()
	name_label.text = tr(pet_id.capitalize())
	
	var button = Button.new()
	var is_owned = pet_id in GameManager.owned_pets
	var is_selected = pet_id == GameManager.selected_pet
	
	if is_selected:
		button.text = tr("Выбрано")
		button.disabled = true
	elif is_owned:
		button.text = tr("Выбрать")
		button.pressed.connect(func(): select_pet(pet_id))
	else:
		var price = PET_PRICES.get(pet_id, 100)
		button.text = str(price) + " 🍎"
		button.pressed.connect(func(): buy_pet(pet_id, price))
	
	vbox.add_child(sprite)
	vbox.add_child(name_label)
	vbox.add_child(button)
	card.add_child(vbox)
	
	return card

func select_pet(pet_id: String) -> void:
	GameManager.selected_pet = pet_id
	GameManager.save_game()
	update_shop_ui()
	AudioManager.play_sound("collect")

func buy_pet(pet_id: String, price: int) -> void:
	if GameManager.buy_pet(pet_id, price):
		AudioManager.play_sound("powerup")
		update_shop_ui()
	else:
		AudioManager.play_sound("stumble")
		show_message(tr("Недостаточно яблочек!"))

func resume_game() -> void:
	GameManager.state = GameManager.GameState.PLAYING
	hide_all_screens()
	if hud:
		hud.visible = true

func _on_coins_changed(value: int) -> void:
	coins_label.text = str(value)

func _on_distance_changed(meters: int) -> void:
	distance_label.text = str(meters) + " м"

func show_message(text: String) -> void:
	var label = Label.new()
	label.text = text
	label.position = Vector2(SCREEN_CENTER_X - 100, 100)
	add_child(label)
	await get_tree().create_timer(1.6).timeout
	label.queue_free()
