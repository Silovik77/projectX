-- ProjectX UI Module
-- Main window with tabs for all modules

local addonName, addon = ...
local UI = {}

-- Защитная функция для получения локализованной строки
local function LocaleString(key, default)
    if not addon.Locale then return default or key end
    local value = addon.Locale[key]
    return value or default or key
end

-- Инициализация базы данных UI, если она отсутствует
local function EnsureDB()
    if not ProjectXDB then ProjectXDB = {} end
    if not ProjectXDB.ui then
        ProjectXDB.ui = {
            enabled = true,
            minimapButton = true,
            windowPos = { x = 100, y = -100 },
            windowScale = 1.0,
            activeTab = "activity",
        }
    end
    -- Гарантируем наличие всех полей
    if ProjectXDB.ui.windowPos == nil then
        ProjectXDB.ui.windowPos = { x = 100, y = -100 }
    end
    if ProjectXDB.ui.windowScale == nil then
        ProjectXDB.ui.windowScale = 1.0
    end
    if ProjectXDB.ui.activeTab == nil then
        ProjectXDB.ui.activeTab = "activity"
    end
    if ProjectXDB.ui.minimapButton == nil then
        ProjectXDB.ui.minimapButton = true
    end
    if ProjectXDB.ui.enabled == nil then
        ProjectXDB.ui.enabled = true
    end
end

-- Вызываем EnsureDB сразу при загрузке модуля
EnsureDB()

-- Default UI settings
local defaults = {
    enabled = true,
    minimapButton = true,
    windowPos = { x = 100, y = -100 },
    windowScale = 1.0,
    activeTab = "activity",
}

-- Helper function to create a custom tab button
local function CreateCustomTabButton(parent, text, onClick)
    local btn = CreateFrame("Button", nil, parent, "BackdropTemplate")
    btn:SetSize(100, 32)
    btn:SetBackdrop({
        bgFile = "Interface/Tooltips/UI-Tooltip-Background",
        edgeFile = "Interface/Tooltips/UI-Tooltip-Border",
        tile = true,
        tileSize = 16,
        edgeSize = 12,
        insets = { left = 2, right = 2, top = 2, bottom = 2 }
    })
    btn:SetBackdropColor(0.15, 0.15, 0.15, 0.8)
    btn:SetBackdropBorderColor(0.4, 0.4, 0.4, 0.8)
    
    local label = btn:CreateFontString(nil, "OVERLAY", "GameFontNormal")
    label:SetText(text)
    label:SetPoint("CENTER", btn, "CENTER", 0, 1)
    btn.label = label
    
    btn:SetScript("OnClick", onClick)
    btn:SetScript("OnEnter", function(self)
        self:SetBackdropColor(0.2, 0.2, 0.2, 0.9)
        self:SetBackdropBorderColor(0.6, 0.6, 0.6, 1)
    end)
    btn:SetScript("OnLeave", function(self)
        self:SetBackdropColor(0.15, 0.15, 0.15, 0.8)
        self:SetBackdropBorderColor(0.4, 0.4, 0.4, 0.8)
    end)
    
    return btn
end

local function SetTabSelected(tab, selected)
    if selected then
        tab:SetBackdropColor(0.25, 0.25, 0.25, 0.95)
        tab:SetBackdropBorderColor(0.8, 0.8, 0.8, 1)
        tab.label:SetTextColor(1, 1, 1)
    else
        tab:SetBackdropColor(0.15, 0.15, 0.15, 0.8)
        tab:SetBackdropBorderColor(0.4, 0.4, 0.4, 0.8)
        tab.label:SetTextColor(0.7, 0.7, 0.7)
    end
end

-- Create main window
function UI:CreateMainWindow()
    if self.mainFrame then return self.mainFrame end
    
    local frame = CreateFrame("Frame", "ProjectXMainFrame", UIParent, "BackdropTemplate")
    frame:SetSize(600, 450)
    frame:SetPoint("TOPLEFT", UIParent, "TOPLEFT", defaults.windowPos.x, defaults.windowPos.y)
    frame:SetScale(defaults.windowScale)
    frame:SetMovable(true)
    frame:EnableMouse(true)
    frame:RegisterForDrag("LeftButton")
    frame:SetScript("OnDragStart", frame.StartMoving)
    frame:SetScript("OnDragStop", frame.StopMovingOrSizing)
    frame:SetClampedToScreen(true)
    frame:Hide()
    
    -- Backdrop
    frame:SetBackdrop({
        bgFile = "Interface/Tooltips/UI-Tooltip-Background",
        edgeFile = "Interface/Tooltips/UI-Tooltip-Border",
        tile = true,
        tileSize = 16,
        edgeSize = 16,
        insets = { left = 4, right = 4, top = 4, bottom = 4 }
    })
    frame:SetBackdropColor(0.05, 0.05, 0.05, 0.9)
    frame:SetBackdropBorderColor(0.4, 0.4, 0.4, 0.9)
    
    -- Title bar
    local titleBar = CreateFrame("Frame", nil, frame, "BackdropTemplate")
    titleBar:SetHeight(24)
    titleBar:SetPoint("TOPLEFT", frame, "TOPLEFT", 4, -4)
    titleBar:SetPoint("TOPRIGHT", frame, "TOPRIGHT", -4, -4)
    titleBar:SetBackdrop({
        bgFile = "Interface/Tooltips/UI-Tooltip-Background",
        edgeFile = "Interface/Tooltips/UI-Tooltip-Border",
        tile = true,
        tileSize = 16,
        edgeSize = 12,
        insets = { left = 2, right = 2, top = 2, bottom = 2 }
    })
    titleBar:SetBackdropColor(0.1, 0.1, 0.1, 1)
    titleBar:SetBackdropBorderColor(0.3, 0.3, 0.3, 1)
    
    -- Title text
    local title = titleBar:CreateFontString(nil, "OVERLAY", "GameFontNormal")
    title:SetPoint("LEFT", titleBar, "LEFT", 8, 0)
    title:SetText("|cFF00FF00ProjectX|r - " .. LocaleString("MAIN_TITLE", "Status"))
    
    -- Close button
    local closeBtn = CreateFrame("Button", nil, titleBar, "UIPanelCloseButton")
    closeBtn:SetPoint("TOPRIGHT", titleBar, "TOPRIGHT", 0, 0)
    closeBtn:SetScript("OnClick", function()
        frame:Hide()
    end)
    
    -- Tab system with custom buttons
    local tabs = {}
    local tabFrames = {}
    local tabNames = {
        { id = "activity", text = LocaleString("ACTIVITY_TITLE", "Activity") },
        { id = "settings", text = LocaleString("SETTINGS_TITLE", "Settings") },
    }
    
    local tabContainer = CreateFrame("Frame", nil, frame)
    tabContainer:SetHeight(36)
    tabContainer:SetPoint("TOPLEFT", titleBar, "BOTTOMLEFT", 0, 0)
    tabContainer:SetPoint("TOPRIGHT", titleBar, "BOTTOMRIGHT", 0, 0)
    
    for i, tabInfo in ipairs(tabNames) do
        local tab = CreateCustomTabButton(tabContainer, tabInfo.text, function()
            UI:SwitchTab(tabInfo.id)
        end)
        
        if i == 1 then
            tab:SetPoint("TOPLEFT", tabContainer, "TOPLEFT", 8, -2)
        else
            tab:SetPoint("TOPLEFT", tabs[i-1], "TOPRIGHT", 4, 0)
        end
        
        tabs[i] = tab
        
        -- Create content frame for this tab
        local content = CreateFrame("Frame", "ProjectXTabContent" .. i, frame, "BackdropTemplate")
        content:SetPoint("TOPLEFT", tabContainer, "BOTTOMLEFT", 0, -4)
        content:SetPoint("BOTTOMRIGHT", frame, "BOTTOMRIGHT", -4, 4)
        content:SetBackdrop({
            bgFile = "Interface/Tooltips/UI-Tooltip-Background",
            edgeFile = "Interface/Tooltips/UI-Tooltip-Border",
            tile = true,
            tileSize = 16,
            edgeSize = 12,
            insets = { left = 2, right = 2, top = 2, bottom = 2 }
        })
        content:SetBackdropColor(0.08, 0.08, 0.08, 0.8)
        content:SetBackdropBorderColor(0.3, 0.3, 0.3, 0.8)
        content:Hide()
        
        tabFrames[tabInfo.id] = content
    end
    
    frame.tabs = tabs
    frame.tabFrames = tabFrames
    
    -- Initialize tab content
    self:InitializeActivityTab(tabFrames.activity)
    self:InitializeSettingsTab(tabFrames.settings)
    
    self.mainFrame = frame
    return frame
end

-- Switch between tabs
function UI:SwitchTab(tabId)
    if not self.mainFrame then return end
    
    -- Hide all tabs
    for id, frame in pairs(self.mainFrame.tabFrames) do
        frame:Hide()
    end
    
    -- Deselect all tabs
    for i, tab in ipairs(self.mainFrame.tabs) do
        SetTabSelected(tab, false)
    end
    
    -- Show selected tab
    local tabFrames = self.mainFrame.tabFrames
    if tabFrames[tabId] then
        tabFrames[tabId]:Show()
        self:UpdateTabContent(tabId)
    end
    
    -- Select corresponding tab button
    local tabIndex = { activity = 1, settings = 2 }
    local tabIdx = tabIndex[tabId]
    if tabIdx and self.mainFrame.tabs[tabIdx] then
        SetTabSelected(self.mainFrame.tabs[tabIdx], true)
    end
    
    ProjectXDB.ui.activeTab = tabId
end

-- Update tab content
function UI:UpdateTabContent(tabId)
    if tabId == "activity" and addon.Activity then
        self:UpdateActivityTab()
    end
end

-- Initialize Activity tab
function UI:InitializeActivityTab(frame)
    local scroll = CreateFrame("ScrollFrame", nil, frame, "UIPanelScrollFrameTemplate")
    scroll:SetPoint("TOPLEFT", frame, "TOPLEFT", 10, -10)
    scroll:SetPoint("BOTTOMRIGHT", frame, "BOTTOMRIGHT", -30, 10)
    
    local content = CreateFrame("Frame", nil, scroll)
    content:SetSize(scroll:GetWidth(), 400)
    scroll:SetScrollChild(content)
    
    local title = content:CreateFontString(nil, "OVERLAY", "GameFontNormalLarge")
    title:SetPoint("TOP", content, "TOP", 0, -10)
    title:SetText(LocaleString("ACTIVITY_TITLE", "Activity Tracker"))
    
    local info = content:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
    info:SetPoint("TOP", title, "BOTTOM", 0, -10)
    info:SetJustifyH("LEFT")
    info:SetWidth(content:GetWidth() - 20)
    info:SetText("Loading activity data...")
    
    frame.info = info
    frame.content = content
end

-- Update Activity tab
function UI:UpdateActivityTab()
    if not self.mainFrame or not self.mainFrame.tabFrames.activity then return end
    local frame = self.mainFrame.tabFrames.activity
    if not frame.info then return end
    
    if addon.Activity then
        local summary = addon.Activity:GetSummary()
        local text = ""
        
        if summary.raids and next(summary.raids) then
            text = text .. "|cFFFFD700" .. LocaleString("RAID_TRACKED", "Raids") .. ":|r " .. table.getn(summary.raids) .. "\n"
        end
        
        if summary.mythicPlus and next(summary.mythicPlus) then
            text = text .. "|cFFFFD700" .. LocaleString("MYTHIC_PLUS_RUNS", "Mythic+") .. ":|r " .. table.getn(summary.mythicPlus) .. "\n"
        end
        
        if summary.vault and summary.vault.lastUpdate then
            text = text .. "|cFFFFD700" .. LocaleString("GREAT_VAULT_UPDATED", "Great Vault") .. ":|r " .. LocaleString("ACTIVITY_COMPLETED", "Updated") .. "\n"
        end
        
        if summary.quests and summary.quests.daily then
            local dailyCount = 0
            for _ in pairs(summary.quests.daily) do dailyCount = dailyCount + 1 end
            text = text .. "|cFFFFD700" .. LocaleString("DAILY_QUESTS", "Daily Quests") .. ":|r " .. dailyCount .. "\n"
        end
        
        if summary.quests and summary.quests.weekly then
            local weeklyCount = 0
            for _ in pairs(summary.quests.weekly) do weeklyCount = weeklyCount + 1 end
            text = text .. "|cFFFFD700" .. LocaleString("WEEKLY_QUESTS", "Weekly Quests") .. ":|r " .. weeklyCount .. "\n"
        end
        
        if text == "" then
            text = "No activity data yet."
        end
        
        frame.info:SetText(text)
    end
end

-- Initialize Settings tab
function UI:InitializeSettingsTab(frame)
    EnsureDB() -- Гарантируем инициализацию БД перед использованием
    
    local content = frame
    
    local title = content:CreateFontString(nil, "OVERLAY", "GameFontNormalLarge")
    title:SetPoint("TOP", content, "TOP", 0, -20)
    title:SetText(LocaleString("SETTINGS_TITLE", "Settings"))
    
    -- Minimap button toggle
    local mmBtnLabel = content:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
    mmBtnLabel:SetPoint("TOPLEFT", title, "BOTTOMLEFT", 0, -20)
    mmBtnLabel:SetText(LocaleString("SHOW_MINIMAP_BUTTON", "Show minimap button:"))
    
    local mmBtnCheck = CreateFrame("CheckButton", "ProjectXMMBtnCheck", content, "InterfaceOptionsCheckButtonTemplate")
    mmBtnCheck:SetPoint("LEFT", mmBtnLabel, "RIGHT", 10, 0)
    mmBtnCheck:SetChecked(ProjectXDB.ui.minimapButton)
    mmBtnCheck:SetScript("OnClick", function(self)
        ProjectXDB.ui.minimapButton = self:GetChecked()
        if addon.MinimapButton then
            if ProjectXDB.ui.minimapButton then
                addon.MinimapButton:Show()
            else
                addon.MinimapButton:Hide()
            end
        end
    end)
    
    -- Window scale slider
    local scaleLabel = content:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
    scaleLabel:SetPoint("TOPLEFT", mmBtnCheck, "BOTTOMLEFT", -2, -20)
    scaleLabel:SetText(LocaleString("WINDOW_SCALE", "Window Scale:"))
    
    local scaleSlider = CreateFrame("Slider", "ProjectXScaleSlider", content, "OptionsSliderTemplate")
    scaleSlider:SetPoint("LEFT", scaleLabel, "RIGHT", 10, 0)
    scaleSlider:SetOrientation("HORIZONTAL")
    scaleSlider:SetMinMaxValues(0.5, 2.0)
    scaleSlider:SetValueStep(0.1)
    scaleSlider:SetValue(ProjectXDB.ui.windowScale or 1.0)
    scaleSlider:SetWidth(150)
    
    local scaleText = scaleSlider:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
    scaleText:SetPoint("BOTTOM", scaleSlider, "TOP", 0, 5)
    scaleText:SetText(string.format("%.1f", ProjectXDB.ui.windowScale or 1.0))
    
    scaleSlider:SetScript("OnValueChanged", function(self, value)
        scaleText:SetText(string.format("%.1f", value))
        ProjectXDB.ui.windowScale = value
        if addon.UI and addon.UI.mainFrame then
            addon.UI.mainFrame:SetScale(value)
        end
    end)
    
    -- Reset position button
    local resetBtn = CreateFrame("Button", "ProjectXResetPosBtn", content, "UIPanelButtonTemplate")
    resetBtn:SetPoint("TOPLEFT", scaleSlider, "BOTTOMLEFT", -2, -20)
    resetBtn:SetSize(120, 22)
    resetBtn:SetText(LocaleString("RESET_WINDOW_POSITION", "Reset Position"))
    resetBtn:SetScript("OnClick", function()
        ProjectXDB.ui.windowPos = { x = 100, y = -100 }
        if addon.UI and addon.UI.mainFrame then
            addon.UI.mainFrame:ClearAllPoints()
            addon.UI.mainFrame:SetPoint("TOPLEFT", UIParent, "TOPLEFT", 100, -100)
        end
    end)
    
    frame.scaleSlider = scaleSlider
end

-- Toggle main window visibility
function UI:ToggleWindow()
    local frame = self:CreateMainWindow()
    
    if frame:IsShown() then
        frame:Hide()
    else
        frame:Show()
        self:SwitchTab(ProjectXDB.ui.activeTab or "activity")
    end
end

-- Show main window
function UI:ShowWindow()
    local frame = self:CreateMainWindow()
    frame:Show()
    self:SwitchTab(ProjectXDB.ui.activeTab or "activity")
end

-- Hide main window
function UI:HideWindow()
    if self.mainFrame then
        self.mainFrame:Hide()
    end
end

-- Save window position
function UI:SavePosition()
    if not self.mainFrame then return end
    
    local point, _, relativePoint, x, y = self.mainFrame:GetPoint()
    ProjectXDB.ui.windowPos = {
        point = point,
        relativePoint = relativePoint,
        x = x,
        y = y
    }
end

-- Initialize UI module
function UI:Initialize()
    if not ProjectXDB.ui then
        ProjectXDB.ui = {}
    end
    
    -- Merge defaults
    for key, value in pairs(defaults) do
        if ProjectXDB.ui[key] == nil then
            ProjectXDB.ui[key] = value
        end
    end
    
    if not ProjectXDB.ui.enabled then return end
    
    print("|cFF00FF00ProjectX|r: UI module loaded")
end

addon.UI = UI
