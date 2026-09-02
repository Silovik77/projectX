-- ProjectX Characters Module
-- Handles character-specific data and tracking

local addonName, addon = ...
local Characters = {}

-- Get character key (name-realm)
function Characters:GetCharacterKey(playerName, realm)
    playerName = playerName or UnitName("player")
    realm = realm or GetRealmName()
    return playerName .. "-" .. realm
end

-- Get or create character data
function Characters:GetOrCreateCharacter(playerName, realm)
    local key = self:GetCharacterKey(playerName, realm)
    ProjectXDB.chars = ProjectXDB.chars or {}
    
    if not ProjectXDB.chars[key] then
        ProjectXDB.chars[key] = {
            name = playerName,
            realm = realm,
            class = select(2, UnitClass("player")),
            classID = select(3, UnitClass("player")),
            race = select(2, UnitRace("player")),
            faction = UnitFactionGroup("player"),
            level = UnitLevel("player"),
            ilvl = GetAverageItemLevel and GetAverageItemLevel() or 0,
            firstLogin = time(),
            lastLogin = time(),
            activities = {},
            professions = {},
            currencies = {},
            gold = {
                total = 0,
                history = {},
            },
        }
    else
        -- Update dynamic data
        local charData = ProjectXDB.chars[key]
        charData.level = UnitLevel("player")
        charData.ilvl = GetAverageItemLevel and GetAverageItemLevel() or 0
        charData.lastLogin = time()
    end
    
    return ProjectXDB.chars[key]
end

-- Get all characters
function Characters:GetAllCharacters()
    return ProjectXDB.chars or {}
end

-- Get character by key
function Characters:GetCharacterByKey(key)
    return ProjectXDB.chars and ProjectXDB.chars[key]
end

-- Get character by name and realm
function Characters:GetCharacterByName(playerName, realm)
    local key = self:GetCharacterKey(playerName, realm)
    return self:GetCharacterByKey(key)
end

-- Delete character data
function Characters:DeleteCharacter(playerName, realm)
    local key = self:GetCharacterKey(playerName, realm)
    if ProjectXDB.chars and ProjectXDB.chars[key] then
        ProjectXDB.chars[key] = nil
        return true
    end
    return false
end

-- Count characters
function Characters:GetCharacterCount()
    if not ProjectXDB.chars then return 0 end
    local count = 0
    for _ in pairs(ProjectXDB.chars) do
        count = count + 1
    end
    return count
end

-- Get characters by realm
function Characters:GetCharactersByRealm(realm)
    local result = {}
    for key, charData in pairs(ProjectXDB.chars or {}) do
        if charData.realm == realm then
            table.insert(result, charData)
        end
    end
    return result
end

-- Get characters by faction
function Characters:GetCharactersByFaction(faction)
    local result = {}
    for key, charData in pairs(ProjectXDB.chars or {}) do
        if charData.faction == faction then
            table.insert(result, charData)
        end
    end
    return result
end

-- Get total gold across all characters
function Characters:GetTotalGold()
    local total = 0
    for _, charData in pairs(ProjectXDB.chars or {}) do
        if charData.gold then
            total = total + (charData.gold.total or 0)
        end
    end
    return total
end

addon.Characters = Characters
