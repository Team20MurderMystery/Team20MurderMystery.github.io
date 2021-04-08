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

function collectDialog(evidenceType, nameOfObject) {
    startDialog();
    currentDialog = ["", "You collect the " + evidenceType + " from the " + nameOfObject + "."];
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
    gameScreen.removeChild(gameScreen.childNodes[gameScreen.childNodes.length - 1]);
    currentDialogIndex = 0;

    // Replace all game objects removed in startDialog()
    if (labBool == true) {
        placeAllObjects(roomList[0][1]);
    } else {
        placeAllObjects(roomList[currentRoomIndex][1]); //******************* HERE */
    }

    // Traverse from the intro screen into the actual Mystery Set
    if (roomDialogActivated[1] == true && roomDialogActivated[2] == false) {
        traverse("right");
    }
}

var allDialog = [
    ["Intro",
        "Welcome to Murder Mystery, we're so glad you're here! There are troubles afoot and it's up to you to solve the crime!",
        "Use the arrow buttons to the left to travel between rooms and find clues to inspect! You can store these clues in your inventory.",
        "After you've collected some evidence, take it to the lab for analysis using the 'Go To Lab' button.",
        "While in the lab, process the evidence with the biotechnology machine of the same color.",
        "That's about it, good luck out there Detective! We know you'll do a great job solving the mystery!"
    ],
    ["Rhodesia",
        "Rhodesia was an unrecognised state in southern Africa from 1965 to 1979, equivalent in territory to modern Zimbabwe.",
        "Rhodesia was the de facto successor state to the British colony of Southern Rhodesia, which had been self-governing since achieving responsible government in 1923.",
        "A landlocked nation, Rhodesia was bordered by South Africa to the south, Bechuanaland (later Botswana) to the southwest, Zambia to the northwest, and Mozambique (a Portuguese province until 1975) to the east."
    ],
    ["Kenya",
        "The Republic of Kenya is a country in Africa with 47 semiautonomous counties governed by elected governors. Kenya stretches 580,367 square kilometres and has a population of more than 52.2 million people.",
        "Kenya's capital and largest city is Nairobi while its oldest city and first capital is the coastal city of Mombasa.",
        "Kisumu City is the third largest city and also an inland port on Lake Victoria. Kenya is the source of Ajiri tea, which the Professor enjoys. Kenya is also known for its production of castor oil from the castor bean plant."
    ],
    ["Professor Plum",
        "An old photo of Professor Logan and Professor Plum.",
        "Professor Plum is an associate of Prof. Logan working in the same university, but not the same departments. Professor Plum is an Ecologist specializing in amphibians.",
        "The two professors have a frenemy relationship where each one works well with the other, but they also try to take down one another behind each of their backs.",
        "They have recently been working together to plan a group research trip to Chile, South America."
    ],
    ["War Buddies",
        "Professor Logan and Col. Mustard during the war.",
        "Colonel Mustard is a close personal friend of Prof. Logan. The Colonel and the Professor have worked together since Prof. Logan’s time in the army during the war.",
        "The Colonel and Prof. Logan served together in Kenya during the war. The colonel often kept Castor Bean plants as ornamentals in his office.",
        "Colonel Mustard has unexpectedly met up with Prof. Logan’s wife several times recently while she was out on errands for the house. The Professor’s wife has told her husband each time the two met up but Prof. Logan had yet to confront the Colonel about these coincidences."
    ],
    ["Mask",
        "Gold Ceremonial Mask, La Leche Valley, A.D. 900-1100 of the Sican culture that inhabited what is now the north coast of Peru between about 750 and 1375"
    ],
    ["Vial Contents",
        "There is a liquid substance in this vial."
    ],
    ["Study",
        "This is the Study, the scene of the crime. Professor Logan was found dead on the floor this morning by his maid, Yvette, who immediately called for the police department.",
        "Professor Logan was an anthropologist specializing in cultures living in the Andes mountains of South America.",
        "Given the number of enemies Dr. Logan had, the police suspect foul play.",
        "Yvette explains that the professor has been feeling very ill over the past several days. He complained specifically of nausea, a burning sensation in the throat, and violent diarrhea. Despite drinking plenty of water and tea, he has been feeling extraordinarily dehydrated."
    ],
    ["Fireplace",
        "This is the Fireplace, it looks like the area has been cleaned!",
        "Jeeves is the latest of a family of long-time butlers serving the Logans since the middle of the 19th Century.",
        "The work of his family, and especially, himself has been beyond reproach and top-notch.",
        "There are times when one might suspect the butler has done it. Is this one of those times?"
    ],
    ["Kitchen",
        "This is Mrs. Whites Kitchen, surely there's some evidence to be found around here!"
    ],
    ["Lab",
        "Welcome to the Biotechnolgy Lab, here is where you can analyze any evidence you've previously collected to help narrow down the killer!"
    ],
    ["AlreadyCollected",
        "You already have this in your inventory!"
    ]
];