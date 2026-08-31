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
        if self[event] then
            self[event](self, event, ...)
        end
    end)
    
    self.frame = frame
end

-- Event handlers
function Activity.frame:ZONE_CHANGED_NEW_AREA()
    -- Track current zone for activity type detection
    local zoneName = GetRealZoneText()
    local zoneID = GetZoneUIInfo(zoneName)
    
    -- Check if in raid instance
    if IsInInstance() then
        local _, instanceType = IsInInstance()
        if instanceType == "raid" then
            addon.Activity:TrackRaidVisit(zoneName)
        end
    end
end

function Activity.frame:CHALLENGE_MODE_COMPLETED()
    -- Mythic+ completed
    addon.Activity:RecordMythicPlusCompletion()
end

function Activity.frame:WEEKLY_REWARDS_UPDATED()
    -- Update great vault progress
    addon.Activity:UpdateVaultProgress()
end

function Activity.frame:QUEST_LOG_UPDATE()
    -- Track quest progress
    addon.Activity:UpdateQuestTracking()
end

function Activity.frame:PLAYER_LOGOUT()
    -- Save current state
    addon.Activity:SaveData()
end

-- Track raid visit
function Activity:TrackRaidVisit(zoneName)
    local charData = addon.Characters:GetOrCreateCharacter()
    if not charData.activities.raids then
        charData.activities.raids = {}
    end
    
    local today = date("%Y-%m-%d")
    if not charData.activities.raids[today] then
        charData.activities.raids[today] = {}
    end
    
    table.insert(charData.activities.raids[today], {
        zone = zoneName,
        timestamp = time(),
    })
end

-- Record Mythic+ completion
function Activity:RecordMythicPlusCompletion()
    local charData = addon.Characters:GetOrCreateCharacter()
    if not charData.activities.mythicPlus then
        charData.activities.mythicPlus = {}
    end
    
    local weekStart = C_DateAndTime.GetWeekOffset(0)
    local weekKey = weekStart.year .. "-W" .. weekStart.week
    
    if not charData.activities.mythicPlus[weekKey] then
        charData.activities.mythicPlus[weekKey] = {}
    end
    
    -- Get last completed keystone data
    local keystoneLevel = C_ChallengeMode.GetActiveKeystoneInfo and C_ChallengeMode.GetActiveKeystoneInfo() or 0
    
    table.insert(charData.activities.mythicPlus[weekKey], {
        level = keystoneLevel,
        timestamp = time(),
    })
end

-- Update vault progress
function Activity:UpdateVaultProgress()
    local charData = addon.Characters:GetOrCreateCharacter()
    if not charData.activities.vault then
        charData.activities.vault = {}
    end
    
    -- Get vault rewards info
    local rewards = C_WeeklyRewards.GetActivities()
    charData.activities.vault.lastUpdate = time()
    charData.activities.vault.progress = rewards
end

-- Update quest tracking
function Activity:UpdateQuestTracking()
    local charData = addon.Characters:GetOrCreateCharacter()
    if not charData.activities.quests then
        charData.activities.quests = {
            daily = {},
            weekly = {},
        }
    end
    
    local numQuests = C_QuestLog.GetNumQuestLEntries()
    for i = 1, numQuests do
        local questInfo = C_QuestLog.GetInfo(i)
        if questInfo then
            local questID = questInfo.questID
            local isDaily = questInfo.isDaily
            local isWeekly = questInfo.isWeekly
            
            if isDaily or isWeekly then
                local questType = isDaily and "daily" or "weekly"
                charData.activities.quests[questType][questID] = {
                    title = questInfo.title,
                    completed = questInfo.isComplete,
                    timestamp = time(),
                }
            end
        end
    end
end

-- Save data
function Activity:SaveData()
    -- Data is auto-saved via SavedVariables
    if ProjectXDB.debug then
        print("|cFF00FF00ProjectX|r: Activity data saved")
    end
end

-- Get activity summary
function Activity:GetSummary()
    local charData = addon.Characters:GetOrCreateCharacter()
    local summary = {
        raids = charData.activities.raids or {},
        mythicPlus = charData.activities.mythicPlus or {},
        delves = charData.activities.delves or {},
        hunting = charData.activities.hunting or {},
        vault = charData.activities.vault or {},
        quests = charData.activities.quests or {},
    }
    return summary
end

-- Reset weekly data
function Activity:ResetWeekly()
    local charData = addon.Characters:GetOrCreateCharacter()
    charData.activities.mythicPlus = {}
    charData.activities.vault = {}
    charData.activities.quests.weekly = {}
    
    print("|cFF00FF00ProjectX|r: Weekly activity data reset")
end

-- Command handler
function Activity:HandleCommand(msg)
    msg = msg:lower():trim()
    
    if msg == "" or msg == "help" then
        print("|cFF00FF00ProjectX|r Activity Commands:")
        print("  /pxactivity help - Show this help")
        print("  /pxactivity status - Show activity status")
        print("  /pxactivity reset weekly - Reset weekly data")
        print("  /pxactivity toggle <type> - Toggle tracking type")
    elseif msg == "status" then
        local summary = self:GetSummary()
        print("|cFF00FF00ProjectX|r Activity Status:")
        print("  Raids tracked: " .. (summary.raids and table.getn(summary.raids) or 0))
        print("  M+ runs: " .. (summary.mythicPlus and table.getn(summary.mythicPlus) or 0))
        print("  Vault updated: " .. (summary.vault.lastUpdate and "Yes" or "No"))
    elseif msg == "reset weekly" then
        self:ResetWeekly()
    elseif msg:find("toggle") then
        local _, _, toggleType = msg:find("toggle%s+(%w+)")
        if toggleType then
            if ProjectXDB.activity["track" .. toggleType:gsub("^%l", string.upper)] ~= nil then
                ProjectXDB.activity["track" .. toggleType:gsub("^%l", string.upper)] = not ProjectXDB.activity["track" .. toggleType:gsub("^%l", string.upper)]
                print("|cFF00FF00ProjectX|r: Tracking " .. toggleType .. " " .. (ProjectXDB.activity["track" .. toggleType:gsub("^%l", string.upper)] and "enabled" or "disabled"))
            end
        end
    end
end

addon.Activity = Activity
