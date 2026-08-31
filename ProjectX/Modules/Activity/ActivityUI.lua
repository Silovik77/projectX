-- ProjectX/Modules/Activity/ActivityUI.lua
-- UI компонент для модуля Активностей

local addonName, addon = ...
local Activity = addon.Activity  -- Исправлено: прямой доступ к модулю

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
title:SetText(addon.Locale.ACTIVITY_TITLE or "Activity Tracker")

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
    
    local data = self:GetData()
    local yOffset = 0
    
    -- Пример отображения данных (будет доработано)
    local infoText = scrollChild:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
    infoText:SetPoint("TOPLEFT", 8, -8)
    infoText:SetJustifyH("LEFT")
    infoText:SetText("Activity Module Loaded\nData: " .. (data and "OK" or "No Data"))
    
    scrollChild:SetHeight(50)
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
