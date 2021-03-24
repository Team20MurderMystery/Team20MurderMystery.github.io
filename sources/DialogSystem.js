var currentDialogIndex = 0;
var currentDialog = [];

// Populate dialog objects
function startDialog() {
    // Prevent game objects from showing while viewing dialog by removing them
    removeAllObjects();
    gameScreen = document.getElementById("gameScreen");
    dialogScreen = document.createElement("div");
    dialogScreen.id = "dialogScreen";

    dialogText = document.createElement("p");
    dialogText.id = "dialogText";

    exitButton = document.createElement("button");
    exitButton.id = "dialogExitButton";
    exitButton.classList.add("dialogButton");
    exitButton.setAttribute("onClick", "javascript: endDialog();");
    exitButton.innerText = "Exit";

    nextButton = document.createElement("button");
    nextButton.id = "dialogNextButton";
    nextButton.classList.add("dialogButton");
    nextButton.setAttribute("onClick", "javascript: nextDialog();");
    nextButton.innerText = "Next";

    dialogScreen.appendChild(exitButton);
    dialogScreen.appendChild(dialogText);
    dialogScreen.appendChild(nextButton);
    gameScreen.appendChild(dialogScreen);
}

function loadDialog(nameOfObject) {
    startDialog();
    for (var i = 0; i < allDialog.length; i++) {
        if (allDialog[i][0] == nameOfObject) {
            currentDialog = allDialog[i];
            break;
        }
    }
    nextDialog();
}

function nextDialog() {
    if (++currentDialogIndex >= currentDialog.length) {
        endDialog();
    } else {
        dialogText = document.getElementById("dialogText");
        dialogText.textContent = currentDialog[currentDialogIndex];
    }
}

function endDialog() {
    gameScreen = document.getElementById("gameScreen");
    dialogScreen = document.getElementById("gameScreen");
    gameScreen.removeChild(gameScreen.childNodes[gameScreen.childNodes.length - 1]);
    currentDialogIndex = 0;

    // Replace all game objects removed in startDialog()
    placeAllObjects(roomList[currentRoomIndex][1]);
}

var allDialog = [["Rhodesia",
                    "Rhodesia was an unrecognised state in southern Africa from 1965 to 1979, equivalent in territory to modern Zimbabwe.",
                    "Rhodesia was the de facto successor state to the British colony of Southern Rhodesia, which had been self-governing since achieving responsible government in 1923.",
                    "A landlocked nation, Rhodesia was bordered by South Africa to the south, Bechuanaland (later Botswana) to the southwest, Zambia to the northwest, and Mozambique (a Portuguese province until 1975) to the east."],
                 ["Kenya",
                    "The Republic of Kenya is a country in Africa with 47 semiautonomous counties governed by elected governors. Kenya stretches 580,367 square kilometres and has a population of more than 52.2 million people.",
                    "Kenya's capital and largest city is Nairobi while its oldest city and first capital is the coastal city of Mombasa.",
                    "Kisumu City is the third largest city and also an inland port on Lake Victoria. Kenya is the source of Ajiri tea, which the Professor enjoys. Kenya is also known for its production of castor oil from the castor bean plant."],
                 ["FPS",
                    "You collect some fingerprints."],
                 ["TLC",
                    "You collect a thin layer chromography mixture."],
                 ["DNA",
                    "You collect some DNA."],
                 ["Son",
                    "The professor teaching his son about anthropology."],
                 ["War Buddies",
                    "Professor Logan and Col. Mustard during the war."],
                 ["Mask",
                    "Gold Ceremonial Mask, La Leche Valley, A.D. 900-1100 of the Sican culture that inhabited what is now the north coast of Peru between about 750 and 1375"],
                 ["Vial Contents",
                    "There is a liquid substance in this vial."]
                ];