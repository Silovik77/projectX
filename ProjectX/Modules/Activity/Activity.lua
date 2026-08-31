-- ProjectX Activity Module
-- Tracks raids, M+, delves, hunting, great vault, daily/weekly quests

local addonName, addon = ...
local Activity = {}

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
    print("|cFF00FF00ProjectX|r: " .. (addon.Locale.ACTIVITY or "Activity Module") .. " loaded")
end

-- Register events
function Activity:RegisterEvents()
    local frame = self.frame or Activity.frame
    
    -- Track zone changes for raids/delves
    frame:RegisterEvent("ZONE_CHANGED_NEW_AREA")
    frame:RegisterEvent("CHALLENGE_MODE_COMPLETED")
    frame:RegisterEvent("WEEKLY_REWARDS_UPDATED")
    frame:RegisterEvent("QUEST_LOG_UPDATE")
    frame:RegisterEvent("PLAYER_LOGOUT")
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

function Activity:QUEST_LOG_UPDATE()
    -- Track daily/weekly quest progress
    self:UpdateQuestProgress()
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

function Activity:UpdateQuestProgress()
    -- Scan quest log for dailies/weeklies
end

function Activity:SaveData()
    -- Persist data to SavedVariables
end

-- Get summary for UI
function Activity:GetSummary()
    return {
        raids = {},
        mythicPlus = {},
        vault = { lastUpdate = time() },
        quests = {
            daily = {},
            weekly = {},
        },
    }
end

addon.Activity = Activity
