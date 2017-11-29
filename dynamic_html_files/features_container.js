function loadFeaturesContainersReadability()
{
    //creating the navigation button container (hidden by default until the user checks on the single word navigation feature)
    var navigationButtonContainer = document.createElement("div");
    navigationButtonContainer.id = "_navigation_button_container";
    navigationButtonContainer.className = "navigation_button_container";
    navigationButtonContainer.style.className = "div.navigation_button_container";

    //creating the previous word button to place inside the navigation button container
    var previousWordButton = document.createElement("input");
    previousWordButton.type = "button";
    previousWordButton.id = "_previous_word_button";
    previousWordButton.className = "previous_word_button";
    previousWordButton.value = "Past Word";
    previousWordButton.style.className = "input.previous_word_button";

    //creating the next line button to place inside the navigation button container
    var nextLineButton = document.createElement("input");
    nextLineButton.type = "button";
    nextLineButton.id = "_next_line_button";
    nextLineButton.className = "next_line_button";
    nextLineButton.value = "Next Line";
    nextLineButton.style.className = "input.next_line_button";

    //creating the previous line button to place inside the navigation button container
    var previousLineButton = document.createElement("input");
    previousLineButton.type = "button";
    previousLineButton.id = "_previous_line_button";
    previousLineButton.className = "previous_line_button";
    previousLineButton.value = "Past Line";
    previousLineButton.style.className = "input.previous_line_button";

    //creating the next word button to place inside the navigation button container
    var NextWordButton = document.createElement("input");
    NextWordButton.type = "button";
    NextWordButton.id = "_next_word_button";
    NextWordButton.className = "next_word_button";
    NextWordButton.value = "Next Word";
    NextWordButton.style.className = "input.next_word_button";
    
    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(navigationButtonContainer);

    navigationButtonContainer.appendChild(previousWordButton);
    navigationButtonContainer.appendChild(nextLineButton);
    navigationButtonContainer.appendChild(previousLineButton);
    navigationButtonContainer.appendChild(NextWordButton);
}

function loadFeaturesContainersSpeedReader()
{
    var controlButtonContainer = document.createElement("div");
    controlButtonContainer.id = "_control_button_container";
    controlButtonContainer.className = "control_button_container";
    controlButtonContainer.style.className = "div.control_button_container";

    var percentageCompleteMeter = document.createElement("div");
    percentageCompleteMeter.id = "_percentage_complete_meter";
    percentageCompleteMeter.className = "percentage_complete_meter";
    percentageCompleteMeter.style.className = "div.percentage_complete_meter";

    var playAndPauseButton = document.createElement("input");
    playAndPauseButton.type = "button";
    playAndPauseButton.value = "Play";
    playAndPauseButton.id = "_play_and_pause_button";
    playAndPauseButton.className = "play_and_pause_button";
    playAndPauseButton.style.className = "input.play_and_pause_button";
    playAndPauseButton.addEventListener("click", function(){
        if (playAndPauseButton.value == "Play")
        {
            playAndPauseButton.value = "Pause";
        }
        else if (playAndPauseButton.value == "Pause")
        {
            playAndPauseButton.value = "Play";
        }
    });

    var resetButton = document.createElement("input");
    resetButton.type = "button";
    resetButton.value = "Reset";
    resetButton.id = "_reset_button";
    resetButton.className = "reset_button";
    resetButton.style.className = "input.reset_button";

    var increaseSpeedButton = document.createElement("input");
    increaseSpeedButton.type = "button";
    increaseSpeedButton.value = "+";
    increaseSpeedButton.id = "_increase_speed_button";
    increaseSpeedButton.className = "increase_speed_button";
    increaseSpeedButton.style.className = "input.increase_speed_button";
    increaseSpeedButton.addEventListener("click", function(){incrementWPM(50)});

    var decreaseSpeedButton = document.createElement("input");
    decreaseSpeedButton.type = "button";
    decreaseSpeedButton.value = "-";
    decreaseSpeedButton.id = "_decrease_speed_button";
    decreaseSpeedButton.className = "decrease_speed_button";
    decreaseSpeedButton.style.className = "input.decrease_speed_button";
    decreaseSpeedButton.addEventListener("click", function(){decrementWPM(50)});

    var speedOutputLabel = document.createElement("p");
    speedOutputLabel.innerHTML = userSettings.speedReaderWPM;
    speedOutputLabel.id = "_speed_output_label";
    speedOutputLabel.className = "speed_output_label";
    speedOutputLabel.style.className = "p.speed_output_label";

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(controlButtonContainer);

    document.getElementsByTagName("body")[0].appendChild(percentageCompleteMeter);
    
    controlButtonContainer.appendChild(playAndPauseButton);
    controlButtonContainer.appendChild(resetButton);
    controlButtonContainer.appendChild(increaseSpeedButton);
    controlButtonContainer.appendChild(decreaseSpeedButton);
    controlButtonContainer.appendChild(speedOutputLabel);
}

function incrementWPM(numIncrease)
{
    var speedOutputLabel = document.getElementById("_speed_output_label");
    userSettings.speedReaderWPM += numIncrease;
    speedOutputLabel.innerHTML = userSettings.speedReaderWPM;
}

function decrementWPM(numDecrease)
{
    if (userSettings.speedReaderWPM - numDecrease > 0)
    {
        var speedOutputLabel = document.getElementById("_speed_output_label");
        userSettings.speedReaderWPM -= numDecrease;
        speedOutputLabel.innerHTML = userSettings.speedReaderWPM;
    }
}