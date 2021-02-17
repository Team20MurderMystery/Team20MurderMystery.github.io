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

    // in this function, use the following line to get the screen for the simulation
    var simulationScreen = document.getElementById("simulationScreen");

    if (nameOfSimulationToRun.id === "FPS") {
        // fps(); // call the js function that does fps

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL FPS JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[0];
        simulationScreen.appendChild(instructions);

        // Create and Apphend TLC Simulation Table with runTLC button within simulationDisplay
        var table, row, cell, cellImage, cellSrc, text, newStartButton, simulationDisplay;
        var fpsdirect = "imgs/Lab/fps/";
        var rowlen = 2; // set number of rows in table
        var collen = 5; // set number of cells in each row

        var mansionResidents = ["Colonel Mustard", "Prof. Plum", "Mrs. White", "Jeeves", "Mr. Wooster"];
        var registration = [0, 0, 0, 1, 0];

        // Create Display for Simulation Table to append to.
        simulationDisplay = document.createElement("div");
        simulationDisplay.id = "simulationDisplay";
        simulationScreen.appendChild(simulationDisplay);

        // Create Run Simulation Button.
        newStartButton = document.createElement("button");
        newStartButton.id = "FPS"
        newStartButton.innerText = "Run Simulation";
        newStartButton.classList.add("runButton");
        newStartButton.setAttribute("onClick", "runFPS();");

        simulationDisplay.appendChild(newStartButton);
    } else if (nameOfSimulationToRun.id === "TLC") {
        // tlc(); // call the js function that does tlc

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL TLC JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[1];
        simulationScreen.appendChild(instructions);

        // Create and Apphend TLC Simulation Table with runTLC button within simulationDisplay
        var table, row, cell, cellImage, text, newStartButton, simulationDisplay;
        var tlcdirect = "imgs/Lab/";
        var rowlen = 6; // set number of rows in table
        var collen = 5; // set number of cells in each row

        // Create Display for Simulation Table to append to.
        simulationDisplay = document.createElement("div");
        simulationDisplay.id = "simulationDisplay";
        simulationScreen.appendChild(simulationDisplay);

        // Create Run Simulation Button.
        newStartButton = document.createElement("button");
        newStartButton.id = "TLC"
        newStartButton.innerText = "Run Simulation";
        newStartButton.classList.add("runButton");
        newStartButton.setAttribute("onClick", "runTLC();");

        simulationDisplay.appendChild(newStartButton);

        table = document.createElement("table");
        table.id = "table";

        // Create Initial Thin Layer Chromatography Display
        for (var i = 0; i < rowlen; i++) {
          row = document.createElement("tr");
          for (var j = 0; j < collen; j++) {
            cell = document.createElement("th");
            if ( i === rowlen - 1) { // X axis for Samples Legend.
              cell.append(j + 1); // Legend for TLC Unknown and Control Samples.
            } else { // Table Cells for TLC backgroundImage and Elements Display
              cellImage = document.createElement("img");
              cellImage.id = i + "" + j;
              cellImage.src = tlcdirect + "tlcempty.png";
              cellImage.classList.add("objectImage");
              cell.appendChild(cellImage);
            }
            row.appendChild(cell);
          }
          table.appendChild(row);
        }

        simulationDisplay.appendChild(table);

        // Create Legend for unknown evidence and control TLC Samples.
        var legend = document.createElement("table");
        legend.id = "legend";
        var control = false; // false until Unknown legend is complete.
        var unknownSample = ["Cake"];
        var controlSample = ["Ricin", "Dart Frog Poison", "Vanilla", "Chocolate"];

        // Legend Created as a Static Table for samples legend.
        for(var i = 0; i < 4;  i++) {
          if (i % 2 == 0) { // Creates Headers for Unknown and Control Samples
            row = document.createElement("tr");
            cell = document.createElement("th");
            if (!control) {
              cell.append("Unknown:");
            } else {
              cell.append("Control:");
            }
            row.appendChild(cell);
            legend.appendChild(row);
          } else { // Creates Keys for Unknown and Control Samples
            if (!control) { // Unknown Samples Key Branch
              for (var j = 0; j < unknownSample.length; j++) {
                row = document.createElement("tr");
                cell = document.createElement("td");
                cell.append( (j + 1) + ". " + unknownSample[j]);
                row.appendChild(cell);
                legend.appendChild(row);
              }
              control = true; // begin writing Control legend now.
            } else { // Control Samples Key Branch
              for (var j = 0; j < controlSample.length; j++) {
                row = document.createElement("tr");
                cell = document.createElement("td");
                var index = j + unknownSample.length + 1;
                cell.append( index + ". " + controlSample[j]);
                row.appendChild(cell);
                legend.appendChild(row);
              }
            }
          }
        }

        simulationDisplay.appendChild(legend);
    } else if (nameOfSimulationToRun.id === "DNA") {
        // dna(); // call the js function that does dna

        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL DNA JS FUNCTION CALL ABOVE
        var instructions = document.createElement('p1');
        instructions.innerText = tutorial[2];
        simulationScreen.appendChild(instructions);

        // Create and Append DNA Simulation Table with runDNA button within simulationDisplay
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

        // Create Initial DNA Fingerprint Display.
        for (var i = 0; i < rowlen; i++) {
          row = document.createElement("tr");
          for (var j = 0; j < collen; j++) {
            cell = document.createElement("th");
            if (i == 0) { // Header Rows Created for Unknown and Subject Samples and DNA fragment index axis.
              if (j == 0) {
                cell.append("Sample X"); // Evidence DNA Sample.
              } else if (j < collen - 1) {
                cell.append("Suspect " + j) // Suspect DNA Sample.
              } else {
                cell.append("100 bp ladder") // morganvalues axis.
              }
            } else {
              if (j == collen - 1) { // Fragments index points along Y-axis.
                if (i != 1) {
                  cell.append(morganvalues[morganindex]);
                  morganindex++;
                }
              } else { // Table Cells for DNA backgroundImage, sampleImage, and DNA fragments Display.
                cellImage = document.createElement("img");
                cellImage.id = i + "" + j;

                if (i == 1) {
                  cellImage.src = dnadirect + "dnasample.png";
                } else {
                  cellImage.src = dnadirect + "dnawhitespace.png"; // empty backgroundImage for Table.
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


        // THIS IS AN EXAMPLE --- DELETE THIS WHEN PLACING ACTUAL BLAST JS FUNCTION CALL ABOVE
        var instructions = document.createElement('button');
        instructions.innerText = "Blast Tutorial";
        instructions.classList.add("labButton");
        instructions.setAttribute("onClick", "javascript: window.open('sources/ToturialSlide.html','_blank');");
        simulationScreen.appendChild(instructions);
    }
}

function runFPS() {
  var simdisplay = document.getElementById("simulationDisplay");
  var table, row, cell, cellImage, cellSrc;
  var fpsdirect = "imgs/Lab/fps/";
  var rowlen = 4; // set number of rows in table
  var collen = 5; // set number of cells in each row

  var mansionResidents = [
      "Colonel Mustard", "Prof. Plum", "Mrs. White", "Jeeves", "Mr. Wooster",
      "Mrs. Peacock", "Mr. Green", "Ms. Scarlett", "Dr. L", "Mr. Wodehouse"
  ];
  var registration = [
      0, 0, 0, 1, 0,
      0, 0, 0, 0, 0
  ];
  var indexshift = 0;

  table = document.createElement("table");
  table.id = "table";

  for (var i = 0; i < rowlen; i++) {
    row = document.createElement("tr");
    for (var j = 0; j < collen; j++) {
      cell = document.createElement("th");
      if (i % 2 == 0) {
        if (registration[j + indexshift] == 1) {
          cellImage = document.createElement("img");
          cellImage.id = i + "" + j;
          cellSrc = fpsdirect + mansionResidents[j + indexshift];
          cellSrc += ".png";
          cellImage.src = cellSrc;
          cellImage.classList.add("objectImage");
          cell.appendChild(cellImage);
        } else {
          cell.append("Registration needed.");
        }
      } else { // Table Cells for TLC backgroundImage and Elements Display
        cell.append(mansionResidents[j + indexshift]); // Evidence DNA Sample.
        if (j == 4) {
          indexshift += 5;
        }
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  simulationDisplay.appendChild(table);
}

function runTLC() {
  var simdisplay = document.getElementById("simulationDisplay");
  var table, cellImage;
  var tlcdirect = "imgs/Lab/";
  var rowlen = 6; // set number of rows in table
  var collen = 5; // set number of cells in each row
  // elements identify unique elements within the unknown Evidence samples and control samples.
  // int > 0 -> element identified.
  var elements = [ [0, 1, 0, 0, 1], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 1] ];

  table = document.getElementById("table");

  // Update Table based on elements packaging data.
  for (var i = 1; i < rowlen - 1; i++) {
    for (var j = 0; j < collen; j++) {
      cellImage = document.getElementById(i + "" + j);

      if (elements[j][i] > 0) {
        // Update tlc backgroundImage to tlcelement + i image when detected.
        cellImage.src = tlcdirect + "tlcelement" + i + ".png";
      }
    }
  }

  // TLC Simulation Complete
}

function runDNA() {
  var simdisplay = document.getElementById("simulationDisplay");
  // Create and Append DNA Simulation Table with runDNA button within simulationDisplay
  var table, cellImage;
  var dnadirect = "imgs/Lab/";
  var rowlen = 14; // set number of rows in table
  var collen = 4; // set number of cells in each row
  // Fragments indicate whether a fragment is detected at the given morganvalues position
  // int > 0 -> fragment detected.
  var fragments = [ [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                  ];

  table = document.getElementById("table");

  // Update Table based on fragments packaging data.
  for (var i = 2; i < rowlen; i++) {
    for (var j = 0; j < collen - 1; j++) { //
      cellImage = document.getElementById(i + "" + j);

      if (fragments[j][i] > 0) {
        // Update dnawhitespace image to dnafragment image when detected.
        cellImage.src = dnadirect + "dnafragment.png";
      }
    }
  }

  // DNA simulation Complete.
}

//var inventory = [{"teacup", "fps"}, {"cakesmudge", "tlc"}]
var inventory = ["teacup", "cakesmudge"]
function fpsCollect(object){
  name = object.id
  if (!inventory.includes(name.toLowerCase(name) + "_fps")){
    inventory.push(name.toLowerCase(name) + "_fps")
  }
  else{
    //already have the item
  }
}

function tlcCollect(object){
  name = object.id
  if (!inventory.includes(name.toLowerCase(name) + "_tlc")){
    inventory.push(name.toLowerCase(name) + "_tlc")
  }
  else{
    //already have the item
  }
}

function description(object){

  // name = object.id
  // if (!inventory.includes(name.toLowerCase(name))){
  //   inventory.push(name.toLowerCase(name))
  // }
  // else{
  //   //already have the item
  // }
}


function dnaCollect(object){
  // name = object.id
  // if (!inventory.includes(name.toLowerCase(name))){
  //   inventory.push(name.toLowerCase(name) + "_tlc")
  // }
  // else{
  //   //already have the item
  // }
}
