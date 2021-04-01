var IMAGE_DIRECTORY = "imgs/";
var currentMysterySet = "1_ProfessorLogan/";
var currentRoomIndex = 1;

function traverse(direction) {
    var nextRoomIndex = getNextRoomIndex(direction);
    loadRoom(roomList[nextRoomIndex][0], roomList[nextRoomIndex][1]);
    // Remove the simulationScreen and exitButton
    var theScreen = document.getElementById("gameScreen");
    theScreen.removeChild(document.getElementById("simulationScreen"));
    theScreen.removeChild(document.getElementById("simulationExitButton"));
    produced = false;
}

function loadRoom(roomImageName, listOfObjects) {
    // Remove all current room items
    var allCurrentObjects = document.getElementsByClassName("object");
    var allPossibleClueButtons = document.getElementsByClassName("clueButton");
    while (allCurrentObjects.length > 0 || allPossibleClueButtons.length > 0) {
        if (allCurrentObjects.length > 0) {
            allCurrentObjects.item(0).remove();
        } else {
            allPossibleClueButtons.item(0).remove();
        }
    }

    // Update the gameScreen to the new room
    var roomName = roomImageName.substr(0, roomImageName.length - 4);
    if (roomName == "Lab") {
        document.getElementById("gameScreen").style.backgroundImage = "url(" + IMAGE_DIRECTORY + "Lab/Lab.jpg)";
    } else {
        document.getElementById("gameScreen").style.backgroundImage = "url(" + IMAGE_DIRECTORY + currentMysterySet + "rooms/" + roomImageName + ")";
    }

    // Place all of the new room's objects
    placeAllObjects(listOfObjects);

}

function getNextRoomIndex(direction) {
    var labButton = document.getElementById("labButton");
    if (direction == 0) { // Return To Room button -> Go To Lab button
        labButton.setAttribute("onClick", "javascript: traverse(1);");
        labButton.innerText = "Go To Lab";
        return currentRoomIndex;
    } else if (direction == 1) { // Go To Lab button -> Return To Room button
        labButton.setAttribute("onClick", "javascript: traverse(0); endSimulation();");
        labButton.innerText = "Return To " + roomList[currentRoomIndex][0].substr(0, roomList[currentRoomIndex][0].length - 4);
        return 0;
    } else { // Regular Traversal
        if (labButton.innerText != "Go To Lab") { // Leaving lab with arrow buttons
            labButton.setAttribute("onClick", "javascript: traverse(1);");
            labButton.innerText = "Go To Lab";
        }
        if (direction == 2) { // Traverse Left
            currentRoomIndex -= 1;
            if (currentRoomIndex < 1) {
                currentRoomIndex = roomList.length - 1;
            }
        } else { // Traverse Right
            currentRoomIndex += 1;
            if (currentRoomIndex >= roomList.length) {
                currentRoomIndex = 1;
            }
        }
    }
    return currentRoomIndex;
}

function placeAllObjects(listOfGameObjects) {
    for (var i = 0; i < listOfGameObjects.length; i++) {
        listOfGameObjects[i].placeOnScreen();
    }
}