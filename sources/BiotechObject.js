class BioTechObject extends GameObject {
  /*
  placeOnScreen() {
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

      // Create the new BioTech Object's Tutorial button
      var newTutorialButton = document.createElement("button");
      newTutorialButton.innerText = "Tutorial";
      newTutorialButton.classList.add("tutorialButton");
      newTutorialButton.setAttribute("onClick", "javascript: inspect(" + this.name + ");");

      var theScreen = document.getElementById("gameScreen");
      newObjectElement.appendChild(newObjectImage); // put the image in the Game Object container
      newObjectElement.appendChild(newInspectButton); // put the button in the Game Object container
      newObjectElement.appendChild(newTutorialButton); // put the button in the BioTech Object container
      theScreen.appendChild(newObjectElement); // put the Game Object container on the Game Screen
  }
  */
}

class FingerprintScanner extends GameObject {
  placeOnScreen() {
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

      // Create the new BioTech Object's Start button
      var newStartButton = document.createElement("button");
      newStartButton.innerText = "Start Fingerprint Scanner";
      newStartButton.classList.add("startButton");
      newStartButton.setAttribute("onClick", "javascript: start(" + this.name + ");");

      var theScreen = document.getElementById("gameScreen");
      newObjectElement.appendChild(newObjectImage); // put the image in the Game Object container
      newObjectElement.appendChild(newStartButton); // put the button in the BioTech Object container
      //newObjectElement.appendChild(newInspectButton); // put the button in the Game Object container
      theScreen.appendChild(newObjectElement); // put the Game Object container on the Game Screen
  }

  start() {

  }
}

class ThinLayerChromatographer extends GameObject {
  placeOnScreen() {
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

      // Create the new BioTech Object's Start button
      var newStartButton = document.createElement("button");
      newStartButton.innerText = "Start Thin Layer Chromatographer";
      newStartButton.classList.add("startButton");
      newStartButton.setAttribute("onClick", "javascript: start(" + this.name + ");");

      var theScreen = document.getElementById("gameScreen");
      newObjectElement.appendChild(newObjectImage); // put the image in the Game Object container
      newObjectElement.appendChild(newStartButton); // put the button in the BioTech Object container
      //newObjectElement.appendChild(newInspectButton); // put the button in the Game Object container
      theScreen.appendChild(newObjectElement); // put the Game Object container on the Game Screen
  }


  start() {
    var newObjectElement = document.createElement("div")
    newObjectElement.id = this.name;
    newObjectElement.classList.add("object");
    newObjectElement.style.top = this.distFromTop + "%";
    newObjectElement.style.left = this.distFromLeft + "%";

    //var tlcScreen = document.createElement("table");

    var tclelement = row


    var theScreen = document.getElementById("gameScreen");
    theScreen.appendChild(newObjectElement); // put the Game Object container on the Game Screen
    /*
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
    */
  }
}

class DNAFingerprintScanner extends GameObject {

}

/*
class BLASTer extends GameObject {

}
*/
