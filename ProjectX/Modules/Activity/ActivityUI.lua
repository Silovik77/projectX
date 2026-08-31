-- ProjectX/Modules/Activity/ActivityUI.lua
-- UI компонент для модуля Активностей

local addonName, addon = ...
local Activity = addon.Activity  -- Исправлено: прямой доступ к модулю

-- Защитная функция для получения локализованной строки
local function LocaleString(key, default)
    local value = addon.Locale and addon.Locale[key]
    if value then return value end
    return default or key
end

-- Создаем фрейм для UI
local frame = CreateFrame("Frame", "ProjectXActivityFrame", UIParent, "BackdropTemplate")
frame:SetSize(600, 400)
frame:SetPoint("CENTER")
frame:SetMovable(true)
frame:EnableMouse(true)
frame:RegisterForDrag("LeftButton")
frame:SetScript("OnDragStart", frame.StartMoving)
frame:SetScript("OnDragStop", frame.StopMovingOrSizing)
frame:Hide()

-- Настройка фона
frame:SetBackdrop({
    bgFile = "Interface/Tooltips/UI-Tooltip-Background",
    edgeFile = "Interface/Tooltips/UI-Tooltip-Border",
    tile = true,
    tileSize = 16,
    edgeSize = 16,
    insets = { left = 4, right = 4, top = 4, bottom = 4 }
})
frame:SetBackdropColor(0, 0, 0, 0.9)
frame:SetBackdropBorderColor(0.4, 0.4, 0.4)

-- Заголовок
local title = frame:CreateFontString(nil, "OVERLAY", "GameFontNormalLarge")
title:SetPoint("TOPLEFT", 16, -16)
title:SetText(LocaleString("ACTIVITY_TITLE", "Activity Tracker"))

-- Кнопка закрытия
local closeButton = CreateFrame("Button", nil, frame, "UIPanelCloseButton")
closeButton:SetPoint("TOPRIGHT", -8, -8)
closeButton:SetScript("OnClick", function()
    frame:Hide()
end)

-- ScrollArea для контента
local scrollFrame = CreateFrame("ScrollFrame", "ProjectXActivityScrollFrame", frame, "UIPanelScrollFrameTemplate")
scrollFrame:SetPoint("TOPLEFT", title, "BOTTOMLEFT", 0, -8)
scrollFrame:SetPoint("BOTTOMRIGHT", frame, "BOTTOMRIGHT", -32, 32)

local scrollChild = CreateFrame("Frame", nil, scrollFrame)
scrollChild:SetSize(560, 100) -- Будет изменено динамически
scrollFrame:SetScrollChild(scrollChild)

Activity.frame = frame
Activity.scrollChild = scrollChild

-- Функция обновления UI
function Activity:UpdateUI()
    if not frame:IsShown() then return end
    
    -- Очистка предыдущего контента
    for _, child in ipairs({scrollChild:GetChildren()}) do
        if child ~= scrollChild then child:Hide() end
    end
    
    local summary = self:GetSummary()  -- Исправлено: используем GetSummary вместо GetData
    local yOffset = -8
    
    -- Отображение данных
    if summary and (summary.raids or summary.mythicPlus or summary.vault or summary.quests) then
        if summary.raids and next(summary.raids) then
            local raidCount = 0
            for _, _ in pairs(summary.raids) do raidCount = raidCount + 1 end
            local line = scrollChild:CreateFontString(nil, "OVERLAY", "GameFontNormal")
            line:SetPoint("TOPLEFT", 16, yOffset)
            line:SetText(LocaleString("RAID_TRACKED", "Raids tracked") .. ": " .. raidCount)
            yOffset = yOffset - 18
        end
        
        if summary.mythicPlus and next(summary.mythicPlus) then
            local mplusCount = 0
            for _, _ in pairs(summary.mythicPlus) do mplusCount = mplusCount + 1 end
            local line = scrollChild:CreateFontString(nil, "OVERLAY", "GameFontNormal")
            line:SetPoint("TOPLEFT", 16, yOffset)
            line:SetText(LocaleString("MYTHIC_PLUS_RUNS", "Mythic+ runs") .. ": " .. mplusCount)
            yOffset = yOffset - 18
        end
        
        if summary.vault and summary.vault.lastUpdate then
            local line = scrollChild:CreateFontString(nil, "OVERLAY", "GameFontNormal")
            line:SetPoint("TOPLEFT", 16, yOffset)
            line:SetText(LocaleString("GREAT_VAULT_UPDATED", "Great Vault updated"))
            yOffset = yOffset - 18
        end
        
        if summary.quests then
            local dailyCount = 0
            if summary.quests.daily then
                for _ in pairs(summary.quests.daily) do dailyCount = dailyCount + 1 end
            end
            local weeklyCount = 0
            if summary.quests.weekly then
                for _ in pairs(summary.quests.weekly) do weeklyCount = weeklyCount + 1 end
            end
            if dailyCount > 0 or weeklyCount > 0 then
                local line = scrollChild:CreateFontString(nil, "OVERLAY", "GameFontNormal")
                line:SetPoint("TOPLEFT", 16, yOffset)
                line:SetText(LocaleString("DAILY_QUESTS", "Daily Quests") .. ": " .. dailyCount .. ", " .. LocaleString("WEEKLY_QUESTS", "Weekly Quests") .. ": " .. weeklyCount)
                yOffset = yOffset - 18
            end
        end
    end
    
    -- Если ничего не показано
    if yOffset == -8 then
        local line = scrollChild:CreateFontString(nil, "OVERLAY", "GameFontNormal")
        line:SetPoint("TOPLEFT", 16, yOffset)
        line:SetText(LocaleString("NO_ACTIVITY_DATA", "No activity data yet. Play some content!"))
        yOffset = yOffset - 18
    end
    
    scrollChild:SetHeight(math.abs(yOffset) + 20)
end

-- Показ окна
function Activity:Show()
    frame:Show()
    self:UpdateUI()
end

-- Скрытие окна
function Activity:Hide()
    frame:Hide()
end

-- Переключение видимости
function Activity:Toggle()
    if frame:IsShown() then
        self:Hide()
    else
        self:Show()
    end
end

print("|cFF00FF00ProjectX Activity UI|r loaded successfully!")
