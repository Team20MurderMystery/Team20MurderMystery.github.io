function startTLC() {
  var simdisplay = document.getElementById("pageend");
  var table, row, cell, cellImage, text, newStartButton;
  var tcldirect = "imgs/Lab/";

  if (simdisplay.style.display === "none") {
    simdisplay.style.display = "block";
    table = document.createElement("table");
    table.id = "table";

    newStartButton = document.createElement("button");
    newStartButton.id = "TLC"
    newStartButton.innerText = "Run Scanner";
    newStartButton.classList.add("runButton");
    newStartButton.setAttribute("onClick", "runTLC();");

    simdisplay.appendChild(newStartButton);

    for (var i = 0; i < 5; i++) {
      row = document.createElement("tr");
      for (var j = 0; j < 5; j++) {
        cell = document.createElement("th");
        cellImage = document.createElement("img");
        //cellImage.id = "" + str(i) + str(j);
        cellImage.src = tcldirect + "tlcempty.png";
        cellImage.classList.add("objectImage");
        cell.appendChild(cellImage);
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
  var tcldirect = "imgs/Lab/";

  simdisplay.removeChild(document.getElementById("table"));

  table = document.createElement("table");
  table.id = "table";

  for (var i = 0; i < 5; i++) {
    row = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
      cell = document.createElement("th");
      cellImage = document.createElement("img");
      if ((j == 0 || i - 1 == j-1 ) && (i > 0)) {
        cellImage.src = tcldirect + "tlcelement" + i + ".png";
      } else {
        cellImage.src = tcldirect + "tlcempty.png";
      }
      cellImage.id = "" + i + j;
      cellImage.classList.add("objectImage");
      cell.appendChild(cellImage);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  simdisplay.appendChild(table);
}
