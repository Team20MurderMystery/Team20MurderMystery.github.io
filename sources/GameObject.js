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
         * Create a new Game Object container
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
        if (this.isLabEquipment) { // Create a new Game Object for lab equipment
            newInspectButton.innerText = "Start " + this.name;
            newInspectButton.classList.add("inspectButton");
            newInspectButton.setAttribute("onClick", "javascript: runSimulation(" + this.name + ");");
        } else { // Create the new Game Object's inspect button
            newInspectButton.innerText = "Inspect";
            newInspectButton.classList.add("inspectButton");
            newInspectButton.setAttribute("onClick", "javascript: inspect(" + this.name + ");");
        }

        var theScreen = document.getElementById("gameScreen");
        newObjectElement.appendChild(newObjectImage); // put the image in the Game Object container
        newObjectElement.appendChild(newInspectButton); // put the button in the Game Object container
        theScreen.appendChild(newObjectElement); // put the Game Object container on the Game Screen
    }

    inspect() { // generates a button for each clue associated with the Game Object
        var theScreen = document.getElementById("gameScreen");
        var topOffset = 5; // used to position the clue buttons near the GameObject
        var leftOffset = 0;

        for (var i = 0; i < this.clues.length; i++) { // for each clue
            var clueButton = document.createElement("button"); // create a new clue button
            clueButton.innerText = "" + this.clues[i][0];
            // document.getElementsByClassName('object').appendChild(element);
            clueButton.classList.add("clueButton");
            if (this.name == "Book") {
                switch (this.clues[i][0]) {
                    case "Kenya":
                        clueButton.setAttribute("onClick", "javascript: " + this.clues[i][2] + "(" + this.name + ",0);");
                        clueButton.setAttribute("id", this.clues[i][2] + this.name + "0");
                        break;
                    case "Rhodesia":
                        clueButton.setAttribute("onClick", "javascript: " + this.clues[i][2] + "(" + this.name + ",1);");
                        clueButton.setAttribute("id", this.clues[i][2] + this.name + "1");
                        break;
                }
            } else {
                clueButton.setAttribute("onClick", "javascript: " + this.clues[i][2] + "(" + this.name + ");");
                clueButton.setAttribute("id", this.clues[i][2] + "" + this.name + "");
            }
            //clueButton.setAttribute("onClick", "javascript: " + this.clues[i][2] +"(" + this.name + ");");
            // clueButton.style.top = (this.distFromTop - (topOffset * i)) + "%"; // specify its position
            // clueButton.style.left = this.distFromLeft + leftOffset + "%";

            document.getElementById(this.name).appendChild(clueButton); // place the clue button near the GameObject
        }
    }
}