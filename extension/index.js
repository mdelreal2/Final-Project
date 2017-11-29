var readingState = "";
const READABILITY = "READABILITY";
const SPEED_READER = "SPEED_READER";

var userSettings = {
    speedReaderWPM: 400,
    readabilityLineNumber: 0
};

//function that will be called as soon as the page loads. Will be used to set the text obtained by the user into the '_output_textarea'
window.onload = function()
{
    readingState = READABILITY;

    loadAllElements();
}

function loadAllElements()
{
    //created a reference to the body on index.html
    var body = document.getElementsByTagName("body")[0];

    //remove all elements inside the body to leave a clean slate to load the document with a new layout
    while (body.hasChildNodes())
    {
        body.removeChild(body.lastChild);
    }

    //load the document with all the elements that are part of the current state of the program 
    loadMainOuputContainer();
    loadFeaturesContainers();
    loadSideBarContainer();
    loadModalSettingsContainer();
}

//onclick function linked to '_settings_icon_image' that will display a hidden container that holds the list of settings.
//for now, the user will be able to exit the settings container by clicking on the settings button again.
function toggleSettingsDisplay()
{
    var modal = document.getElementById("_modal_settings_container");

    if (window.getComputedStyle(modal).getPropertyValue("display") == "none")
    {
        modal.style.display = "block";
    }
    else
    {
        modal.style.display = "none";
    }
}

//onclick function linked to '_readability_icon_label' that will toggle between the black and blue version when clicked and change the state of the program
function toggleReadabilityState()
{
    var readabilityIcon = document.getElementById("_readability_icon_label");
    var speedReaderIcon = document.getElementById("_speed_reader_icon_label");

    var readabilityIconColor = window.getComputedStyle(readabilityIcon).getPropertyValue("color");
    var speedReaderIconColor = window.getComputedStyle(speedReaderIcon).getPropertyValue("color");

    if (readabilityIconColor == "rgb(0, 0, 0)")
    {
        readabilityIconColor = "rgb(0, 123, 255)";
        readabilityIcon.style.color = readabilityIconColor;
        readingState = READABILITY;
        loadAllElements();
    }
}

//onclick function linked to '_speed_reader_icon_label' that will toggle between the black and blue version when clicked and change the state of the program
function toggleSpeedReaderState()
{
    var speedReaderIcon = document.getElementById("_speed_reader_icon_label");
    var readabilityIcon = document.getElementById("_readability_icon_label");

    var speedReaderIconColor = window.getComputedStyle(speedReaderIcon).getPropertyValue("color");
    var readabilityIconColor = window.getComputedStyle(readabilityIcon).getPropertyValue("color");

    if (speedReaderIconColor == "rgb(0, 0, 0)")
    {
        speedReaderIconColor = "rgb(0, 123, 255)";
        speedReaderIcon.style.color = speedReaderIconColor;
        readingState = SPEED_READER;
        loadAllElements();
    }
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//Functions used to control the dynamic creation of the main output container of both stages
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function loadMainOuputContainer()
{
    //functions found inside main_output_container.js
    if (readingState == READABILITY)
    {
        loadMainOuputContainerReadability();
    }
    else if (readingState == SPEED_READER)
    {
        loadMainOuputContainerSpeedReader();
    }
}





//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Functions used to control the dynamic creation of the containers for features of both stages
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function loadFeaturesContainers()
{
    //functions found inside features_container.js
    if (readingState == READABILITY)
    {
        loadFeaturesContainersReadability();
    }
    else if (readingState == SPEED_READER)
    {
        loadFeaturesContainersSpeedReader();
    }
}



//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//Functions used to control the dynamic creation of the side bar container for both stages
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


function loadSideBarContainer()
{
    //functions found inside side_bar_container.js
    if (readingState == READABILITY)
    {
        loadSideBarContainerReadability();
    }
    else if (readingState == SPEED_READER)
    {
        loadSideBarContainerSpeedReader();
    }
}


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//Functions used to control the dynamic creation of the settings container for both stages
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function loadModalSettingsContainer()
{
    //functions found inside modal_settings_container.js
    if (readingState == READABILITY)
    {
        loadModalSettingsContainerReadability();
    }
    else if (readingState == SPEED_READER)
    {
        loadModalSettingsContainerSpeedReader();
    }
}