function startSimulation() {
    var theObjects = document.getElementsByClassName("object");
    // Hide the current objects so they don't hover through the simulationScreen
    for (var i = 0; i < theObjects.length; i++) {
      theObjects.item(i).style.visibility = "hidden";
    }

    var theScreen = document.getElementById("gameScreen");
    // Create the simulation screen on top of the gameScreen
    var simulationScreen = document.createElement("div");
    simulationScreen.id = "simulationScreen";
    simulationScreen.classList.add("simulationScreen");
    
    // Provide a way of leaving the simulation
    var exitButton = document.createElement("button");
    exitButton.id = "simulationExitButton";
    exitButton.classList.add("simulationExitButton");
    exitButton.innerText = "Exit";
    exitButton.setAttribute("onClick", "javascript: endSimulation();");

    // Place the simulationScreen and exitButton on the gameScreen
    theScreen.appendChild(simulationScreen);
    theScreen.appendChild(exitButton);
}

function endSimulation() {
    var theObjects = document.getElementsByClassName("object");
    // Show the current objects in the room
    for (var i = 0; i < theObjects.length; i++) {
      theObjects.item(i).style.visibility = "visible";
    }

    // Remove the simulationScreen and exitButton
    var theScreen = document.getElementById("gameScreen");
    theScreen.removeChild(document.getElementById("simulationScreen"));
    theScreen.removeChild(document.getElementById("simulationExitButton"));
}

function runSimulation(nameOfSimulationToRun) {
    startSimulation();

    if (nameOfSimulationToRun.id == "FPS") {
        // fps(); // call the js function that does fps

        // in that function, use the following line to get the screen for the simulation
        var simulationScreen = document.getElementById("simulationScreen");

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL FPS JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[0];
        simulationScreen.appendChild(instructions);
    } else if (nameOfSimulationToRun.id == "TLC") {
        // tlc(); // call the js function that does tlc

        // in that function, use the following line to get the screen for the simulation
        var simulationScreen = document.getElementById("simulationScreen");

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL TLC JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[1];
        simulationScreen.appendChild(instructions);
    } else if (nameOfSimulationToRun.id == "DNA") {
        // dna(); // call the js function that does dna

        // in that function, use the following line to get the screen for the simulation
        var simulationScreen = document.getElementById("simulationScreen");

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL DNA JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[2];
        simulationScreen.appendChild(instructions);
    } else {
        // blast(); // call the js function that does blast

        // in that function, use the following line to get the screen for the simulation
        var simulationScreen = document.getElementById("simulationScreen");

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL BLAST JS FUNCTION CALL ABOVE
        var instructions = document.createElement('button');
        instructions.innerText = "Blast Tutorial";
        instructions.classList.add("labButton");
        instructions.setAttribute("onClick", "javascript: window.open('sources/ToturialSlide.html','_blank');");
        simulationScreen.appendChild(instructions);
    }
}

//var inventory = [{"teacup", "fps"}, {"cakesmudge", "tlc"}]
var inventory = ["teacup", "cakesmudge"]

function brush(object) {
    window.alert("You have collected fingerprints from the " + object)

}
function description(object) {
    window.alert("Shows info for " + object)

}

function disableObject(object){
  document.getElementById(object).style.display = "none";
}

function enableObject(object){
  document.getElementById(object).style.display = "block";
}

function labroom() {
  var x = document.getElementById("mansion");
  var y = document.getElementById("lab");
  var z = document.getElementById("simulator");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    disableObject("img_book_div");
    disableObject("img_plate_div");
    disableObject("img_pipe_div");
    disableObject("img_teacup_div");

  } else if (z.style.display === "block"){
    z.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "none";
    enableObject("img_book_div");
    enableObject("img_plate_div");
    enableObject("img_pipe_div");
    enableObject("img_teacup_div");
  }
}

function fps() {
  console.log("hit");
  document.getElementById('display').setAttribute("src", "imgs/lab_imgs/fps.jpg")
  document.getElementById('runSim').setAttribute("value", "Run Fingerprint Scanner")
  document.getElementById('closeSim').setAttribute("value", "Close Fingerprint Scanner")
  var myDiv = document.getElementById("simulator");
  myDiv.style.display = "block";

  var object = "teacup"
}

function tlc() {
  document.getElementById('display').setAttribute("src", "imgs/lab_imgs/tlc.jpg")
  document.getElementById('runSim').setAttribute("value", "Run TLC")
  document.getElementById('closeSim').setAttribute("value", "Close TLC")
  var myDiv = document.getElementById("simulator");
  myDiv.style.display = "block";

  var object = "teacup"
}

function analyze() {
  var sim = document.getElementById('runSim').getAttribute("value")
  var list = document.getElementById('list')
  list.value = "none";
  var option = ""
  var object = "Teacup"

  /*
  if (list.value === "none") {
    sim.disabled = true;
    analyze();
  } else {
    sim.disabled = false;
    analyze();
  }
  */

  if (sim === "Run TLC")
    object = "Plate";

  if (sim === "Run Fingerprint Scanner" || sim === "Run TLC")
    document.getElementById('display').setAttribute("src", "imgs/1_ProfessorLogan_imgs/" + object + ".png")



  /*
  for (i = 0; i < inventory.length(); i++)  {
      option = document.createElement("option");
      option.text = inventory[i];
      list.add(option);
  }
  */
}

/*
function findObject(object) {
  for (i in inventory.length()) {
    if object === inventory[i]
      return object;
  }
}
*/

function dna() {
  document.getElementById('display').setAttribute("src", "imgs/lab_imgs/dna.jpg")
  document.getElementById('runSim').setAttribute("value", "Run DNA")
  document.getElementById('closeSim').setAttribute("value", "Close DNA")
  var myDiv = document.getElementById("simulator");
  myDiv.style.display = "block";

}