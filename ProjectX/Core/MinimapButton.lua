-- ProjectX Minimap Button Module
-- Adds a button to the minimap for quick access

local addonName, addon = ...
local MinimapButton = {}

local L = addon.Locale

-- Default settings
local defaults = {
    enabled = true,
    position = 0, -- angle in degrees
    radius = 80, -- distance from minimap center
}

-- Create minimap button
function MinimapButton:Create()
    if self.button then return self.button end
    
    local button = CreateFrame("Button", "ProjectXMinimapButton", MinimapCluster or Minimap, "SecureActionButtonTemplate")
    button:SetSize(31, 31)
    button:SetFrameStrata("MEDIUM")
    button:SetFrameLevel(8)
    button:RegisterForClicks("LeftButtonUp", "RightButtonUp")
    button:RegisterForDrag("LeftButton")
    button:EnableMouse(true)
    button:SetMovable(true)
    button:SetClampedToScreen(false)
    
    -- Icon
    local icon = button:CreateTexture(nil, "BACKGROUND")
    icon:SetAllPoints()
    icon:SetTexture("Interface/Minimap/UI-Minimap-Background")
    icon:SetTexCoord(0.1, 0.9, 0.1, 0.9)
    
    local overlay = button:CreateTexture(nil, "OVERLAY")
    overlay:SetSize(24, 24)
    overlay:SetPoint("CENTER", button, "CENTER")
    overlay:SetTexture("Interface/ICONS/INV_Misc_Map_01")
    
    -- Border
    local border = button:CreateTexture(nil, "BORDER")
    border:SetAllPoints()
    border:SetTexture("Interface/Minimap/MiniMap-TrackingBorder")
    
    button.icon = icon
    button.overlay = overlay
    button.border = border
    
    -- Drag to reposition
    button:SetScript("OnDragStart", function(self)
        self.isDragging = true
        self:LockHighlight()
    end)
    
    button:SetScript("OnDragStop", function(self)
        self.isDragging = false
        self:UnlockHighlight()
    end)
    
    button:SetScript("OnUpdate", function(self, elapsed)
        if self.isDragging then
            local minimap = MinimapCluster or Minimap
            local mx, my = minimap:GetCenter()
            local px, py = self:GetCenter()
            
            local dx = px - mx
            local dy = py - my
            local angle = math.deg(math.atan2(dy, dx))
            if angle < 0 then angle = angle + 360 end
            
            ProjectXDB.minimapButton.position = angle
            self:UpdatePosition()
        end
    end)
    
    -- Click handlers
    button:SetScript("OnClick", function(self, buttonType)
        if buttonType == "LeftButton" then
            if IsShiftKeyDown() then
                -- Shift+Click: Toggle window
                if addon.UI then
                    addon.UI:ToggleWindow()
                end
            else
                -- Left click: Open window
                if addon.UI then
                    addon.UI:ShowWindow()
                end
            end
        elseif buttonType == "RightButton" then
            -- Right click: Show context menu
            self:ShowContextMenu()
        end
    end)
    
    -- Tooltip
    button:SetScript("OnEnter", function(self)
        GameTooltip:SetOwner(self, "ANCHOR_CURSOR")
        GameTooltip:AddLine("|cFF00FF00ProjectX|r")
        GameTooltip:AddLine(" ")
        GameTooltip:AddLine("Left-click: Open window")
        GameTooltip:AddLine("Shift+Left-click: Toggle window")
        GameTooltip:AddLine("Right-click: Options menu")
        GameTooltip:AddLine("Drag: Reposition button")
        GameTooltip:Show()
    end)
    
    button:SetScript("OnLeave", function()
        GameTooltip:Hide()
    end)
    
    self.button = button
    return button
end

-- Update button position based on saved angle
function MinimapButton:UpdatePosition()
    if not self.button then return end
    
    local angle = ProjectXDB.minimapButton.position or defaults.position
    local radius = ProjectXDB.minimapButton.radius or defaults.radius
    
    local minimap = MinimapCluster or Minimap
    local mx, my = minimap:GetCenter()
    
    local rad = math.rad(angle)
    local x = mx + math.cos(rad) * radius
    local y = my + math.sin(rad) * radius
    
    self.button:ClearAllPoints()
    self.button:SetPoint("CENTER", UIParent, "BOTTOMLEFT", x, y)
end

-- Show context menu
function MinimapButton:ShowContextMenu()
    if not self.menu then
        self.menu = CreateFrame("Frame", "ProjectXMinimapMenu", UIParent, "UIDropDownMenuTemplate")
        
        local info = {}
        
        -- Open window option
        info = UIDropDownMenu_CreateInfo()
        info.text = "Open Window"
        info.notCheckable = true
        info.func = function()
            if addon.UI then
                addon.UI:ShowWindow()
            end
        end
        UIDropDownMenu_AddButton(info)
        
        -- Toggle window option
        info = UIDropDownMenu_CreateInfo()
        info.text = "Toggle Window"
        info.notCheckable = true
        info.func = function()
            if addon.UI then
                addon.UI:ToggleWindow()
            end
        end
        UIDropDownMenu_AddButton(info)
        
        -- Separator
        info = UIDropDownMenu_CreateInfo()
        info.text = ""
        info.notCheckable = true
        info.isTitle = false
        UIDropDownMenu_AddButton(info)
        
        -- Settings option
        info = UIDropDownMenu_CreateInfo()
        info.text = "Settings"
        info.notCheckable = true
        info.func = function()
            if addon.UI then
                addon.UI:ShowWindow()
                addon.UI:SwitchTab("settings")
            end
        end
        UIDropDownMenu_AddButton(info)
        
        -- Hide button option
        info = UIDropDownMenu_CreateInfo()
        info.text = "Hide Minimap Button"
        info.notCheckable = true
        info.func = function()
            ProjectXDB.minimapButton.enabled = false
            ProjectXDB.ui.minimapButton = false
            self:Hide()
            
            -- Uncheck the checkbox in settings if UI is open
            local checkBtn = _G["ProjectXMMBtnCheck"]
            if checkBtn then
                checkBtn:SetChecked(false)
            end
        end
        UIDropDownMenu_AddButton(info)
    end
    
    ToggleDropDownMenu(1, nil, self.menu, self.button, 0, 0)
end

-- Show button
function MinimapButton:Show()
    if not self.button then
        self:Create()
    end
    self.button:Show()
    self:UpdatePosition()
end

-- Hide button
function MinimapButton:Hide()
    if self.button then
        self.button:Hide()
    end
end

-- Toggle button visibility
function MinimapButton:Toggle()
    if not self.button then
        self:Create()
    end
    
    if self.button:IsShown() then
        self:Hide()
    else
        self:Show()
    end
end

-- Initialize minimap button
function MinimapButton:Initialize()
    if not ProjectXDB.minimapButton then
        ProjectXDB.minimapButton = {}
    end
    
    -- Merge defaults
    for key, value in pairs(defaults) do
        if ProjectXDB.minimapButton[key] == nil then
            ProjectXDB.minimapButton[key] = value
        end
    end
    
    if not ProjectXDB.minimapButton.enabled then return end
    
    self:Create()
    self:UpdatePosition()
    self:Show()
    
    print("|cFF00FF00ProjectX|r: Minimap button loaded")
end

addon.MinimapButton = MinimapButton
