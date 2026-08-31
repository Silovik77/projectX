-- ProjectX Professions Module
-- Tracks professions, skill levels, concentration, order tables, knowledge points

local addonName, addon = ...
local Professions = {}

local defaults = {
    enabled = true,
    trackAll = true,
}

-- Profession IDs (Retail/Midnight)
local professionIDs = {
    -- Primary professions
    [164] = "Blacksmithing",
    [171] = "Alchemy",
    [182] = "Herbalism",
    [185] = "Cooking",
    [197] = "Tailoring",
    [202] = "Engineering",
    [333] = "Enchanting",
    [356] = "Fishing",
    [393] = "Skinning",
    [755] = "Jewelcrafting",
    [773] = "Inscription",
    [794] = "Leatherworking",
    [1161] = "Mining",
    
    -- Dragonflight/Midnight professions
    [2559] = "Dragonriding",
}

-- Initialize module
function Professions:Initialize()
    if not ProjectXDB.professions then
        ProjectXDB.professions = {}
    end
    
    -- Merge defaults
    for key, value in pairs(defaults) do
        if ProjectXDB.professions[key] == nil then
            ProjectXDB.professions[key] = value
        end
    end
    
    if not ProjectXDB.professions.enabled then return end
    
    self:RegisterEvents()
    print("|cFF00FF00ProjectX|r: " .. (addon.Locale.PROFESSIONS_TITLE or "Professions Module") .. " loaded")
end

-- Register events
function Professions:RegisterEvents()
    local frame = CreateFrame("Frame")
    
    frame:RegisterEvent("SKILL_LINES_CHANGED")
    frame:RegisterEvent("TRADE_SKILL_LIST_UPDATE")
    frame:RegisterEvent("PLAYER_LOGOUT")
    
    frame:SetScript("OnEvent", function(self, event, ...)
        if self[event] then
            self[event](self, event, ...)
        end
    end)
    
    self.frame = frame
end

-- Event handlers
function Professions.frame:SKILL_LINES_CHANGED()
    -- Update profession data when skills change
    addon.Professions:UpdateProfessions()
end

function Professions.frame:TRADE_SKILL_LIST_UPDATE()
    -- Update trade skill data
    addon.Professions:UpdateTradeSkills()
end

function Professions.frame:PLAYER_LOGOUT()
    -- Save current state
    addon.Professions:SaveData()
end

-- Update all professions
function Professions:UpdateProfessions()
    local charData = addon.Characters:GetOrCreateCharacter()
    if not charData.professions then
        charData.professions = {}
    end
    
    -- Get all profession skill lines
    for profID, profName in pairs(professionIDs) do
        local skillIndex = GetSkillLineIndexByID(profID)
        if skillIndex then
            local skillName, _, skillRank, _, tempModifier, baseModifier = GetSkillLineInfo(skillIndex)
            
            charData.professions[profID] = {
                name = skillName or profName,
                skillRank = skillRank or 0,
                tempModifier = tempModifier or 0,
                baseModifier = baseModifier or 0,
                lastUpdate = time(),
            }
        end
    end
end

-- Update trade skills (Dragonflight+ system)
function Professions:UpdateTradeSkills()
    local charData = addon.Characters:GetOrCreateCharacter()
    if not charData.professions then
        charData.professions = {}
    end
    
    -- Get trade skill data using new API
    if C_TradeSkillUI and C_TradeSkillUI.GetTradeSkillLine then
        local tradeSkillLine = C_TradeSkillUI.GetTradeSkillLine()
        if tradeSkillLine then
            local profID = tradeSkillLine.skillLineID
            charData.professions[profID] = {
                name = tradeSkillLine.name,
                skillRank = tradeSkillLine.rank or 0,
                maxRank = tradeSkillLine.maxRank or 0,
                specializationPoints = tradeSkillLine.specializationPoints or 0,
                lastUpdate = time(),
            }
        end
    end
end

-- Get profession data
function Professions:GetProfessionData(profID)
    local charData = addon.Characters:GetOrCreateCharacter()
    if charData.professions and charData.professions[profID] then
        return charData.professions[profID]
    end
    return nil
end

-- Get all professions
function Professions:GetAllProfessions()
    local charData = addon.Characters:GetOrCreateCharacter()
    return charData.professions or {}
end

-- Get knowledge points for a profession
function Professions:GetKnowledgePoints(profID)
    local profData = self:GetProfessionData(profID)
    if profData and profData.knowledgePoints then
        return profData.knowledgePoints
    end
    return 0
end

-- Get concentration for a profession
function Professions:GetConcentration(profID)
    local profData = self:GetProfessionData(profID)
    if profData and profData.concentration then
        return profData.concentration
    end
    return 0
end

-- Check if profession is learned
function Professions:IsProfessionLearned(profID)
    local profData = self:GetProfessionData(profID)
    return profData ~= nil
end

-- Get weekly knowledge sources
function Professions:GetWeeklyKnowledgeSources(profID)
    -- This would need to be implemented based on specific profession
    local charData = addon.Characters:GetOrCreateCharacter()
    if charData.professions and charData.professions[profID] then
        return charData.professions[profID].weeklySources or {}
    end
    return {}
end

-- Save data
function Professions:SaveData()
    if ProjectXDB.debug then
        print("|cFF00FF00ProjectX|r: Professions data saved")
    end
end

-- Command handler
function Professions:HandleCommand(msg)
    msg = msg:lower():trim()
    
    if msg == "" or msg == "help" then
        print("|cFF00FF00ProjectX|r Professions Commands:")
        print("  /pxprof help - Show this help")
        print("  /pxprof list - List all professions")
        print("  /pxprof <professionID> - Show profession details")
    elseif msg == "list" then
        local professions = self:GetAllProfessions()
        print("|cFF00FF00ProjectX|r Professions:")
        for profID, profData in pairs(professions) do
            print("  " .. (profData.name or "Unknown") .. ": " .. (profData.skillRank or 0))
        end
    else
        local profID = tonumber(msg)
        if profID then
            local profData = self:GetProfessionData(profID)
            if profData then
                print("|cFF00FF00ProjectX|r " .. (profData.name or "Unknown") .. ":")
                print("  Skill: " .. (profData.skillRank or 0))
                print("  Knowledge: " .. (profData.knowledgePoints or 0))
                print("  Concentration: " .. (profData.concentration or 0))
            else
                print("|cFFFF0000ProjectX|r: Profession not found")
            end
        end
    end
end

addon.Professions = Professions
