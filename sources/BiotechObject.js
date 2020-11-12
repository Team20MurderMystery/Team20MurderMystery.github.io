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
      newStartButton.setAttribute("onClick", "startTLC()");

      var theScreen = document.getElementById("gameScreen");
      newObjectElement.appendChild(newObjectImage); // put the image in the Game Object container
      newObjectElement.appendChild(newStartButton); // put the button in the BioTech Object container
      //newObjectElement.appendChild(newInspectButton); // put the button in the Game Object container
      theScreen.appendChild(newObjectElement); // put the Game Object container on the Game Screen
  }
}

class DNAFingerprintScanner extends GameObject {

}

/*
class BLASTer extends GameObject {

}
*/


/*
<tr>
  <th>Col 1</th>
  <th>Col 2</th>
  <th>Col 3</th>
  <th>Col 4</th>
</tr>
<tr id="space">
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
</tr>
<tr id="row1">
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
</tr>
<tr id="row2">
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
</tr>
<tr id="row3">
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
</tr>
<tr id="row4">
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
  <th><img src="imgs/Lab/tlcempty.png"></th>
</tr>
<tr>
  <th>Col 1</th>
  <th>Col 2</th>
  <th>Col 3</th>
  <th>Col 4</th>
</tr>
*/
