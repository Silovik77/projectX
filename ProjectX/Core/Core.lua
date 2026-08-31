-- ProjectX Core Module
-- Handles initialization, database management, and event registration

local addonName, addon = ...
ProjectX = addon

-- Initialize database IMMEDIATELY before anything else
ProjectXDB = ProjectXDB or {}
ProjectXDB.global = ProjectXDB.global or {}
ProjectXDB.chars = ProjectXDB.chars or {}
ProjectXDB.ui = ProjectXDB.ui or {
    enabled = true,
    minimapButton = true,
    windowPos = { x = 100, y = -100 },
    windowScale = 1.0,
    activeTab = "activity",
}
ProjectXDB.minimapButton = ProjectXDB.minimapButton or {
    enabled = true,
    position = 0,
    radius = 80,
}
ProjectXDB.activity = ProjectXDB.activity or {}

-- Default database settings
local defaults = {
    global = {
        locale = "auto",
        debug = false,
    },
    char = {
        lastLogin = 0,
    },
}

-- Create frame for event handling
local frame = CreateFrame("Frame")
addon.frame = frame

frame:SetScript("OnEvent", function(self, event, arg1, ...)
    if event == "ADDON_LOADED" then
        if arg1 == addonName then
            addon:Initialize()
            self:UnregisterEvent("ADDON_LOADED")
        end
    elseif event == "PLAYER_LOGIN" then
        addon:OnLogin()
    elseif event == "PLAYER_LOGOUT" then
        addon:OnLogout()
    end
end)

-- Initialize the addon
function addon:Initialize()
    -- Set locale
    local locale = ProjectXDB.global.locale or "auto"
    if locale == "auto" then
        locale = GetLocale()
    end
    
    -- Load locale module
    ProjectXLocale = ProjectXLocale or {}
    self.Locale = ProjectXLocale[locale] or ProjectXLocale["enUS"]
    
    if not self.Locale then
        print("|cFFFF0000ProjectX Error: Locale not found for " .. locale .. "|r")
        self.Locale = {LOADED = "Loaded", SAVED = "Data saved"}
    else
        print("|cFF00FF00ProjectX|r: " .. (self.Locale.LOADED or "Loaded"))
    end
    
    -- Register events
    frame:RegisterEvent("PLAYER_LOGIN")
    frame:RegisterEvent("PLAYER_LOGOUT")
end

-- Event handler
function addon:OnEvent(event, ...)
    if event == "PLAYER_LOGIN" then
        self:OnLogin()
    elseif event == "PLAYER_LOGOUT" then
        self:OnLogout()
    end
end

-- Login handler
function addon:OnLogin()
    local charData = ProjectXDB.chars or {}
    local playerName = UnitName("player")
    local realm = GetRealmName()
    local faction = UnitFactionGroup("player")
    
    if not charData[playerName] then
        charData[playerName] = {
            realm = realm,
            faction = faction,
            class = select(2, UnitClass("player")),
            level = UnitLevel("player"),
            firstLogin = time(),
            lastLogin = time(),
        }
    else
        charData[playerName].lastLogin = time()
        charData[playerName].level = UnitLevel("player")
    end
    
    ProjectXDB.chars = charData
    ProjectXDB.lastChar = playerName
    
    -- Initialize modules
    if self.Activity and self.Activity.Initialize then self.Activity:Initialize() end
    if self.MinimapButton and self.MinimapButton.Initialize then self.MinimapButton:Initialize() end
    
    -- Initialize UI after modules
    C_Timer.After(0.1, function()
        if self.UI and self.UI.Initialize then self.UI:Initialize() end
    end)
end

-- Logout handler
function addon:OnLogout()
    -- Save any pending data
    print("|cFF00FF00ProjectX|r: " .. self.Locale.SAVED)
end

-- Helper function to get character data
function addon:GetCharacterData(playerName)
    playerName = playerName or UnitName("player")
    return ProjectXDB.chars and ProjectXDB.chars[playerName]
end

-- Helper function to get all characters
function addon:GetAllCharacters()
    return ProjectXDB.chars or {}
end

-- Slash command handler
SLASH_PROJECTX1 = "/projectx"
SLASH_PROJECTX2 = "/px"
SlashCmdList["PROJECTX"] = function(msg)
    addon:HandleCommand(msg)
end

function addon:HandleCommand(msg)
    msg = msg:lower():trim()
    
    if msg == "" or msg == "help" then
        print("|cFF00FF00ProjectX|r Commands:")
        print("  /px help - Show this help")
        print("  /px status - Show addon status")
        print("  /px debug - Toggle debug mode")
        print("  /px ui - Toggle main window")
        print("  /px config - Open settings")
    elseif msg == "status" then
        print("|cFF00FF00ProjectX|r Status:")
        print("  Version: 0.2.0")
        local charCount = 0
        if ProjectXDB.chars then
            for _ in pairs(ProjectXDB.chars) do charCount = charCount + 1 end
        end
        print("  Characters tracked: " .. charCount)
        print("  Locale: " .. (ProjectXDB.locale or "auto"))
    elseif msg == "debug" then
        ProjectXDB.debug = not ProjectXDB.debug
        print("|cFF00FF00ProjectX|r: Debug mode " .. (ProjectXDB.debug and "enabled" or "disabled"))
    elseif msg == "ui" then
        if self.UI then
            self.UI:ToggleWindow()
        end
    elseif msg == "config" then
        if self.UI then
            self.UI:ShowWindow()
            self.UI:SwitchTab("settings")
        end
    end
end
