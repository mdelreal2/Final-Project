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
    outputTextarea.defaultValue = "Default Text"; 

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

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(speedReaderOutputContainer);
}