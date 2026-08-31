-- ProjectX Core Module
-- Handles initialization, database management, and event registration

local addonName, addon = ...
ProjectX = addon

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

-- Initialize the addon
function addon:Initialize()
    -- Load saved variables or create new database
    ProjectXDB = ProjectXDB or {}
    
    -- Merge defaults
    for key, value in pairs(defaults.global) do
        if ProjectXDB[key] == nil then
            ProjectXDB[key] = value
        end
    end
    
    -- Set locale
    local locale = ProjectXDB.locale
    if locale == "auto" then
        locale = GetLocale()
    end
    
    -- Load locale module
    self.Locale = ProjectXLocale[locale] or ProjectXLocale["enUS"]
    
    print("|cFF00FF00ProjectX|r: " .. self.Locale.LOADED)
    
    -- Register events via frame
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
    if self.UI then self.UI:Initialize() end
    if self.MinimapButton then self.MinimapButton:Initialize() end
    if self.Activity then self.Activity:Initialize() end
    if self.Professions then self.Professions:Initialize() end
    if self.Currencies then self.Currencies:Initialize() end
    if self.Accountant then self.Accountant:Initialize() end
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

-- Create frame for event handling
local frame = CreateFrame("Frame")
frame:SetScript("OnEvent", function(self, event, ...)
    addon:OnEvent(event, ...)
end)

addon.frame = frame

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
        print("  Characters tracked: " .. (ProjectXDB.chars and table.getn(ProjectXDB.chars) or 0))
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

-- Register addon for initialization
frame:RegisterEvent("ADDON_LOADED")
frame:SetScript("OnEvent", function(self, event, arg1)
    if arg1 == addonName then
        addon:Initialize()
        self:UnregisterEvent("ADDON_LOADED")
    end
end)
