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

    if (nameOfSimulationToRun.id === "FPS") {
        // fps(); // call the js function that does fps

        // in that function, use the following line to get the screen for the simulation
        var simulationScreen = document.getElementById("simulationScreen");

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL FPS JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[0];
        simulationScreen.appendChild(instructions);
    } else if (nameOfSimulationToRun.id === "TLC") {
        // tlc(); // call the js function that does tlc

        // in that function, use the following line to get the screen for the simulation
        var simulationScreen = document.getElementById("simulationScreen");

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL TLC JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[1];
        simulationScreen.appendChild(instructions);
    } else if (nameOfSimulationToRun.id === "DNA") {
        // dna(); // call the js function that does dna

        // in that function, use the following line to get the screen for the simulation
        var simulationScreen = document.getElementById("simulationScreen");

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL DNA JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[2];
        simulationScreen.appendChild(instructions);

        //Create and Apphend DNA Simulation Table with runDNA button within simulationDisplay
        var table, row, cell, cellImage, text, newStartButton, simulationDisplay;
        var dnadirect = "imgs/Lab/";
        var rowlen = 14; // set number of rows in table
        var collen = 4; // set number of cells in each row
        // morganvalues indicate the position at which the dna fragments can be placed within the DNA simulation table.
        var morganvalues = [3000, 1500, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
        var morganindex = 0;

        simulationDisplay = document.createElement("div");
        simulationDisplay.id = "simulationDisplay";
        simulationScreen.appendChild(simulationDisplay);

        newStartButton = document.createElement("button");
        newStartButton.id = "DNA"
        newStartButton.innerText = "Run Simulation";
        newStartButton.classList.add("runButton");
        newStartButton.setAttribute("onClick", "runDNA();");

        simulationDisplay.appendChild(newStartButton);

        table = document.createElement("table");
        table.id = "table";

        //Create Initial DNA Fingerprint Display.
        for (var i = 0; i < rowlen; i++) {
          row = document.createElement("tr");
          for (var j = 0; j < collen; j++) {
            cell = document.createElement("th");
            if (i == 0) {
              if (j == 0) {
                cell.append("Sample X");
              } else if (j < collen - 1) {
                cell.append("Suspect " + j)
              } else {
                cell.append("100 bp ladder")
              }
            } else {
              if (j == collen - 1) {
                if (i != 1) {
                  cell.append(morganvalues[morganindex]);
                  morganindex++;
                }
              } else {
                cellImage = document.createElement("img");
                cellImage.id = i + "" + j;

                if (i == 1) {
                  cellImage.src = dnadirect + "dnasample.png";
                } else {
                  cellImage.src = dnadirect + "dnawhitespace.png";
                }
                cellImage.classList.add("objectImage");
                cell.appendChild(cellImage);
              }
            }

            row.appendChild(cell);
          }

          table.appendChild(row);
        }

        simulationDisplay.appendChild(table);
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

//Create and Apphend DNA Simulation Table with runDNA button within simulationDisplay
var table, row, cell, cellImage, text, newStartButton, simdisplay;
var dnadirect = "imgs/Lab/";
var rowlen = 14; // set number of rows in table
var collen = 4; // set number of cells in each row
// morganvalues indicate the position at which the dna fragments can be placed within the DNA simulation table.
var morganvalues = [3000, 1500, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
var morganindex = 0;
// Fragments indicate whether a fragment is detected at the given morganvalues position
// int > 0 -> fragment detected.
var fragments = [ [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                  [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                ];

function runDNA() {
  var simdisplay = document.getElementById("simulationDisplay");
  //Create and Apphend DNA Simulation Table with runDNA button within simulationDisplay
  var table, row, cell, cellImage, text, newStartButton;
  var dnadirect = "imgs/Lab/";
  var rowlen = 14; // set number of rows in table
  var collen = 4; // set number of cells in each row
  // morganvalues indicate the position at which the dna fragments can be placed within the DNA simulation table.
  var morganvalues = [3000, 1500, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
  var morganindex = 0;
  // Fragments indicate whether a fragment is detected at the given morganvalues position
  // int > 0 -> fragment detected.
  var fragments = [ [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                  ];

  table = document.getElementById("table");

  // Update Table based on fragments packaging data.
  for (var i = 2; i < rowlen; i++) {
    for (var j = 0; j < collen - 1; j++) {
      cellImage = document.getElementById(i + "" + j);

      if (fragments[j][i] > 0) {
        cellImage.src = dnadirect + "dnafragment.png";
      }
    }
  }
  // DNA simulation Complete.
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
