-- ProjectX Activity Module
-- Tracks raids, M+, delves, hunting, great vault, daily/weekly quests

local addonName, addon = ...
local Activity = {}

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
    print("|cFF00FF00ProjectX|r: " .. (addon.Locale.ACTIVITY_TITLE or "Activity Module") .. " loaded")
end

-- Register events
function Activity:RegisterEvents()
    local frame = CreateFrame("Frame")

    -- Track zone changes for raids/delves
    frame:RegisterEvent("ZONE_CHANGED_NEW_AREA")
    frame:RegisterEvent("CHALLENGE_MODE_COMPLETED")
    frame:RegisterEvent("WEEKLY_REWARDS_UPDATED")
    frame:RegisterEvent("QUEST_LOG_UPDATE")
    frame:RegisterEvent("PLAYER_LOGOUT")

    frame:SetScript("OnEvent", function(self, event, ...)
        if event == "ZONE_CHANGED_NEW_AREA" then
            Activity:HandleZoneChanged()
        elseif event == "CHALLENGE_MODE_COMPLETED" then
            Activity:HandleChallengeModeCompleted()
        elseif event == "WEEKLY_REWARDS_UPDATED" then
            Activity:HandleWeeklyRewardsUpdated()
        elseif event == "QUEST_LOG_UPDATE" then
            Activity:HandleQuestLogUpdate()
        elseif event == "PLAYER_LOGOUT" then
            Activity:HandlePlayerLogout()
        end
    end)

    self.frame = frame
end

-- Event handlers
function Activity:HandleZoneChanged()
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

function Activity:HandleChallengeModeCompleted()
    -- Mythic+ completed
    self:RecordMythicPlusCompletion()
end

function Activity:HandleWeeklyRewardsUpdated()
    -- Update great vault progress
    self:UpdateVaultProgress()
end

function Activity:HandleQuestLogUpdate()
    -- Track daily/weekly quest progress
    self:UpdateQuestProgress()
end

function Activity:HandlePlayerLogout()
    -- Save data on logout
    self:SaveData()
end

-- Tracking functions (placeholders)
function Activity:TrackRaidVisit(zoneName)
    print("Raid visited: " .. (zoneName or "Unknown"))
end

function Activity:RecordMythicPlusCompletion()
    print("Mythic+ completed!")
end

function Activity:UpdateVaultProgress()
    print("Vault progress updated")
end

function Activity:UpdateQuestProgress()
    -- Scan quest log for dailies/weeklies
end

function Activity:SaveData()
    -- Persist data to SavedVariables
end

addon.Activity = Activity
