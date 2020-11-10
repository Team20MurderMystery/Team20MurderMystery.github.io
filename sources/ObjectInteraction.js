function inspect(theObjectToInspect) {
    var listOfGameObjects = roomList[currentRoomIndex][1];
    var theObjectElement = document.getElementById(theObjectToInspect.name);

    for (var i = 0; i < listOfGameObjects.length; i++) {
        if (theObjectToInspect.name == listOfGameObjects[i].name) {
            listOfGameObjects[i].inspect(); // generate clue buttons

            // "Freeze" the zoomed in image of the object
            theObjectElement.style.transform = "scale(3.5)";
            theObjectElement.style.opacity = "1";
            theObjectElement.children[1].innerText = "Exit"; // inspect button -> exit button

            /**
             * The inspect button is now an exit button
             * because the object image is "frozen" in its
             * larger form while displaying the clue buttons
             * and we need a way to know when to "unfreeze"
             * 
             * This callback function handles the "unfreezing"
            */
            theObjectElement.children[1].onclick = () => {
                // remove the generated clue buttons
                var theClueButtons = document.getElementsByClassName("clueButton");
                while (theClueButtons.length > 0) {
                    theClueButtons.item(0).remove();
                }

                // "Unfreeze" the image of the object
                theObjectElement.style.transform = "";
                theObjectElement.style.opacity = "";
                theObjectElement.children[1].innerText = "Inspect";

                // Reset the inspect button's onclick function to its original state of generating the clue buttons
                theObjectElement.children[1].setAttribute("onClick", "javascript: inspect(" + theObjectElement.id + ");");
            }
        }
    }
}