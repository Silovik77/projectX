extends Node

# Менеджер звуков и музыки
var audio_bus: AudioStreamPlayer
var muted: bool = false

const SOUND_FILES: Dictionary = {
	"jump": "res://sounds/jump.wav",
	"coin": "res://sounds/coin.wav",
	"powerup": "res://sounds/powerup.wav",
	"land": "res://sounds/land.wav",
	"step": "res://sounds/step.wav",
	"stumble": "res://sounds/stumble.wav",
	"collect": "res://sounds/collect.wav",
	"crash": "res://sounds/crash.wav"
}

var sound_cache: Dictionary = {}

func _ready() -> void:
	# Создаем узел для звуков
	audio_bus = AudioStreamPlayer.new()
	add_child(audio_bus)
	load_sounds()

func load_sounds() -> void:
	for sound_name in SOUND_FILES:
		var path = SOUND_FILES[sound_name]
		if FileAccess.file_exists(path):
			var sound = load(path)
			sound_cache[sound_name] = sound

func play_sound(sound_name: String, volume_db: float = 0.0) -> void:
	if muted or not sound_cache.has(sound_name):
		return
	
	var sound = sound_cache[sound_name] as AudioStream
	if sound:
		audio_bus.stream = sound
		audio_bus.volume_db = volume_db
		audio_bus.play()

func toggle_mute() -> void:
	muted = not muted
	AudioServer.set_bus_mute(0, muted)

func set_mute(value: bool) -> void:
	muted = value
	AudioServer.set_bus_mute(0, muted)
