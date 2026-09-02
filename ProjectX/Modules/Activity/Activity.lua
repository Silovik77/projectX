-- ProjectX Activity Module
-- Tracks raids, M+, delves, hunting, great vault, daily/weekly quests

local addonName, addon = ...
local Activity = {}

-- Хранилище данных
Activity.data = {
    characters = {},
    quests = { daily = 0, weekly = 0, list = {} },
    mythicPlus = 0,
    lastUpdate = 0
}

-- Create frame for event handling FIRST
local frame = CreateFrame("Frame")
frame:SetScript("OnEvent", function(self, event, ...)
    if Activity[event] then
        Activity[event](Activity, ...)
    end
end)
Activity.frame = frame

local defaults = {
    enabled = true,
    trackRaids = true,
    trackMythicPlus = true,
    trackDelves = true,
    trackHunting = true,
    trackVault = true,
    trackDailyQuests = true,
    trackWeeklyQuests = true,
}

-- Initialize module
function Activity:Initialize()
    if not ProjectXDB.activity then
        ProjectXDB.activity = {}
    end

    -- Merge defaults
    for key, value in pairs(defaults) do
        if ProjectXDB.activity[key] == nil then
            ProjectXDB.activity[key] = value
        end
    end

    if not ProjectXDB.activity.enabled then return end

    self:RegisterEvents()
    self:ScanData() -- Сканируем сразу при входе
    print("|cFF00FF00ProjectX|r: " .. (addon.Locale.ACTIVITY or "Activity Module") .. " loaded")
end

-- Register events
function Activity:RegisterEvents()
    local f = self.frame or Activity.frame
    
    f:RegisterEvent("QUEST_LOG_UPDATE")
    f:RegisterEvent("PLAYER_LOGIN")
    f:RegisterEvent("ZONE_CHANGED_NEW_AREA")
    f:RegisterEvent("CHALLENGE_MODE_COMPLETED")
    f:RegisterEvent("WEEKLY_REWARDS_UPDATED")
    f:RegisterEvent("PLAYER_LOGOUT")
    
    f:SetScript("OnEvent", function(self, event, ...)
        if event == "PLAYER_LOGIN" then
            Activity:ScanData()
        elseif event == "QUEST_LOG_UPDATE" then
            Activity:ScanData()
            if addon.UI and addon.UI.mainFrame and addon.UI.mainFrame:IsShown() then
                addon.UI:UpdateTabContent("activity")
            end
        elseif event == "PLAYER_LOGOUT" then
            Activity:SaveData()
        else
            if Activity[event] then
                Activity[event](Activity, ...)
            end
        end
    end)
end

function Activity:ScanData()
    -- 1. Сканирование квестов
    local numQuests = C_QuestLog.GetNumQuestLogEntries()
    local dailyCount = 0
    local weeklyCount = 0
    local questList = {}

    for i = 1, numQuests do
        local info = C_QuestLog.GetInfo(i)
        if info then
            if info.isDaily then 
                dailyCount = dailyCount + 1 
                table.insert(questList, "|cFFFF0000[D]|r " .. info.title)
            elseif info.isWeekly then 
                weeklyCount = weeklyCount + 1 
                table.insert(questList, "|cFF0000FF[W]|r " .. info.title)
            end
        end
    end

    self.data.quests.daily = dailyCount
    self.data.quests.weekly = weeklyCount
    self.data.quests.list = questList
    self.data.lastUpdate = time()

    -- 2. Сканирование ключей M+ (упрощенно - поиск в сумках)
    local keyCount = 0
    for bag = 0, 4 do
        for slot = 1, C_Container.GetContainerNumSlots(bag) do
            local itemLink = C_Container.GetContainerItemLink(bag, slot)
            if itemLink and string.find(itemLink, "item:180653") then -- ID ключа M+
                keyCount = keyCount + 1
            end
        end
    end
    self.data.mythicPlus = keyCount

    -- 3. Сохранение данных персонажа в общую базу
    local charName = UnitName("player")
    local charRealm = GetRealmName()
    local fullName = charName .. "-" .. charRealm
    
    if not ProjectXDB.chars[fullName] then
        ProjectXDB.chars[fullName] = { level = UnitLevel("player"), class = select(2, UnitClass("player")) }
    end
    ProjectXDB.chars[fullName].lastSeen = time()
    
    -- Обновляем сводку для UI
    if addon.UI and addon.UI.mainFrame and addon.UI.mainFrame:IsShown() then
        self:UpdateUI()
    end
end

-- Event handlers
function Activity:ZONE_CHANGED_NEW_AREA()
    -- Track current zone for activity type detection
    local zoneName = GetRealZoneText()

    -- Check if in raid instance
    if IsInInstance() then
        local _, instanceType = IsInInstance()
        if instanceType == "raid" then
            self:TrackRaidVisit(zoneName)
        end
    end
end

function Activity:CHALLENGE_MODE_COMPLETED()
    -- Mythic+ completed
    self:RecordMythicPlusCompletion()
end

function Activity:WEEKLY_REWARDS_UPDATED()
    -- Update great vault progress
    self:UpdateVaultProgress()
end

function Activity:PLAYER_LOGOUT()
    -- Save data on logout
    self:SaveData()
end

-- Tracking functions (placeholders)
function Activity:TrackRaidVisit(zoneName)
    -- Implementation here
end

function Activity:RecordMythicPlusCompletion()
    -- Implementation here
end

function Activity:UpdateVaultProgress()
    -- Implementation here
end

function Activity:SaveData()
    -- Persist data to SavedVariables
end

-- Get summary for UI
function Activity:GetSummary()
    return self.data
end

function Activity:UpdateUI()
    if addon.UI then
        addon.UI:UpdateTabContent("activity")
    end
end

addon.Activity = Activity
