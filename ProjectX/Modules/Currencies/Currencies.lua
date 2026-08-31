-- ProjectX Currencies Module
-- Configurable tracking of any currencies across all characters

local addonName, addon = ...
local Currencies = {}

local defaults = {
    enabled = true,
    trackedCurrencies = {},
}

-- Default currency IDs (Retail/Midnight)
local defaultCurrencies = {
    -- Gold
    [0] = "Gold",
    
    -- Battle.net currencies
    [1802] = "War Bonds",
    
    -- Dragonflight currencies
    [2051] = "Dragon Isles Supplies",
    [2556] = "Elemental Overflow",
    [2594] = "Paracausal Flakes",
    
    -- Midnight/The War Within currencies
    [3147] = "Resonance Crystals",
    [3148] = "Threads of Fate",
    
    -- Raid currencies
    [1166] = "Echoes of Ny'alotha",
    [1896] = "Cosmic Flux",
    
    -- PvP currencies
    [1600] = "Honor Points",
    [1602] = "Conquest Points",
    
    -- Mythic+
    [1755] = "Valor",
    
    -- Profession currencies
    [2348] = "Artisan's Mettle",
    [2349] = "Spark of Ingenuity",
}

-- Initialize module
function Currencies:Initialize()
    if not ProjectXDB.currencies then
        ProjectXDB.currencies = {
            tracked = {},
            history = {},
        }
    end
    
    -- Merge defaults
    for key, value in pairs(defaults) do
        if ProjectXDB.currencies[key] == nil then
            ProjectXDB.currencies[key] = value
        end
    end
    
    -- Initialize tracked currencies with defaults if empty
    if table.getn(ProjectXDB.currencies.tracked) == 0 then
        for currID, _ in pairs(defaultCurrencies) do
            ProjectXDB.currencies.tracked[currID] = true
        end
    end
    
    if not ProjectXDB.currencies.enabled then return end
    
    self:RegisterEvents()
    print("|cFF00FF00ProjectX|r: " .. (addon.Locale.CURRENCIES_TITLE or "Currencies Module") .. " loaded")
end

-- Register events
function Currencies:RegisterEvents()
    local frame = CreateFrame("Frame")
    
    frame:RegisterEvent("CURRENCY_DISPLAY_UPDATE")
    frame:RegisterEvent("PLAYER_LOGOUT")
    
    frame:SetScript("OnEvent", function(self, event, ...)
        if self[event] then
            self[event](self, event, ...)
        end
    end)
    
    self.frame = frame
end

-- Event handlers
function Currencies.frame:CURRENCY_DISPLAY_UPDATE()
    -- Update currency data when currencies change
    addon.Currencies:UpdateCurrencies()
end

function Currencies.frame:PLAYER_LOGOUT()
    -- Save current state
    addon.Currencies:SaveData()
end

-- Update all tracked currencies
function Currencies:UpdateCurrencies()
    local charData = addon.Characters:GetOrCreateCharacter()
    if not charData.currencies then
        charData.currencies = {}
    end
    
    for currID, isTracked in pairs(ProjectXDB.currencies.tracked or {}) do
        if isTracked then
            local currencyInfo = C_CurrencyInfo.GetCurrencyInfo(currID)
            if currencyInfo then
                charData.currencies[currID] = {
                    name = currencyInfo.name,
                    quantity = currencyInfo.quantity,
                    maxQuantity = currencyInfo.maxQuantity,
                    iconFileID = currencyInfo.iconFileID,
                    lastUpdate = time(),
                }
                
                -- Track history
                if not ProjectXDB.currencies.history then
                    ProjectXDB.currencies.history = {}
                end
                
                local today = date("%Y-%m-%d")
                if not ProjectXDB.currencies.history[today] then
                    ProjectXDB.currencies.history[today] = {}
                end
                
                ProjectXDB.currencies.history[today][currID] = {
                    quantity = currencyInfo.quantity,
                    timestamp = time(),
                }
            end
        end
    end
end

-- Get currency data
function Currencies:GetCurrencyData(currID)
    local charData = addon.Characters:GetOrCreateCharacter()
    if charData.currencies and charData.currencies[currID] then
        return charData.currencies[currID]
    end
    return nil
end

-- Get all currencies
function Currencies:GetAllCurrencies()
    local charData = addon.Characters:GetOrCreateCharacter()
    return charData.currencies or {}
end

-- Get total currency across all characters
function Currencies:GetTotalCurrency(currID)
    local total = 0
    for _, charData in pairs(ProjectXDB.chars or {}) do
        if charData.currencies and charData.currencies[currID] then
            total = total + (charData.currencies[currID].quantity or 0)
        end
    end
    return total
end

-- Toggle currency tracking
function Currencies:ToggleTracking(currID)
    if not ProjectXDB.currencies.tracked then
        ProjectXDB.currencies.tracked = {}
    end
    
    ProjectXDB.currencies.tracked[currID] = not ProjectXDB.currencies.tracked[currID]
    
    local status = ProjectXDB.currencies.tracked[currID] and "enabled" or "disabled"
    print("|cFF00FF00ProjectX|r: Tracking for currency ID " .. currID .. " " .. status)
    
    -- Update current character data
    self:UpdateCurrencies()
end

-- Add custom currency to track
function Currencies:AddTrackedCurrency(currID)
    if not ProjectXDB.currencies.tracked then
        ProjectXDB.currencies.tracked = {}
    end
    
    ProjectXDB.currencies.tracked[currID] = true
    print("|cFF00FF00ProjectX|r: Added currency ID " .. currID .. " to tracking")
    
    self:UpdateCurrencies()
end

-- Remove currency from tracking
function Currencies:RemoveTrackedCurrency(currID)
    if ProjectXDB.currencies.tracked then
        ProjectXDB.currencies.tracked[currID] = nil
        print("|cFF00FF00ProjectX|r: Removed currency ID " .. currID .. " from tracking")
    end
end

-- Get currency history
function Currencies:GetCurrencyHistory(currID, days)
    days = days or 7
    local history = {}
    
    for i = 0, days do
        local dateStr = date("%Y-%m-%d", time() - (i * 86400))
        if ProjectXDB.currencies.history and ProjectXDB.currencies.history[dateStr] then
            if ProjectXDB.currencies.history[dateStr][currID] then
                table.insert(history, {
                    date = dateStr,
                    quantity = ProjectXDB.currencies.history[dateStr][currID].quantity,
                })
            end
        end
    end
    
    return history
end

-- Save data
function Currencies:SaveData()
    if ProjectXDB.debug then
        print("|cFF00FF00ProjectX|r: Currencies data saved")
    end
end

-- Command handler
function Currencies:HandleCommand(msg)
    msg = msg:lower():trim()
    
    if msg == "" or msg == "help" then
        print("|cFF00FF00ProjectX|r Currencies Commands:")
        print("  /pxcurr help - Show this help")
        print("  /pxcurr list - List tracked currencies")
        print("  /pxcurr total <id> - Show total currency across chars")
        print("  /pxcurr toggle <id> - Toggle currency tracking")
        print("  /pxcurr add <id> - Add currency to tracking")
        print("  /pxcurr remove <id> - Remove currency from tracking")
    elseif msg == "list" then
        local currencies = self:GetAllCurrencies()
        print("|cFF00FF00ProjectX|r Tracked Currencies:")
        for currID, currData in pairs(currencies) do
            print("  " .. (currData.name or "Unknown") .. ": " .. (currData.quantity or 0))
        end
    elseif msg:find("total") then
        local _, _, currID = msg:find("total%s+(%d+)")
        if currID then
            currID = tonumber(currID)
            local total = self:GetTotalCurrency(currID)
            local currData = self:GetCurrencyData(currID)
            print("|cFF00FF00ProjectX|r Total " .. (currData and currData.name or "Currency") .. ": " .. total)
        end
    elseif msg:find("toggle") then
        local _, _, currID = msg:find("toggle%s+(%d+)")
        if currID then
            self:ToggleTracking(tonumber(currID))
        end
    elseif msg:find("add") then
        local _, _, currID = msg:find("add%s+(%d+)")
        if currID then
            self:AddTrackedCurrency(tonumber(currID))
        end
    elseif msg:find("remove") then
        local _, _, currID = msg:find("remove%s+(%d+)")
        if currID then
            self:RemoveTrackedCurrency(tonumber(currID))
        end
    end
end

addon.Currencies = Currencies
