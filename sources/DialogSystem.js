var currentDialogIndex = 0;

// Populate dialog objects
function startDialog() {
    gameScreen = document.getElementById("gameScreen");
    dialogScreen = document.createElement("div");
    dialogScreen.id = "dialogScreen";

    dialogText = document.createElement("p");
    dialogText.id = "dialogText";

    exitButton = document.createElement("button");
    exitButton.id = "dialogExitButton";
    exitButton.classList.add("dialogButton");
    exitButton.setAttribute("onClick", "javascript: endDialog();");

    nextButton = document.createElement("button");
    nextButton.id = "nextDialogButton";
    nextButton.classList.add("dialogButton");
    nextButton.setAttribute("onClick", "javascript: updateDialog(testDialog);");

    dialogScreen.appendChild(exitButton);
    dialogScreen.appendChild(dialogText);
    dialogScreen.appendChild(nextButton);
    gameScreen.appendChild(dialogScreen);
}

// listOfDialog should be replaced with the item or room object name. Dialog can be pulled from those
function loadDialog(listOfDialog) {
    currentDialogIndex = 0;
    dialogText = document.getElementById("dialogText");
    dialogText.textContent = listOfDialog[currentDialogIndex];
}

function updateDialog(listOfDialog) {
    currentDialogIndex++;
    if (currentDialogIndex < listOfDialog.length) {
        dialogText = document.getElementById("dialogText");
        dialogText.textContent = listOfDialog[currentDialogIndex];
    } else {
        endDialog();
    }
}

function endDialog() {
    gameScreen = document.getElementById("gameScreen");
    dialogScreen = document.getElementById("gameScreen");
    gameScreen.removeChild(gameScreen.childNodes[gameScreen.childNodes.length - 1]);
    currentDialogIndex = 0;
}