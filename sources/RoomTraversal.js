var currentRoomIndex = 0;
var roomDialogActivated = [false, false, false, false, false];

// Change from one room to another based on user selected direction
function traverse(direction) {
    if (roomDialogActivated[1] == false && roomDialogActivated[2] == false) {
        // Disable traverse buttons during opening dialog
        labButton.style.opacity = '0';
        leftButton.style.opacity = '0';
        rightButton.style.opacity = '0';
        labButton.style.transition = '2s';
        leftButton.style.transition = '2s';
        rightButton.style.transition = '2s';
        document.getElementById("labButton").disabled = true;
        document.getElementById("leftButton").disabled = true;
        document.getElementById("rightButton").disabled = true;
    } else if (roomDialogActivated[1] == true && roomDialogActivated[2] == false) {
        // Enable traverse buttons after opening dialog
        labButton.style.opacity = '1';
        leftButton.style.opacity = '1';
        rightButton.style.opacity = '1';
        document.getElementById("labButton").disabled = false;
        document.getElementById("leftButton").disabled = false;
        document.getElementById("rightButton").disabled = false;
    } else {
        // Exit the unclosed dialog when traverse button is clicked
        if (document.getElementById("dialogExitButton")) {
            document.getElementById("dialogExitButton").click();
        }
    }
    var nextRoomIndex = getNextRoomIndex(direction);
    loadRoom(roomList[nextRoomIndex][0], roomList[nextRoomIndex][1]);

    // Remove the simulationScreen and exitButton if traversing after opening simulation
    if (document.getElementById("simulationScreen") != null) {
        var theScreen = document.getElementById("gameScreen");
        theScreen.removeChild(document.getElementById("simulationScreen"));
        theScreen.removeChild(document.getElementById("simulationExitButton"));
    }
    produced = false;

    // Generate room introduction dialog if it hasn't been seen before
    if (roomDialogActivated[nextRoomIndex] == false) {
        roomDialogActivated[nextRoomIndex] = true;
        var roomName = roomList[nextRoomIndex][0].substr(0, roomList[nextRoomIndex][0].length - 4);
        loadDialog(roomName);
    }

}

// Populate new room background image and item objects
function loadRoom(roomImageName, listOfObjects) {
    // Remove all objects associated with the old room
    removeAllObjects();

    // Update the gameScreen to the new room
    var roomName = roomImageName.substr(0, roomImageName.length - 4);

    if (roomName == "Lab") {
        document.getElementById("gameScreen").style.backgroundImage = "url(imgs/Lab/Lab.jpg)";
    } else {
        document.getElementById("gameScreen").style.backgroundImage = "url(imgs/1_ProfessorLogan/rooms/" + roomImageName + ")";
    }

    // Place all of the new room's objects
    placeAllObjects(listOfObjects);

}

// this bool is a hot fix for a bug that would not load the lab objects on the first trip to the lab
var labBool = false;

// Determine which room to load and update the lab button accordingly
function getNextRoomIndex(direction) {
    var labButton = document.getElementById("labButton");

    // Traverse Left
    if (direction == "left") {
        if (--currentRoomIndex < 2) {
            currentRoomIndex = roomList.length - 1;

        }
        // Check for arrow traversal from lab
        if (labButton.innerText != "Go To Lab") {
            // Check if a simulation was started: end it if so
            if (document.getElementById("simulationScreen") != null) {
                endSimulation();
            }
            labButton.setAttribute("onClick", "javascript: traverse('lab');");
            labButton.innerText = "Go To Lab";
        }
    }

    // Traverse Right
    else if (direction == "right") {
        if (++currentRoomIndex >= roomList.length) {
            currentRoomIndex = 2;
        }
        // Check for arrow traversal from lab
        if (labButton.innerText != "Go To Lab") {
            // Check if a simulation was started: end it if so
            if (document.getElementById("simulationScreen") != null) {
                endSimulation();
            }
            labButton.setAttribute("onClick", "javascript: traverse('lab');");
            labButton.innerText = "Go To Lab";
        }
    }

    // Go to lab button pressed
    else if (direction == "lab") {
        var prevRoomName = roomList[currentRoomIndex][0].substr(0, roomList[currentRoomIndex][0].length - 4);
        labButton.innerText = "Return To " + prevRoomName;
        labButton.setAttribute("onClick", "javascript: traverse('return');");
        labBool = true;
        return 0;
    }

    // Return from lab button pressed
    else if (direction == "return") {
        // Check if a simulation was started: end it if so
        if (document.getElementById("simulationScreen") != null) {
            endSimulation();
        }
        labButton.setAttribute("onClick", "javascript: traverse('lab');");
        labButton.innerText = "Go To Lab";
        labBool = false;
    }

    return currentRoomIndex;
}

// Populate all item objects onto the gameScreen
function placeAllObjects(listOfGameObjects) {
    for (var i = 0; i < listOfGameObjects.length; i++) {
        listOfGameObjects[i].placeOnScreen();
    }
}


function removeAllObjects() {
    var allCurrentObjects = document.getElementsByClassName("object");
    var allPossibleClueButtons = document.getElementsByClassName("clueButton");

    // Remove all current room item and clue objects
    while (allPossibleClueButtons.length > 0) {
        allPossibleClueButtons.item(0).remove();
    }
    while (allCurrentObjects.length > 0) {
        allCurrentObjects.item(0).remove();
    }
}

window.onbeforeunload = function() { // Ask if player wants to leave
    return true;
};