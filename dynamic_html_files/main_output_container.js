function loadMainOuputContainerReadability()
{
    //creating the main output container
    var mainOutputContainer = document.createElement("div");
    mainOutputContainer.id = "_main_output_container";
    mainOutputContainer.className = "main_output_container";
    mainOutputContainer.style.className = "div.main_output_container";

    //creating the output text area to place inside the main output container
    var outputTextarea = document.createElement("textarea");
    outputTextarea.id = "_output_textarea";
    outputTextarea.className = "output_textarea";
    outputTextarea.style.className = "textarea.output_textarea";
    outputTextarea.readOnly = true;

    //setting all the user settings for the text
    outputTextarea.style.fontFamily = userSettings.readabilityFont;
    outputTextarea.style.fontSize = userSettings.readabilityFontSize;
    outputTextarea.style.color = userSettings.readabilityTextColor;
    outputTextarea.style.backgroundColor = userSettings.readabilityBackgroundColor;
    outputTextarea.style.lineHeight = userSettings.readabilityLineSpacing;

    //setting the text inside the textarea
    var data = localStorage.getItem("userInput");
    outputTextarea.value = JSON.parse(data);

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(mainOutputContainer);

    mainOutputContainer.appendChild(outputTextarea);
}

function loadMainOuputContainerSpeedReader()
{
    //creating the speed reader output container
    var speedReaderOutputContainer = document.createElement("div");
    speedReaderOutputContainer.id = "_speed_reader_output_container";
    speedReaderOutputContainer.className = "speed_reader_output_container";
    speedReaderOutputContainer.style.className = "div.speed_reader_output_container";

    var speedReaderOutputTextarea = document.createElement("textarea");
    speedReaderOutputTextarea.id = "_speed_reader_output_textarea";
    speedReaderOutputTextarea.className = "speed_reader_output_textarea";
    speedReaderOutputTextarea.style.className = "textarea.speed_reader_output_textarea";
    speedReaderOutputTextarea.readOnly = true;

    //setting all the user settings for the text
    speedReaderOutputTextarea.style.fontFamily = userSettings.speedReaderFont;
    speedReaderOutputTextarea.style.fontSize = userSettings.speedReaderFontSize;
    speedReaderOutputTextarea.style.color = userSettings.speedReaderTextColor;
    speedReaderOutputTextarea.style.backgroundColor = userSettings.speedReaderBackgroundColor;

    //----------------debugging purposes
    //setting the text inside the container
    var data = localStorage.getItem("userInput");
    speedReaderOutputTextarea.value = JSON.parse(data);

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(speedReaderOutputContainer);

    speedReaderOutputContainer.appendChild(speedReaderOutputTextarea);
}