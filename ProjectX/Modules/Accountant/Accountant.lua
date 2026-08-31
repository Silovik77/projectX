-- ProjectX Accountant Module
-- Gold tracking: total, income/expenses by source (quests, auction, repairs, etc.)

local addonName, addon = ...
local Accountant = {}

local defaults = {
    enabled = true,
    trackIncome = true,
    trackExpenses = true,
}

-- Transaction sources
local sources = {
    QUESTS = "quests",
    AUCTION = "auction",
    REPAIR = "repair",
    VENDOR = "vendor",
    TRADE = "trade",
    MAIL = "mail",
    MERCHANT = "merchant",
    OTHER = "other",
}

-- Initialize module
function Accountant:Initialize()
    if not ProjectXDB.accountant then
        ProjectXDB.accountant = {
            transactions = {},
            summary = {},
        }
    end
    
    -- Merge defaults
    for key, value in pairs(defaults) do
        if ProjectXDB.accountant[key] == nil then
            ProjectXDB.accountant[key] = value
        end
    end
    
    if not ProjectXDB.accountant.enabled then return end
    
    self:RegisterEvents()
    self:UpdateCurrentGold()
    print("|cFF00FF00ProjectX|r: " .. (addon.Locale.ACCOUNTANT_TITLE or "Accountant Module") .. " loaded")
end

-- Register events
function Accountant:RegisterEvents()
    local frame = CreateFrame("Frame")
    
    frame:RegisterEvent("PLAYER_MONEY")
    frame:RegisterEvent("TRADE_MONEY_CHANGED")
    frame:RegisterEvent("MAIL_SHOW")
    frame:RegisterEvent("MERCHANT_SHOW")
    frame:RegisterEvent("AUCTION_HOUSE_SHOW")
    frame:RegisterEvent("PLAYER_LOGOUT")
    
    frame:SetScript("OnEvent", function(self, event, ...)
        if self[event] then
            self[event](self, event, ...)
        end
    end)
    
    self.frame = frame
end

-- Event handlers
function Accountant.frame:PLAYER_MONEY()
    -- Track gold changes
    addon.Accountant:TrackGoldChange(sources.OTHER)
end

function Accountant.frame:TRADE_MONEY_CHANGED()
    -- Track trade money changes
    addon.Accountant:TrackGoldChange(sources.TRADE)
end

function Accountant.frame:MAIL_SHOW()
    -- Update gold from mail
    addon.Accountant:UpdateCurrentGold()
end

function Accountant.frame:MERCHANT_SHOW()
    -- Track merchant interactions (repairs, vendor sales)
    addon.Accountant:TrackMerchantInteraction()
end

function Accountant.frame:AUCTION_HOUSE_SHOW()
    -- Track auction house interactions
    addon.Accountant:UpdateCurrentGold()
end

function Accountant.frame:PLAYER_LOGOUT()
    -- Save current state
    addon.Accountant:SaveData()
end

-- Update current gold
function Accountant:UpdateCurrentGold()
    local charData = addon.Characters:GetOrCreateCharacter()
    local currentGold = GetMoney()
    
    charData.gold.total = currentGold
    charData.gold.lastUpdate = time()
end

-- Track gold change
function Accountant:TrackGoldChange(source)
    local charData = addon.Characters:GetOrCreateCharacter()
    local currentGold = GetMoney()
    local previousGold = charData.gold.total or 0
    local diff = currentGold - previousGold
    
    if diff ~= 0 then
        local transaction = {
            amount = diff,
            source = source,
            timestamp = time(),
            balance = currentGold,
        }
        
        -- Add to transactions
        if not ProjectXDB.accountant.transactions then
            ProjectXDB.accountant.transactions = {}
        end
        
        table.insert(ProjectXDB.accountant.transactions, transaction)
        
        -- Update summary
        self:UpdateSummary(source, diff)
        
        -- Update current gold
        charData.gold.total = currentGold
        
        if ProjectXDB.debug then
            local goldStr = self:FormatGold(diff)
            print("|cFF00FF00ProjectX|r: " .. (diff > 0 and "Income" or "Expense") .. " of " .. goldStr .. " from " .. source)
        end
    end
end

-- Track merchant interaction (repairs, vendor)
function Accountant:TrackMerchantInteraction()
    -- This would need more specific event handling for repairs vs vendor sales
    -- For now, we'll just update the current gold
    self:UpdateCurrentGold()
end

-- Update summary
function Accountant:UpdateSummary(source, amount)
    if not ProjectXDB.accountant.summary then
        ProjectXDB.accountant.summary = {}
    end
    
    local today = date("%Y-%m-%d")
    if not ProjectXDB.accountant.summary[today] then
        ProjectXDB.accountant.summary[today] = {
            income = 0,
            expenses = 0,
            bySource = {},
        }
    end
    
    if amount > 0 then
        ProjectXDB.accountant.summary[today].income = ProjectXDB.accountant.summary[today].income + amount
    else
        ProjectXDB.accountant.summary[today].expenses = ProjectXDB.accountant.summary[today].expenses + math.abs(amount)
    end
    
    if not ProjectXDB.accountant.summary[today].bySource[source] then
        ProjectXDB.accountant.summary[today].bySource[source] = 0
    end
    
    ProjectXDB.accountant.summary[today].bySource[source] = ProjectXDB.accountant.summary[today].bySource[source] + amount
end

-- Get total gold across all characters
function Accountant:GetTotalGold()
    return addon.Characters:GetTotalGold()
end

-- Get gold for current character
function Accountant:GetCharacterGold()
    local charData = addon.Characters:GetOrCreateCharacter()
    return charData.gold.total or 0
end

-- Get income/expenses summary
function Accountant:GetSummary(days)
    days = days or 7
    local summary = {
        totalIncome = 0,
        totalExpenses = 0,
        bySource = {},
    }
    
    for i = 0, days do
        local dateStr = date("%Y-%m-%d", time() - (i * 86400))
        if ProjectXDB.accountant.summary and ProjectXDB.accountant.summary[dateStr] then
            local daySummary = ProjectXDB.accountant.summary[dateStr]
            summary.totalIncome = summary.totalIncome + (daySummary.income or 0)
            summary.totalExpenses = summary.totalExpenses + (daySummary.expenses or 0)
            
            for source, amount in pairs(daySummary.bySource or {}) do
                if not summary.bySource[source] then
                    summary.bySource[source] = 0
                end
                summary.bySource[source] = summary.bySource[source] + amount
            end
        end
    end
    
    summary.net = summary.totalIncome - summary.totalExpenses
    
    return summary
end

-- Get transactions
function Accountant:GetTransactions(limit)
    limit = limit or 50
    local transactions = ProjectXDB.accountant.transactions or {}
    local result = {}
    
    for i = #transactions, max(1, #transactions - limit + 1), -1 do
        table.insert(result, transactions[i])
    end
    
    return result
end

-- Format gold string
function Accountant:FormatGold(copper)
    if not copper then return "0g" end
    
    local gold = floor(abs(copper) / 10000)
    local silver = floor((abs(copper) % 10000) / 100)
    local copper_remainder = abs(copper) % 100
    
    local sign = copper < 0 and "-" or ""
    
    if gold > 0 then
        return string.format("%s%dg %ds %dc", sign, gold, silver, copper_remainder)
    elseif silver > 0 then
        return string.format("%s%ds %dc", sign, silver, copper_remainder)
    else
        return string.format("%s%dc", sign, copper_remainder)
    end
end

-- Reset data
function Accountant:ResetData()
    ProjectXDB.accountant = {
        transactions = {},
        summary = {},
    }
    print("|cFF00FF00ProjectX|r: Accountant data reset")
end

-- Save data
function Accountant:SaveData()
    if ProjectXDB.debug then
        print("|cFF00FF00ProjectX|r: Accountant data saved")
    end
end

-- Command handler
function Accountant:HandleCommand(msg)
    msg = msg:lower():trim()
    
    if msg == "" or msg == "help" then
        print("|cFF00FF00ProjectX|r Accountant Commands:")
        print("  /pxacc help - Show this help")
        print("  /pxacc status - Show gold status")
        print("  /pxacc total - Show total gold across all chars")
        print("  /pxacc summary <days> - Show income/expense summary")
        print("  /pxacc transactions <limit> - Show recent transactions")
        print("  /pxacc reset - Reset all data")
    elseif msg == "status" then
        local charGold = self:GetCharacterGold()
        local totalGold = self:GetTotalGold()
        print("|cFF00FF00ProjectX|r Gold Status:")
        print("  This character: " .. self:FormatGold(charGold))
        print("  Total (all chars): " .. self:FormatGold(totalGold))
    elseif msg == "total" then
        local totalGold = self:GetTotalGold()
        print("|cFF00FF00ProjectX|r Total Gold: " .. self:FormatGold(totalGold))
    elseif msg:find("summary") then
        local _, _, days = msg:find("summary%s+(%d+)")
        days = days and tonumber(days) or 7
        local summary = self:GetSummary(days)
        print("|cFF00FF00ProjectX|r Summary (last " .. days .. " days):")
        print("  Income: " .. self:FormatGold(summary.totalIncome))
        print("  Expenses: " .. self:FormatGold(summary.totalExpenses))
        print("  Net: " .. self:FormatGold(summary.net))
        
        for source, amount in pairs(summary.bySource) do
            if amount ~= 0 then
                print("  " .. source .. ": " .. self:FormatGold(amount))
            end
        end
    elseif msg:find("transactions") then
        local _, _, limit = msg:find("transactions%s+(%d+)")
        limit = limit and tonumber(limit) or 10
        local transactions = self:GetTransactions(limit)
        print("|cFF00FF00ProjectX|r Recent Transactions:")
        for _, trans in ipairs(transactions) do
            local icon = trans.amount > 0 and "+" or ""
            print("  " .. icon .. self:FormatGold(trans.amount) .. " from " .. trans.source)
        end
    elseif msg == "reset" then
        self:ResetData()
    end
end

addon.Accountant = Accountant
