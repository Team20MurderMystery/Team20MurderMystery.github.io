class GameObject {
    /**
     * name === string
     * imageSource === string
     * distFromTop === int
     * distFromLeft === int
     * clues === array of arrays
     *      EX: clues === [[clue1name,clue1data], [clue2name,clue2data], ...]
     */
    constructor(name, imageSource, distFromTop, distFromLeft, clues) {
        this.name = name;
        this.imageSource = imageSource;
        this.distFromTop = distFromTop;
        this.distFromLeft = distFromLeft;
        this.clues = clues;
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

        // Create the new Game Object's inspect button
        var newInspectButton = document.createElement("button");
        newInspectButton.innerText = "Inspect";
        newInspectButton.classList.add("inspectButton");
        newInspectButton.setAttribute("onClick", "javascript: inspect(" + this.name + ");");

        var theScreen = document.getElementById("gameScreen");
        newObjectElement.appendChild(newObjectImage); // put the image in the Game Object container
        newObjectElement.appendChild(newInspectButton); // put the button in the Game Object container
        theScreen.appendChild(newObjectElement); // put the Game Object container on the Game Screen
    }

    inspect() { // generates a button for each clue associated with the Game Object
        var theScreen = document.getElementById("gameScreen");
        var topOffset = 5; // used to position the clue buttons near the GameObject
        var leftOffset = 11;

        for (var i = 0; i < this.clues.length; i++) { // for each clue
            var clueButton = document.createElement("button"); // create a new clue button
            clueButton.innerText = "" + this.clues[i][0];
            clueButton.classList.add("clueButton");
            clueButton.style.top = (this.distFromTop - (topOffset * i)) + "%"; // specify its position
            clueButton.style.left = this.distFromLeft + leftOffset + "%";

            theScreen.appendChild(clueButton); // place the clue button near the GameObject
        }
    }
}
