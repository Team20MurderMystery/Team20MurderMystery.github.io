var produced = false;

// Registration of the list of Characters.
var registration = [ 0, 0, 1, 0, 1, 1, 1, 1, 1, 1 ];

//The inventory array that will hold what the player has collected
var inventory = [];
var fpsInventory = [];
var tlcInventory = [];
var dnaInventory = [];
var blastInventory = [];

function startSimulation(nameOfSimulationToRun) {
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

    // Append  Simulation Instructions to Simulation Screen based on Simulation Running.
    var instructions = document.createElement('p1');
    if (nameOfSimulationToRun.id === "FPS") {
      instructions.innerText = tutorial[0];
    } else if (nameOfSimulationToRun.id === "TLC") {
      instructions.innerText = tutorial[1];
    } else if (nameOfSimulationToRun.id === "DNA") {
      instructions.innerText = tutorial[2];
    } else if (nameOfSimulationToRun.id === "BLAST") {
      instructions.innerText = tutorial[3];
    }
    simulationScreen.appendChild(instructions);

    // Create a run BLAST Tutorial Button to open up the BLAST Tutorial.
    if (nameOfSimulationToRun.id === "BLAST") {
      var BLASTButton = document.createElement('button');
      BLASTButton.innerText = "Blast Tutorial";
      BLASTButton.classList.add("labButton");
      BLASTButton.setAttribute("onClick", "javascript: window.open('sources/ToturialSlide.html','_blank');");
      simulationScreen.appendChild(BLASTButton);
    }

    // Create Standard Simulation Display with startButton and EvidenceDropDownMenu
    var StartButton, EvidenceDropDownMenu, simulationDisplay;

    // Create Display for Simulation Table to append to.
    simulationDisplay = document.createElement("div");
    simulationDisplay.id = "simulationDisplay";
    simulationScreen.appendChild(simulationDisplay);

    // Create Run Simulation Button.
    StartButton = document.createElement("button");
    StartButton.innerText = "Run Simulation";
    StartButton.id = "runButton";
    StartButton.classList.add("runButton");

    // Create a drop down menu for the evidence registered in the Lab
    var EvidenceDropDownMenu = document.createElement("select");
    EvidenceDropDownMenu.id = "dropDownMenu";
    var selector = document.createElement("option");

    // Create an option for the drop down menu.
    selector.vaule = "Select a piece of evidence.";
    selector.text = "Select a piece of evidence.";

    EvidenceDropDownMenu.appendChild(selector);

    var simPanel = document.createElement("div");

    simPanel.appendChild(StartButton);
    simPanel.appendChild(EvidenceDropDownMenu);

    // Place the drop down menu on the gameScreen
    simulationDisplay.appendChild(simPanel);
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
    produced = false;
}

function runSimulation(nameOfSimulationToRun) {
    startSimulation(nameOfSimulationToRun);

    // get Elements Defined by their id.
    var StartButton, EvidenceDropDownMenu, simulationDisplay, simulationScreen, selector;;

    simulationScreen = document.getElementById("simulationScreen");
    simulationDisplay = document.getElementById("simulationDisplay");
    StartButton = document.getElementById("runButton");
    EvidenceDropDownMenu = document.getElementById("dropDownMenu");

    // Define Unique Elements for the Selected Simulation.
    var table, row, cell, cellImage, cellSrc, text;

    if (nameOfSimulationToRun.id === "FPS") {
        // Create an option for the drop down menu.
        for (var i = 0; i < fpsInventory.length; i++) {
          selector = document.createElement("option");
          selector.vaule = fpsInventory[i];
          selector.text = fpsInventory[i];

          EvidenceDropDownMenu.appendChild(selector);
        }

        // Define Run Button for FPS Simulation.
        StartButton.id = "FPS"
        StartButton.setAttribute("onClick", "runFPS();");
    } else if (nameOfSimulationToRun.id === "TLC") {
        // Create an option for the drop down menu for each Inventory item colllected.
        for (var i = 0; i < tlcInventory.length; i++) {
          selector = document.createElement("option");
          selector.vaule = tlcInventory[i];
          selector.text = tlcInventory[i];

          EvidenceDropDownMenu.appendChild(selector);
        }

        // Define Run Button for TLC Simulation.
        StartButton.id = "TLC"
        StartButton.setAttribute("onClick", "runTLC();");
    } else if (nameOfSimulationToRun.id === "DNA") {
        // Create an option for the drop down menu for each Inventory item colllected.
        for (var i = 0; i < dnaInventory.length; i++) {
          selector = document.createElement("option");
          selector.vaule = dnaInventory[i];
          selector.text = dnaInventory[i];

          EvidenceDropDownMenu.appendChild(selector);
        }

        // Define Run Button for DNA Simulation.
        StartButton.id = "DNA"
        StartButton.setAttribute("onClick", "runDNA();");
    } else {
      // blast(); // call the js function that does blast
      for (var i = 0; i < dnaInventory.length; i++) {
        selector = document.createElement("option");
        selector.vaule = dnaInventory[i];
        selector.text = dnaInventory[i];

        EvidenceDropDownMenu.appendChild(selector);
      }

      // Define Run Button for BLAST Simulation.
      StartButton.id = "BLAST"
      StartButton.setAttribute("onClick", "runBLAST();");
    }
}

function runFPS() {
  var simdisplay = document.getElementById("simulationDisplay");
  var EvidenceDropDownMenu = document.getElementById("dropDownMenu");
  var table, row, cell, cellImage, cellSrc;
  var fpsdirect = "imgs/Lab/fps/";
  var rowlen = 4; // set number of rows in table
  var collen = 5; // set number of cells in each row
  var indexshift = 0;

  // Characters of the Mystery Set.
  var characters = [
      "Prof. Logan", "Prof. Plum", "Mrs. White", "Jeeves", "Mr. Wooster",
      "Mrs. Peacock", "Mr. Green", "Ms. Scarlett", "Dr. L", "Mr. Wodehouse"
  ];

  if (produced === false) {
    table = document.createElement("table");
    table.id = "table";

    // Update Table based on registration data.
    for (var i = 0; i < rowlen; i++) {
      row = document.createElement("tr");
      for (var j = 0; j < collen; j++) {
        cell = document.createElement("th");
        cell.id = "" + characters[j + indexshift];
        cellImage = document.createElement("img");
        cellImage.id = characters[j + indexshift] + ".png";
        if (i % 2 == 0) { // Image Cells for Characters Fingerprints
          if (registration[j + indexshift] == 1) { // if Fingerprint is registered, display image.
            cellSrc = fpsdirect + characters[j + indexshift] + ".png";
          } else {
            cellSrc = fpsdirect + "printNotFound.png";
          }
          cellImage.src = cellSrc;
          cellImage.classList.add("objectImage");
          cell.appendChild(cellImage);
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
    produced = true;
  }

  if (EvidenceDropDownMenu.value != "Select a piece of evidence.") {
    //Beginning of Update Database.
    if (EvidenceDropDownMenu.value == "Teacup" && registration[0] != 1) {
      cellImage = document.getElementById("Prof. Logan.png");
      cellSrc = fpsdirect + "Prof. Logan.png";
      cellImage.src = cellSrc;
      registration[0] = 1;
    } else if (EvidenceDropDownMenu.value == "Pipe" && registration[1] != 1) {
      cellImage = document.getElementById("Prof. Plum.png");
      cellSrc = fpsdirect + "Prof. Plum.png";
      cellImage.src = cellSrc;
      registration[1] = 1;
    } else if (EvidenceDropDownMenu.value == "Plate" && registration[3] != 1) {
      cellImage = document.getElementById("Jeeves.png");
      cellSrc = fpsdirect + "Jeeves.png";
      cellImage.src = cellSrc;
      registration[3] = 1;
    } else {
      for (var i = 0; i < collen * 2; i++) {
        cell = document.getElementById("" + characters[i]);
        cellImage = document.getElementById(characters[i] + ".png");
        if (cell.id == EvidenceDropDownMenu.value) {
          cellSrc = fpsdirect + characters[i] + ".png";
          cellImage.src = cellSrc;
          registration[i] = 1;
        }
      }
    }
    //End of Update Database.
  }
}

function runTLC() {
  var simdisplay = document.getElementById("simulationDisplay");
  var EvidenceDropDownMenu = document.getElementById("dropDownMenu");
  var table, cellImage, elements;
  var tlcdirect = "imgs/Lab/";
  var rowlen = 6; // set number of rows in table
  var collen = 5; // set number of cells in each row
  // elements identify unique elements within the unknown Evidence samples and control samples.
  // int > 0 -> element identified.

  if (EvidenceDropDownMenu.value == "Plate") {
    elements = [ [0, 1, 0, 0, 1], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 1] ];
  } else if (EvidenceDropDownMenu.value == "Tea") {
    elements = [ [0, 1, 1, 0, 1], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 1], [0, 0, 0, 0, 0] ];
  } else {
    elements = [ [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0] ];
  }

  collen = elements[0].length;
  rowlen = elements.length + 1;

  if (produced === false) {
    // Define Simulation Table for TLC.
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
          cellImage.src = tlcdirect + "tlcempty.png"; // empty backgroundImage for Table.
          cellImage.classList.add("objectImage");
          cell.appendChild(cellImage);
        }
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    simulationDisplay.appendChild(table);

    legend = document.createElement("table");
    legend.id = "legend";

    simulationDisplay.appendChild(legend);
    produced = true;
  }

  // Update Table based on elements packaging data.
  for (var i = 1; i < rowlen - 1; i++) {
    for (var j = 0; j < collen; j++) {
      cellImage = document.getElementById(i + "" + j);

      if (elements[j][i] > 0) {
        // Update tlc backgroundImage to tlcelement + i image when detected.
        cellImage.src = tlcdirect + "tlcelement" + i + ".png";
      } else {
        cellImage.src = tlcdirect + "tlcempty.png"; // empty backgroundImage for Table.
      }
    }
  }

  var legend = document.getElementById("legend");
  legend.remove();

  // Create Legend for unknown evidence and control TLC Samples.
  legend = document.createElement("table");
  legend.id = "legend";
  var control = false; // false until Unknown legend is complete.
  var unknownSample = [];
  var controlSample = [];
  if (EvidenceDropDownMenu.value == "Plate") {
    unknownSample = ["Cake"];
    controlSample = ["Ricin Toxin", "Dart Frog Poison", "Vanilla", "Chocolate"];
  } else if (EvidenceDropDownMenu.value == "Tea") {
    unknownSample = ["Kenyan Ajiri from Kitchen"];
    controlSample = ["Ricin Toxin", "Dart Frog Poison", "Kenyan Ajiri from Kitchen"];
  }

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
  // TLC Simulation Complete
}

function runDNA() {
  var simdisplay = document.getElementById("simulationDisplay");
  var EvidenceDropDownMenu = document.getElementById("dropDownMenu");
  // Create and Append DNA Simulation Table with runDNA button within simulationDisplay
  var table, cellImage, fragments;
  // Fragments indicate whether a fragment is detected at the given morganvalues position
  var dnadirect = "imgs/Lab/";
  var rowlen = 14; // set number of rows in table
  var collen = 4; // set number of cells in each row
  // morganvalues indicate the position at which the dna fragments can be placed within the DNA simulation table.
  var morganvalues = [3000, 1500, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
  var morganindex = 0;

  if (EvidenceDropDownMenu.value == "Teacup") {
    fragments = [ [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                  [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                ];
  } else {
    fragments = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ];
  }

  if (produced === false) {
    // Define Simulation Table for DNA.
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
    produced = true;
  }

  // Update Table based on fragments packaging data.
  for (var i = 2; i < rowlen; i++) {
    for (var j = 0; j < collen - 1; j++) { //
      cellImage = document.getElementById(i + "" + j);
      // Update cell images based on fragments packaging data.
      if (fragments[j][i] > 0) {
        cellImage.src = dnadirect + "dnafragment.png";
      } else {
        cellImage.src = dnadirect + "dnawhitespace.png"; // empty backgroundImage for Table.
      }
    }
  }

  // DNA simulation Complete.
}

var code = [];

function runBLAST(){
  var simdisplay = document.getElementById("simulationDisplay");
  var EvidenceDropDownMenu = document.getElementById("dropDownMenu");
  var row, cell, table, cellImage, elements;
  //var rowlen = 10; // set number of rows in table
  var collen = 1; // set number of cells in each row

  if (EvidenceDropDownMenu.value == "Teacup") {
    code = [];
    code.push("TCGAATGGCAACTCGACGCTCACTGCATCGGACTCGATGACAGTTGGCTCCGTCACGGGTCAGACGCTGGCACTCCAT");
    code.push("GCCTTGTCGGGCGATCTAACCGTCAATTCCGCGCTCAGTGCGCCGGGCACTATCTCGGCTGTCGCCGGGCGCGACCTG");
    code.push("ACAATCAATGGTGCGGCACAGGGCGGTAGCACGGTGACATTGACGGCCGCACACAACGCGACGGTCAACGGTTCTGTC");
    code.push("GCTGCTGTCGGCGACGTGTCGTGAAAATTTACTTGGAAAACGAGTCGATTATTCAGGTCGTTCTGTTATTGTGGTAGG");
    code.push("TCCCCTTCTCTCATTGTATCAATGTGGATTACCCCGAGAAATCGCAATAGAACTTTTTCAAGCATTTTTACTTCGTGA");
    code.push("TATAGTTGAACGACAGATTGCTCCCACTCTAAGAGCTGCTAAAAGTCTAATTCAAGATAGGAGACCCATTATATGGAA");
    code.push("CGTACTTAAACAAATTATGCAAAGACATCCCATTTTGTTAAATAGAGCGCCTACCTTACACAGATTAGGAATACAAGC");
    code.push("ATTTATACCTATTTTAATAGAAGAACGTGCCATTCGTTTACATCCATTGGTTTGTACAGGGTTTAATGCGGACTTTGA");
    code.push("TGGAAGGGCTTAGCTTAATTAAAGTGGCTGATTTGCGTTCAGTTGATGCAGAGTGGGGTTTTGCAGTCCTTA");
  } else if (EvidenceDropDownMenu.value == "Pipe") {
    code = [];
    code.push("ACAATGGTATCTCCAATTATAGCCCCTCTGGGATGTAAAATATATCTCTTCTCACCATCCCCATAGTGTATGAGACAAAT");
    code.push("GTATGCATTTCGATTAGGGTCGTATTCTATGGTTACGATTCTACCATATATGTCTTTTTCATTCCGTCGAAAATCGATTT");
    code.push("TACGGTATAGACGCTTATGACCTCCCCCTCTATGCCTTGCGGTAATGATTCCTCTGGCATTACGACCTTTACCACAATGA");
    code.push("TGCTGTCCATAGATCAAATTATTTCGTGGATTGGATTTCACTTGACTGTCTACGGTTCCATTGCGTGTGCTCGGGGTAGA");
    code.push("AGTTTTGTATAAATGTATCGCCATGCTATTAAGTATTTTTTTTTAAGTTCTTTTCTTTCTAAGAGGTGGAATAGAATAAC");
    code.push("CCGGTTGAAGCGTAATGATCATACGTCTGTAATGCATTGTATGTCCCATAATAGGTCCCATTCTTCTACTCTTTCCCGGA");
    code.push("AGTCGATGACTATTCATAGCTATTACCTTGACACCAAAGAAGAGTTCGACCCAATGCTTTATTTCTGTCCTAGTTGATTC");
    code.push("TGATTCGACATTAGAAGTATATTGATTTTTCCCCAATAACCGAATACTTTTGTCTGTAAATACTGCATATTTGATTCCAT");
    code.push("CTATAAATCGATTTTCTTCCCTATGAGTTAAAGTCTCAATAAGAATGCTAGTTCTTACTGTTCATTATGATATGAATATA");
    code.push("CCACATCAATTCGTTATGTATGGATGATGAGATTCCATTGATACAGAGCCAATTCCAATAGACTTATTGGAGGGTCCC");
  } else if (EvidenceDropDownMenu.value == "Tea") {
    code = [];
    code.push("TCGAATGGCAACTCGACGCTCACTGCATCGGACTCGATGACAGTTGGCTCCGTCACGGGTCAGACGCTGGCACTCCATGC");
    code.push("CTTGTCGGGCGATCTAACCGTCAATTCCGCGCTCAGTGCGCCGGGCACTATCTCGGCTGTCGCCGGGCGCGACCTGACAA");
    code.push("TCAATGGTGCGGCACAGGGCGGTAGCACGGTGACATTGACGGCCGCACACAACGCGACGGTCAACGGTTCTGTCGCTGCT");
    code.push("GTCGGCGACGTGTCGTGAAAATTTACTTGGAAAACGAGTCGATTATTCAGGTCGTTCTGTTATTGTGGTAGGTCCCCTTC");
    code.push("TCTCATTGTATCAATGTGGATTACCCCGAGAAATCGCAATAGAACTTTTTCAAGCATTTTTACTTCGTGATATAGTTGAA");
    code.push("CGACAGATTGCTCCCACTCTAAGAGCTGCTAAAAGTCTAATTCAAGATAGGAGACCCATTATATGGAACGTACTTAAACA");
    code.push("AATTATGCAAAGACATCCCATTTTGTTAAATAGAGCGCCTACCTTACACAGATTAGGAATACAAGCATTTATACCTATTT");
    code.push("TAATAGAAGAACGTGCCATTCGTTTACATCCATTGGTTTGTACAGGGTTTAATGCGGACTTTGATGG");
  } else {
    code = [];
  }

  if (produced === false) {
    producetable();
  } else {
    produced === false;
    table = document.getElementById("table");
    table.remove();
    producetable();
  }

  // BLAST simulation Complete.
}

function producetable(){
  var simdisplay = document.getElementById("simulationDisplay");
  table = document.createElement("table");
  table.id = "table";
  for (var i = 0; i < code.length; i++) {
    row = document.createElement("tr");
    row.id = "" + i;
    for (var j = 0; j < 1; j++) {
      cell = document.createElement("th");
      cell.id = i + ""  + j;
      cell.append(code[i]);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  simdisplay.appendChild(table);
  produced = true;
}

//var inventory = [{"teacup", "fps"}, {"cakesmudge", "tlc"}]
//var inventory = ["teacup", "cakesmudge"]

//calls when the player clicks a fps button
function fpsCollect(object){
  //object is the div that the player clicks on
  //gets the name of the object
  name = object.id;
  //checks if the sample has already been added
  if (!inventory.includes(name.toLowerCase(name) + "_fps")){
    //adds to the inventory array and alerts the player
    inventory.push(name.toLowerCase(name) + "_fps");
    fpsInventory.push(name);
    var newImage = document.createElement("img");
    newImage.src = "imgs/1_ProfessorLogan/inventory/" + name.toLowerCase(name) + "_yellow.png";
    console.log("imgs/1_ProfessorLogan/inventory/" + name.toLowerCase(name) + "_blue.png")
    newImage.width = "80";
    newImage.height = "70";
    document.getElementById("invScreen").appendChild(newImage);
    alert("You have collected the fingerprint sample from the " + name.toLowerCase(name));
  }
  else{
    //already have the item
    alert("You have already collected the fingerprint samples from the " + name.toLowerCase(name));
  }
}

//same comments as fpsCollect
function tlcCollect(object){
  name = object.id;
  if (!inventory.includes(name.toLowerCase(name) + "_tlc")){
    inventory.push(name.toLowerCase(name) + "_tlc");
    tlcInventory.push(name);
    var newImage = document.createElement("img");
    newImage.src = "imgs/1_ProfessorLogan/inventory/" + name.toLowerCase(name) + "_blue.png";
    console.log("imgs/1_ProfessorLogan/inventory/" + name.toLowerCase(name) + "_blue.png")
    newImage.width = "80";
    newImage.height = "70";
    document.getElementById("invScreen").appendChild(newImage);
    alert("You have collected the Thin Layer Chromatography sample from the " + name.toLowerCase(name));
  }
  else{
    //already have the item
    alert("You have already collected the Thin Layer Chromatography samples from the " + name.toLowerCase(name));
  }
}

//same comments as fpsCollect
function dnaCollect(object){
  name = object.id;
  if (!inventory.includes(name.toLowerCase(name)+ "_dna")){
    inventory.push(name.toLowerCase(name) + "_dna");
    dnaInventory.push(name);
    blastInventory.push(name);
    var newImage = document.createElement("img");
    newImage.src = "imgs/1_ProfessorLogan/inventory/" + name.toLowerCase(name) + "_red.png";
    console.log("imgs/1_ProfessorLogan/inventory/" + name.toLowerCase(name) + "_blue.png")
    newImage.width = "80";
    newImage.height = "70";
    document.getElementById("invScreen").appendChild(newImage);
    alert("You have collected the dna sample from the " + name.toLowerCase(name));
  }
  else{
    //already have the item
    alert("You have already collected the dna sample from the " + name.toLowerCase(name));
  }
}

//calls when the player clicks onto a description button
function description(object){
  name = object.id;
  switch (name) {
    case "Photo1":
      //console.log("The professor teaching his son about anthropology. “Just read this book from cover to cover – and then we can talk. Until then, I’d appreciate silence in my study.”")
      alert("The professor teaching his son about anthropology. \"Just read this book from cover to cover - and then we can talk. Until then, I'd appreciate silence in my study.\"");
      break;
    case "Photo":
      //console.log("test")
      alert("Professor Logan and Col. Mustard during the war.");
      break;
    case "Mask":
      //console.log("Gold Ceremonial Mask, La Leche Valley, A.D. 900-1100 of the Sican culture that inhabited what is now the north coast of Peru between about 750 and 1375")
      alert("Gold Ceremonial Mask, La Leche Valley, A.D. 900-1100 of the Sican culture that inhabited what is now the north coast of Peru between about 750 and 1375");
      break;
    case "Vial":
      //console.log("There is a liquid substance in this vial")
      alert("There is a liquid substance in this vial");
      break;
  }
}
//calls when the player clicks on the books description
function descriptionBook(object,n){
  switch (n){
    case 0:
      //console.log("test")
      alert("Rhodesia was an unrecognised state in southern Africa from 1965 to 1979, equivalent in territory to modern Zimbabwe. Rhodesia was the de facto successor state to the British colony of Southern Rhodesia, which had been self-governing since achieving responsible government in 1923. A landlocked nation, Rhodesia was bordered by South Africa to the south, Bechuanaland (later Botswana) to the southwest, Zambia to the northwest, and Mozambique (a Portuguese province until 1975) to the east. ");
      break;
    case 1:
      //console.log("test")
      alert("The Republic of Kenya is a country in Africa with 47 semiautonomous counties governed by elected governors. Kenya stretches 580,367 square kilometres and has a population of more than 52.2 million people. Kenya's capital and largest city is Nairobi while its oldest city and first capital is the coastal city of Mombasa. Kisumu City is the third largest city and also an inland port on Lake Victoria. Kenya is the source of Ajiri tea, which the Professor enjoys. Kenya is also known for its production of castor oil from the castor bean plant.");
      break;
  }
}

function updateInv(){
  theScreen = document.getElementById("invScreen");

}
