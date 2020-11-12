function startTLC() {
  var simdisplay = document.getElementById("pageend");
  var table, row, cell, cellImage, text, newStartButton;
  var tlcdirect = "imgs/Lab/";

  if (simdisplay.style.display === "none") {
    simdisplay.style.display = "block";
    table = document.createElement("table");
    table.id = "table";

    newStartButton = document.createElement("button");
    newStartButton.id = "TLC"
    newStartButton.innerText = "Run Simulation";
    newStartButton.classList.add("runButton");
    newStartButton.setAttribute("onClick", "runTLC();");

    simdisplay.appendChild(newStartButton);

    for (var i = 0; i < 6; i++) {
      row = document.createElement("tr");
      for (var j = 0; j < 5; j++) {
        cell = document.createElement("th");
        if ( i == 5) {
          cell.append(j + 1);
        } else {
          cellImage = document.createElement("img");
          //cellImage.id = i + "" + j;
          cellImage.src = tlcdirect + "tlcempty.png";
          cellImage.classList.add("objectImage");
          cell.appendChild(cellImage);
        }
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    simdisplay.appendChild(table);
  } else {
    simdisplay.removeChild(document.getElementById("table"));
    simdisplay.removeChild(document.getElementById("TLC"));
    simdisplay.style.display = "none";
  }
}

function runTLC() {
  var simdisplay = document.getElementById("pageend");
  var table, row, cell, cellImage, text, newStartButton;
  var tlcdirect = "imgs/Lab/";

  simdisplay.removeChild(document.getElementById("table"));

  table = document.createElement("table");
  table.id = "table";

  for (var i = 0; i < 6; i++) {
    row = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
      cell = document.createElement("th");
      if ( i == 5) {
        cell.append(j + 1);
      } else {
        cellImage = document.createElement("img");
        //cellImage.id = i + "" + j;
        if ((j == 0 || i - 1 == j-1 ) && (i > 0)) {
          cellImage.src = tlcdirect + "tlcelement" + i + ".png";
        } else {
          cellImage.src = tlcdirect + "tlcempty.png";
        }
        cellImage.classList.add("objectImage");
        cell.appendChild(cellImage);
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  simdisplay.appendChild(table);
}
