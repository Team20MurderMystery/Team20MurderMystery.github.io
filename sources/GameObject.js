class GameObject {
    /**
     * name === string
     * imageSource === string
     * distFromTop === int
     * distFromLeft === int
     * clues === array of arrays
     *      EX: clues === [[clue1name,clue1data], [clue2name,clue2data], ...]
     * isLabEquipment === bool
     */
    constructor(name, imageSource, distFromTop, distFromLeft, clues, isLabEquipment) {
        this.name = name;
        this.imageSource = imageSource;
        this.distFromTop = distFromTop;
        this.distFromLeft = distFromLeft;
        this.clues = clues;
        this.isLabEquipment = isLabEquipment;
    }

    placeOnScreen() {
        /**
         * Create a new Game Object container and place it on the gameScreen
         * Note: while a Game Object is a single class here,
         *       it is composed of two elements in the html
         *             EX: <div id="GameObjectContainer>"
         *                      <img id=ObjectImage>
         *                      <button id=ObjectInspectButton></button>
         *                 </div>
         */
        var newObjectElement = document.createElement("div");
        newObjectElement.id = this.name;
        newObjectElement.classList.add("object");
        newObjectElement.style.top = this.distFromTop + "%";
        newObjectElement.style.left = this.distFromLeft + "%";

        // Create the new Game Object's image element
        var newObjectImage = document.createElement("img");
        newObjectImage.src = this.imageSource;
        newObjectImage.classList.add("objectImage");

        var newInspectButton = document.createElement("button");
        // Create a new Game Object for lab equipment
        if (this.isLabEquipment) {
            newInspectButton.innerText = "Start " + this.name;
            newInspectButton.classList.add("inspectButton");
            newInspectButton.setAttribute("onClick", "javascript: runSimulation(" + this.name + ");");
        // Create the new Game Object's inspect button
        } else {
            newInspectButton.innerText = "Inspect";
            newInspectButton.classList.add("inspectButton");
            newInspectButton.setAttribute("onClick", "javascript: inspect(" + this.name + ");");
        }

        var theScreen = document.getElementById("gameScreen");

        // put the image in the Game Object container
        newObjectElement.appendChild(newObjectImage);
        // put the button in the Game Object container
        newObjectElement.appendChild(newInspectButton);
        // put the Game Object container on the Game Screen
        theScreen.appendChild(newObjectElement);
    }

    // generates a button for each clue associated with the Game Object
    inspect() {
        var theScreen = document.getElementById("gameScreen");

        // offsets used to position the clue buttons near the GameObject
        var topOffset = 5;
        var leftOffset = 11;

        // for each clue
        for (var i = 0; i < this.clues.length; i++) {
            // create a new clue button
            var clueButton = document.createElement("button");
            clueButton.innerText = "" + this.clues[i];
            clueButton.classList.add("clueButton");
            if (this.clues[i] == "FPS") {
                console.log(this);
                clueButton.setAttribute("onClick", "javascript: fpsCollect('" + this.name + "');");
            }
            else if (this.clues[i] == "TLC") {
                clueButton.setAttribute("onClick", "javascript: tlcCollect('" + this.name + "');");
            }
            else if (this.clues[i] == "DNA") {
                clueButton.setAttribute("onClick", "javascript: dnaCollect('" + this.name + "');");
            }
            else {
                clueButton.setAttribute("onClick", "javascript: loadDialog('" + this.clues[i] + "');");
            }

            // specify the clue button position
            // clueButton.style.top = (this.distFromTop - (topOffset * i)) + "%";
            // clueButton.style.left = this.distFromLeft + leftOffset + "%";

            // place the clue button on the gameScreen
            theScreen.appendChild(clueButton); // place the clue button near the GameObject
        }
    }
}
