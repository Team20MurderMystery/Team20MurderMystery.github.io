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

        // Create and Apphend FPS Simulation Table with runTLC button within simulationDisplay
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

  // Characters of the Mystery Set.
  var characters = [
      "Colonel Mustard", "Prof. Plum", "Mrs. White", "Jeeves", "Mr. Wooster",
      "Mrs. Peacock", "Mr. Green", "Ms. Scarlett", "Dr. L", "Mr. Wodehouse"
  ];

  // Registration of the list of Characters.
  var registration = [
      0, 0, 0, 1, 0,
      0, 0, 0, 0, 0
  ];
  var indexshift = 0;

  table = document.createElement("table");
  table.id = "table";

  // Update Table based on registration data.
  for (var i = 0; i < rowlen; i++) {
    row = document.createElement("tr");
    for (var j = 0; j < collen; j++) {
      cell = document.createElement("th");
      if (i % 2 == 0) { // Image Cells for Characters Fingerprints
        if (registration[j + indexshift] == 1) { // if Fingerprint is registered, display image.
          cellImage = document.createElement("img");
          cellImage.id = i + "" + j;
          cellSrc = fpsdirect + characters[j + indexshift];
          cellSrc += ".png";
          cellImage.src = cellSrc;
          cellImage.classList.add("objectImage");
          cell.appendChild(cellImage);
        } else {
          cell.append("Registration needed.");
        }
      } else { //Header Cells for Residents Names
        cell.append(characters[j + indexshift]);
        if (j == 4) {
          indexshift += 5;
        }
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  simulationDisplay.appendChild(table);
  // FPS Simulation Complete
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
//var inventory = ["teacup", "cakesmudge"]

//The inventory array that will hold what the player has collected
var inventory = [];

//calls when the player clicks a fps button
function fpsCollect(object){
  //object is the div that the player clicks on
  //gets the name of the object
  name = object.id
  //checks if the sample has already been added
  if (!inventory.includes(name.toLowerCase(name) + "_fps")){
    //adds to the inventory array and alerts the player
    inventory.push(name.toLowerCase(name) + "_fps")
    alert("You have collected the fingerprint sample from the " + name.toLowerCase(name))
  }
  else{
    //already have the item
    alert("You have already collected the fingerprint samples from the " + name.toLowerCase(name))
  }
}

//same comments as fpsCollect
function tlcCollect(object){
  name = object.id
  if (!inventory.includes(name.toLowerCase(name) + "_tlc")){
    inventory.push(name.toLowerCase(name) + "_tlc")
    alert("You have collected the Thin Layer Chromatography sample from the " + name.toLowerCase(name))
  }
  else{
    //already have the item
    alert("You have already collected the Thin Layer Chromatography samples from the " + name.toLowerCase(name))
  }
}

//same comments as fpsCollect
function dnaCollect(object){
  name = object.id
  if (!inventory.includes(name.toLowerCase(name)+ "_dna")){
    inventory.push(name.toLowerCase(name) + "_dna")
    alert("You have collected the dna sample from the " + name.toLowerCase(name))
  }
  else{
    //already have the item
    alert("You have already collected the dna sample from the " + name.toLowerCase(name))
  }
}

//calls when the player clicks onto a description button
function description(object){
  name = object.id
  switch (name) {
    case "Photo1":
      //console.log("The professor teaching his son about anthropology. “Just read this book from cover to cover – and then we can talk. Until then, I’d appreciate silence in my study.”")
      alert("The professor teaching his son about anthropology. “Just read this book from cover to cover – and then we can talk. Until then, I’d appreciate silence in my study.”")
      break;
    case "Photo":
      //console.log("test")
      alert("Professor Logan and Col. Mustard during the war.")
      break;
    case "Mask":
      //console.log("Gold Ceremonial Mask, La Leche Valley, A.D. 900-1100 of the Sican culture that inhabited what is now the north coast of Peru between about 750 and 1375")
      alert("Gold Ceremonial Mask, La Leche Valley, A.D. 900-1100 of the Sican culture that inhabited what is now the north coast of Peru between about 750 and 1375")
      break;
    case "Vial":
      //console.log("There is a liquid substance in this vial")
      alert("There is a liquid substance in this vial")
      break;
  }
}
//calls when the player clicks on the books description
function descriptionBook(object,n){
  switch (n){
    case 0:
      //console.log("test")
      alert("Rhodesia was an unrecognised state in southern Africa from 1965 to 1979, equivalent in territory to modern Zimbabwe. Rhodesia was the de facto successor state to the British colony of Southern Rhodesia, which had been self-governing since achieving responsible government in 1923. A landlocked nation, Rhodesia was bordered by South Africa to the south, Bechuanaland (later Botswana) to the southwest, Zambia to the northwest, and Mozambique (a Portuguese province until 1975) to the east. ")
      break;
    case 1:
      //console.log("test")
      alert("The Republic of Kenya is a country in Africa with 47 semiautonomous counties governed by elected governors. Kenya stretches 580,367 square kilometres and has a population of more than 52.2 million people. Kenya's capital and largest city is Nairobi while its oldest city and first capital is the coastal city of Mombasa. Kisumu City is the third largest city and also an inland port on Lake Victoria. Kenya is the source of Ajiri tea, which the Professor enjoys. Kenya is also known for its production of castor oil from the castor bean plant.")
      break;
  }
}
