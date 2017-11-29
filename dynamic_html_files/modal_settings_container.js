function loadModalSettingsContainerReadability()
{
    //modal container
    var modalSettingsContainer = document.createElement("div");
    modalSettingsContainer.id = "_modal_settings_container";
    modalSettingsContainer.className = "modal_settings_container";
    modalSettingsContainer.style.className = "div.modal_settings_container";

    //modal content
    var modalSettingsContent = document.createElement("div");
    modalSettingsContent.id = "_modal_settings_content";
    modalSettingsContent.className = "modal_settings_content";
    modalSettingsContent.style.className = "div.modal_settings_content";

    //apply button
    var applySettingsButton = document.createElement("input");
    applySettingsButton.type = "button";
    applySettingsButton.value = "Apply";
    applySettingsButton.id = "_apply_settings_button";
    applySettingsButton.className = "apply_settings_button";
    applySettingsButton.style.className = "input.apply_settings_button";

///////////////////////////////////////////////////////////////////////////////////////

    //font label
    var textFontSettingLabel = document.createElement("p");
    textFontSettingLabel.innerHTML = "Font";
    textFontSettingLabel.id = "_text_font_setting_label";
    textFontSettingLabel.className = "settings_label text_font_setting_label";
    textFontSettingLabel.style.className = "p.settings_label";
    
    //font dropdown
    var textFontSettingDropdown = document.createElement("select");
    textFontSettingDropdown.id = "_text_font_setting_dropdown";
    textFontSettingDropdown.className = "settings_dropdown text_font_setting_dropdown";
    textFontSettingDropdown.style.className = "select.settings_dropdown";

    //font1
    var arialFont = document.createElement("option");
    arialFont.value = "Arial";
    arialFont.innerHTML = "Arial";

    //font2
    var helveticaFont = document.createElement("option");
    helveticaFont.value = "Helvetica";
    helveticaFont.innerHTML = "Helvetica";

    //font3
    var timesnewromanfont = document.createElement("option");
    timesnewromanfont.value = "Times New Roman";
    timesnewromanfont.innerHTML = "Times New Roman";

    //font4
    var verdanaFont = document.createElement("option");
    verdanaFont.value = "Verdana";
    verdanaFont.innerHTML = "Verdana";

    //font5
    var courierFont = document.createElement("option");
    courierFont.value = "Courier";
    courierFont.innerHTML = "Courier";

///////////////////////////////////////////////////////////////////////////////////////

    //font size label
    var textFontSizeSettingLabel = document.createElement("p");
    textFontSizeSettingLabel.innerHTML = "Font Size";
    textFontSizeSettingLabel.id = "_text_font_size_setting_label";
    textFontSizeSettingLabel.className = "settings_label text_font_size_setting_label"
    textFontSizeSettingLabel.style.className = "p.settings_label";

    //font size dropdown
    var textFontSizeSettingDropdown = document.createElement("select");
    textFontSizeSettingDropdown.id = "_text_font_size_setting_dropdown";
    textFontSizeSettingDropdown.className = "settings_dropdown text_font_size_setting_dropdown";
    textFontSizeSettingDropdown.style.className = "select.settings_dropdown";

    //font size 1
    var tenFont = document.createElement("option");
    tenFont.value = "10";
    tenFont.innerHTML = "10";

    //font size 2
    var twelveFont = document.createElement("option");
    twelveFont.value = "12";
    twelveFont.innerHTML = "12";

    //font size 3
    var fourteenFont = document.createElement("option");
    fourteenFont.value = "14";
    fourteenFont.innerHTML = "14";

    //font size 4
    var eighteenFont = document.createElement("option");
    eighteenFont.value = "18";
    eighteenFont.innerHTML = "18";

    //font size 5
    var twentyFont = document.createElement("option");
    twentyFont.value = "20";
    twentyFont.innerHTML = "20";

    //font size 6
    var twentyfourFont = document.createElement("option");
    twentyfourFont.value = "24";
    twentyfourFont.innerHTML = "24";

///////////////////////////////////////////////////////////////////////////////////////

    //text color label
    var textColorSettingLabel = document.createElement("p");
    textColorSettingLabel.innerHTML = "Text Color";
    textColorSettingLabel.id = "_text_color_setting_label";
    textColorSettingLabel.className = "settings_label text_color_setting_label";
    textColorSettingLabel.style.className = "p.settings_label"

    //text color dropdown
    var textColorSettingDropdown = document.createElement("select");
    textColorSettingDropdown.id = "_text_color_setting_dropdown";
    textColorSettingDropdown.className = "settings_dropdown text_color_setting_dropdown";
    textColorSettingDropdown.style.className = "select.settings_dropdown";

    //text color 1
    var textColorBlack = document.createElement("option");
    textColorBlack.value = "Black";
    textColorBlack.innerHTML = "Black";

    //text color 2
    var textColorGrey = document.createElement("option");
    textColorGrey.value = "Grey";
    textColorGrey.innerHTML = "Grey";

    //text color 3
    var textColorWhite = document.createElement("option");
    textColorWhite.value = "White";
    textColorWhite.innerHTML = "White";

/////////////////////////////////////////////////////////////////////////////////////////

    //background color label
    var backgroundColorSettingLabel = document.createElement("p");
    backgroundColorSettingLabel.innerHTML = "Background Color";
    backgroundColorSettingLabel.id = "_background_color_setting_label";
    backgroundColorSettingLabel.className = "settings_label background_color_setting_label";
    backgroundColorSettingLabel.style.className = "p.settings_label";

    //background color dropdown
    var backgroundColorSettingDropdown = document.createElement("select");
    backgroundColorSettingDropdown.id = "_background_color_setting_dropdown";
    backgroundColorSettingDropdown.className = "settings_dropdown background_color_setting_dropdown";
    backgroundColorSettingDropdown.style.className = "select.settings_dropdown";

    //background color 1
    var backgroundColorBlack = document.createElement("option");
    backgroundColorBlack.value = "Black";
    backgroundColorBlack.innerHTML = "Black";

    //background color 2
    var backgroundColorGrey = document.createElement("option");
    backgroundColorGrey.value = "Grey";
    backgroundColorGrey.innerHTML = "Grey";

    //background color 3
    var backgroundColorWhite = document.createElement("option");
    backgroundColorWhite.value = "White";
    backgroundColorWhite.innerHTML = "White";

/////////////////////////////////////////////////////////////////////////////////////////

    //line spacing label
    var lineSpacingSettingLabel = document.createElement("p");
    lineSpacingSettingLabel.innerHTML = "Line Spacing";
    lineSpacingSettingLabel.id = "_line_spacing_setting_label";
    lineSpacingSettingLabel.className = "settings_label background_color_setting_label";
    lineSpacingSettingLabel.style.className = "p.settings_label";

    //line spacing dropdown
    var lineSpacingSettingDropdown = document.createElement("select");
    lineSpacingSettingDropdown.id = "_background_color_setting_dropdown";
    lineSpacingSettingDropdown.className = "settings_dropdown line_spacing_setting_dropdown";
    lineSpacingSettingDropdown.style.className = "select.settings_dropdown";

    //line spacing 1
    var lineSpacingOne = document.createElement("option");
    lineSpacingOne.value = "1.0";
    lineSpacingOne.innerHTML = "1.0";

    //line spacing 2
    var lineSpacingOnePointFive = document.createElement("option");
    lineSpacingOnePointFive.value = "1.5";
    lineSpacingOnePointFive.innerHTML = "1.5";

    //line spacing 3
    var lineSpacingTwo = document.createElement("option");
    lineSpacingTwo.value = "2.0";
    lineSpacingTwo.innerHTML = "2.0";

    //line spacing 4
    var lineSpacingThree = document.createElement("option");
    lineSpacingThree.value = "3.0";
    lineSpacingThree.innerHTML = "3.0";

/////////////////////////////////////////////////////////////////////////////////////////

    //toggle hot keys label
    var toggleHotkeysSettingLabel = document.createElement("p");
    toggleHotkeysSettingLabel.innerHTML = "Toggle HotKeys";
    toggleHotkeysSettingLabel.id = "_toggle_hotkeys_setting_label";
    toggleHotkeysSettingLabel.className = "settings_label toggle_hotkeys_setting_label";
    toggleHotkeysSettingLabel.style.className = "p.settings_label";

    //toggle hot keys checkbox
    var toggleHotkeysSettingCheckbox = document.createElement("input");
    toggleHotkeysSettingCheckbox.type = "checkbox";
    toggleHotkeysSettingCheckbox.id = "_toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.className = "toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.style.className = "input.toggle_hot_keys_checkbox";

    //modal container
    document.getElementsByTagName("body")[0].appendChild(modalSettingsContainer);

    //modal content
    modalSettingsContainer.appendChild(modalSettingsContent);

    //apply button
    modalSettingsContent.appendChild(applySettingsButton);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //font
    modalSettingsContent.appendChild(textFontSettingLabel);
    modalSettingsContent.appendChild(textFontSettingDropdown);
    textFontSettingDropdown.appendChild(arialFont);
    textFontSettingDropdown.appendChild(helveticaFont);
    textFontSettingDropdown.appendChild(timesnewromanfont);
    textFontSettingDropdown.appendChild(verdanaFont);
    textFontSettingDropdown.appendChild(courierFont);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //font size
    modalSettingsContent.appendChild(textFontSizeSettingLabel);
    modalSettingsContent.appendChild(textFontSizeSettingDropdown);
    textFontSizeSettingDropdown.appendChild(tenFont);
    textFontSizeSettingDropdown.appendChild(twelveFont);
    textFontSizeSettingDropdown.appendChild(fourteenFont);
    textFontSizeSettingDropdown.appendChild(eighteenFont);
    textFontSizeSettingDropdown.appendChild(twentyFont);
    textFontSizeSettingDropdown.appendChild(twentyfourFont);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //text color
    modalSettingsContent.appendChild(textColorSettingLabel);
    modalSettingsContent.appendChild(textColorSettingDropdown);
    textColorSettingDropdown.appendChild(textColorBlack);
    textColorSettingDropdown.appendChild(textColorGrey);
    textColorSettingDropdown.appendChild(textColorWhite);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //background color
    modalSettingsContent.appendChild(backgroundColorSettingLabel);
    modalSettingsContent.appendChild(backgroundColorSettingDropdown);
    backgroundColorSettingDropdown.appendChild(backgroundColorBlack);
    backgroundColorSettingDropdown.appendChild(backgroundColorGrey);
    backgroundColorSettingDropdown.appendChild(backgroundColorWhite);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    
    //line spacing
    modalSettingsContent.appendChild(lineSpacingSettingLabel);
    modalSettingsContent.appendChild(lineSpacingSettingDropdown);
    lineSpacingSettingDropdown.appendChild(lineSpacingOne);
    lineSpacingSettingDropdown.appendChild(lineSpacingOnePointFive);
    lineSpacingSettingDropdown.appendChild(lineSpacingTwo);
    lineSpacingSettingDropdown.appendChild(lineSpacingThree);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //toggle hot keys
    modalSettingsContent.appendChild(toggleHotkeysSettingLabel);
    modalSettingsContent.appendChild(toggleHotkeysSettingCheckbox);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
}

function loadModalSettingsContainerSpeedReader()
{
    //modal container
    var modalSettingsContainer = document.createElement("div");
    modalSettingsContainer.id = "_modal_settings_container";
    modalSettingsContainer.className = "modal_settings_container";
    modalSettingsContainer.style.className = "div.modal_settings_container";

    //modal content
    var modalSettingsContent = document.createElement("div");
    modalSettingsContent.id = "_modal_settings_content";
    modalSettingsContent.className = "modal_settings_content";
    modalSettingsContent.style.className = "div.modal_settings_content";

    //apply button
    var applySettingsButton = document.createElement("input");
    applySettingsButton.type = "button";
    applySettingsButton.value = "Apply";
    applySettingsButton.id = "_apply_settings_button";
    applySettingsButton.className = "apply_settings_button";
    applySettingsButton.style.className = "input.apply_settings_button";

///////////////////////////////////////////////////////////////////////////////////////

    //font label
    var textFontSettingLabel = document.createElement("p");
    textFontSettingLabel.innerHTML = "Font";
    textFontSettingLabel.id = "_text_font_setting_label";
    textFontSettingLabel.className = "settings_label text_font_setting_label";
    textFontSettingLabel.style.className = "p.settings_label";
    
    //font dropdown
    var textFontSettingDropdown = document.createElement("select");
    textFontSettingDropdown.id = "_text_font_setting_dropdown";
    textFontSettingDropdown.className = "settings_dropdown text_font_setting_dropdown";
    textFontSettingDropdown.style.className = "select.settings_dropdown";

    //font1
    var arialFont = document.createElement("option");
    arialFont.value = "Arial";
    arialFont.innerHTML = "Arial";

    //font2
    var helveticaFont = document.createElement("option");
    helveticaFont.value = "Helvetica";
    helveticaFont.innerHTML = "Helvetica";

    //font3
    var timesnewromanfont = document.createElement("option");
    timesnewromanfont.value = "Times New Roman";
    timesnewromanfont.innerHTML = "Times New Roman";

    //font4
    var verdanaFont = document.createElement("option");
    verdanaFont.value = "Verdana";
    verdanaFont.innerHTML = "Verdana";

    //font5
    var courierFont = document.createElement("option");
    courierFont.value = "Courier";
    courierFont.innerHTML = "Courier";

///////////////////////////////////////////////////////////////////////////////////////

    //font size label
    var textFontSizeSettingLabel = document.createElement("p");
    textFontSizeSettingLabel.innerHTML = "Font Size";
    textFontSizeSettingLabel.id = "_text_font_size_setting_label";
    textFontSizeSettingLabel.className = "settings_label text_font_size_setting_label"
    textFontSizeSettingLabel.style.className = "p.settings_label";

    //font size dropdown
    var textFontSizeSettingDropdown = document.createElement("select");
    textFontSizeSettingDropdown.id = "_text_font_size_setting_dropdown";
    textFontSizeSettingDropdown.className = "settings_dropdown text_font_size_setting_dropdown";
    textFontSizeSettingDropdown.style.className = "select.settings_dropdown";

    //font size 1
    var tenFont = document.createElement("option");
    tenFont.value = "10";
    tenFont.innerHTML = "10";

    //font size 2
    var twelveFont = document.createElement("option");
    twelveFont.value = "12";
    twelveFont.innerHTML = "12";

    //font size 3
    var fourteenFont = document.createElement("option");
    fourteenFont.value = "14";
    fourteenFont.innerHTML = "14";

    //font size 4
    var eighteenFont = document.createElement("option");
    eighteenFont.value = "18";
    eighteenFont.innerHTML = "18";

    //font size 5
    var twentyFont = document.createElement("option");
    twentyFont.value = "20";
    twentyFont.innerHTML = "20";

    //font size 6
    var twentyfourFont = document.createElement("option");
    twentyfourFont.value = "24";
    twentyfourFont.innerHTML = "24";

///////////////////////////////////////////////////////////////////////////////////////

    //text color label
    var textColorSettingLabel = document.createElement("p");
    textColorSettingLabel.innerHTML = "Text Color";
    textColorSettingLabel.id = "_text_color_setting_label";
    textColorSettingLabel.className = "settings_label text_color_setting_label";
    textColorSettingLabel.style.className = "p.settings_label"

    //text color dropdown
    var textColorSettingDropdown = document.createElement("select");
    textColorSettingDropdown.id = "_text_color_setting_dropdown";
    textColorSettingDropdown.className = "settings_dropdown text_color_setting_dropdown";
    textColorSettingDropdown.style.className = "select.settings_dropdown";

    //text color 1
    var textColorBlack = document.createElement("option");
    textColorBlack.value = "Black";
    textColorBlack.innerHTML = "Black";

    //text color 2
    var textColorGrey = document.createElement("option");
    textColorGrey.value = "Grey";
    textColorGrey.innerHTML = "Grey";

    //text color 3
    var textColorWhite = document.createElement("option");
    textColorWhite.value = "White";
    textColorWhite.innerHTML = "White";

/////////////////////////////////////////////////////////////////////////////////////////

    //background color label
    var backgroundColorSettingLabel = document.createElement("p");
    backgroundColorSettingLabel.innerHTML = "Background Color";
    backgroundColorSettingLabel.id = "_background_color_setting_label";
    backgroundColorSettingLabel.className = "settings_label background_color_setting_label";
    backgroundColorSettingLabel.style.className = "p.settings_label";

    //background color dropdown
    var backgroundColorSettingDropdown = document.createElement("select");
    backgroundColorSettingDropdown.id = "_background_color_setting_dropdown";
    backgroundColorSettingDropdown.className = "settings_dropdown background_color_setting_dropdown";
    backgroundColorSettingDropdown.style.className = "select.settings_dropdown";

    //background color 1
    var backgroundColorBlack = document.createElement("option");
    backgroundColorBlack.value = "Black";
    backgroundColorBlack.innerHTML = "Black";

    //background color 2
    var backgroundColorGrey = document.createElement("option");
    backgroundColorGrey.value = "Grey";
    backgroundColorGrey.innerHTML = "Grey";

    //background color 3
    var backgroundColorWhite = document.createElement("option");
    backgroundColorWhite.value = "White";
    backgroundColorWhite.innerHTML = "White";

/////////////////////////////////////////////////////////////////////////////////////////

    //line spacing label
    var lineSpacingSettingLabel = document.createElement("p");
    lineSpacingSettingLabel.innerHTML = "Line Spacing";
    lineSpacingSettingLabel.id = "_line_spacing_setting_label";
    lineSpacingSettingLabel.className = "settings_label background_color_setting_label";
    lineSpacingSettingLabel.style.className = "p.settings_label";

    //line spacing dropdown
    var lineSpacingSettingDropdown = document.createElement("select");
    lineSpacingSettingDropdown.id = "_background_color_setting_dropdown";
    lineSpacingSettingDropdown.className = "settings_dropdown line_spacing_setting_dropdown";
    lineSpacingSettingDropdown.style.className = "select.settings_dropdown";

    //line spacing 1
    var lineSpacingOne = document.createElement("option");
    lineSpacingOne.value = "1.0";
    lineSpacingOne.innerHTML = "1.0";

    //line spacing 2
    var lineSpacingOnePointFive = document.createElement("option");
    lineSpacingOnePointFive.value = "1.5";
    lineSpacingOnePointFive.innerHTML = "1.5";

    //line spacing 3
    var lineSpacingTwo = document.createElement("option");
    lineSpacingTwo.value = "2.0";
    lineSpacingTwo.innerHTML = "2.0";

    //line spacing 4
    var lineSpacingThree = document.createElement("option");
    lineSpacingThree.value = "3.0";
    lineSpacingThree.innerHTML = "3.0";

/////////////////////////////////////////////////////////////////////////////////////////

    //toggle hot keys label
    var toggleHotkeysSettingLabel = document.createElement("p");
    toggleHotkeysSettingLabel.innerHTML = "Toggle HotKeys";
    toggleHotkeysSettingLabel.id = "_toggle_hotkeys_setting_label";
    toggleHotkeysSettingLabel.className = "settings_label toggle_hotkeys_setting_label";
    toggleHotkeysSettingLabel.style.className = "p.settings_label";

    //toggle hot keys checkbox
    var toggleHotkeysSettingCheckbox = document.createElement("input");
    toggleHotkeysSettingCheckbox.type = "checkbox";
    toggleHotkeysSettingCheckbox.id = "_toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.className = "toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.style.className = "input.toggle_hot_keys_checkbox";

    //modal container
    document.getElementsByTagName("body")[0].appendChild(modalSettingsContainer);

    //modal content
    modalSettingsContainer.appendChild(modalSettingsContent);

    //apply button
    modalSettingsContent.appendChild(applySettingsButton);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //font
    modalSettingsContent.appendChild(textFontSettingLabel);
    modalSettingsContent.appendChild(textFontSettingDropdown);
    textFontSettingDropdown.appendChild(arialFont);
    textFontSettingDropdown.appendChild(helveticaFont);
    textFontSettingDropdown.appendChild(timesnewromanfont);
    textFontSettingDropdown.appendChild(verdanaFont);
    textFontSettingDropdown.appendChild(courierFont);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //font size
    modalSettingsContent.appendChild(textFontSizeSettingLabel);
    modalSettingsContent.appendChild(textFontSizeSettingDropdown);
    textFontSizeSettingDropdown.appendChild(tenFont);
    textFontSizeSettingDropdown.appendChild(twelveFont);
    textFontSizeSettingDropdown.appendChild(fourteenFont);
    textFontSizeSettingDropdown.appendChild(eighteenFont);
    textFontSizeSettingDropdown.appendChild(twentyFont);
    textFontSizeSettingDropdown.appendChild(twentyfourFont);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //text color
    modalSettingsContent.appendChild(textColorSettingLabel);
    modalSettingsContent.appendChild(textColorSettingDropdown);
    textColorSettingDropdown.appendChild(textColorBlack);
    textColorSettingDropdown.appendChild(textColorGrey);
    textColorSettingDropdown.appendChild(textColorWhite);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //background color
    modalSettingsContent.appendChild(backgroundColorSettingLabel);
    modalSettingsContent.appendChild(backgroundColorSettingDropdown);
    backgroundColorSettingDropdown.appendChild(backgroundColorBlack);
    backgroundColorSettingDropdown.appendChild(backgroundColorGrey);
    backgroundColorSettingDropdown.appendChild(backgroundColorWhite);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //toggle hot keys
    modalSettingsContent.appendChild(toggleHotkeysSettingLabel);
    modalSettingsContent.appendChild(toggleHotkeysSettingCheckbox);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
}