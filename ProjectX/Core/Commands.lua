-- ProjectX Commands Module
-- Additional slash commands for modules

local addonName, addon = ...

-- Extend command handler with module-specific commands
local function RegisterModuleCommands()
    -- Activity commands
    SLASH_PROJECTXACTIVITY1 = "/pxactivity"
    SlashCmdList["PROJECTXACTIVITY"] = function(msg)
        if addon.Activity then
            addon.Activity:HandleCommand(msg)
        else
            print("|cFFFF0000ProjectX|r: Activity module not loaded")
        end
    end
    
    -- Professions commands
    SLASH_PROJECTXPROFESSIONS1 = "/pxprof"
    SlashCmdList["PROJECTXPROFESSIONS"] = function(msg)
        if addon.Professions then
            addon.Professions:HandleCommand(msg)
        else
            print("|cFFFF0000ProjectX|r: Professions module not loaded")
        end
    end
    
    -- Currencies commands
    SLASH_PROJECTXCURRENCIES1 = "/pxcurr"
    SlashCmdList["PROJECTXCURRENCIES"] = function(msg)
        if addon.Currencies then
            addon.Currencies:HandleCommand(msg)
        else
            print("|cFFFF0000ProjectX|r: Currencies module not loaded")
        end
    end
    
    -- Accountant commands
    SLASH_PROJECTXACCOUNTANT1 = "/pxacc"
    SlashCmdList["PROJECTXACCOUNTANT"] = function(msg)
        if addon.Accountant then
            addon.Accountant:HandleCommand(msg)
        else
            print("|cFFFF0000ProjectX|r: Accountant module not loaded")
        end
    end
end

-- Call registration on addon load
local frame = CreateFrame("Frame")
frame:RegisterEvent("PLAYER_LOGIN")
frame:SetScript("OnEvent", function()
    RegisterModuleCommands()
end)
