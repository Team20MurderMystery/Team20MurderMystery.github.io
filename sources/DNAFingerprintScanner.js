function startDNA() {
  var simdisplay = document.getElementById("pageend");
  var table, row, cell, cellImage, text, newStartButton;
  var dnadirect = "imgs/Lab/";
  var morganvalues = [3000, 1500, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
  var morganindex = 0;

  if (simdisplay.style.display === "none") {
    simdisplay.style.display = "block";
    table = document.createElement("table");
    table.id = "table";

    newStartButton = document.createElement("button");
    newStartButton.id = "DNA"
    newStartButton.innerText = "Run Simulation";
    newStartButton.classList.add("runButton");
    newStartButton.setAttribute("onClick", "runDNA();");

    simdisplay.appendChild(newStartButton);

    for (var i = 0; i < 14; i++) {
      row = document.createElement("tr");
      for (var j = 0; j < 4; j++) {
        cell = document.createElement("th");
        if (i == 0) {
          if (j == 0) {
            cell.append("Sample X");
          } else if (j < 3) {
            cell.append("Suspect " + j)
          } else {
            cell.append("100 bp ladder")
          }
        } else {
          if (j == 3) {
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

    simdisplay.appendChild(table);
  } else {
    simdisplay.removeChild(document.getElementById("table"));
    simdisplay.removeChild(document.getElementById("DNA"));
    simdisplay.style.display = "none";
  }
}

function runDNA() {
  var simdisplay = document.getElementById("pageend");
  var table, row, cell, cellImage, text, newStartButton;
  var dnadirect = "imgs/Lab/";
  var rowlen = 14;
  var collen = 4;
  var morganvalues = [3000, 1500, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
  var morganindex = 0;
  var fragments = [ [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                  ];

  simdisplay.removeChild(document.getElementById("table"));

  table = document.createElement("table");
  table.id = "table";

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
        if (j == 3) {
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

            if (fragments[j][i] > 0) {
              cellImage.src = dnadirect + "dnafragment.png";
            }
          }

          cellImage.classList.add("objectImage");
          cell.appendChild(cellImage);
        }
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  simdisplay.appendChild(table);
}
