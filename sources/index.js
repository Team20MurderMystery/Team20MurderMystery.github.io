function brush(object) {
    window.alert("You have collected fingerprints from the " + object)

}
function description(object) {
    window.alert("Shows info for " + object)

}

function labroom() {
  var x = document.getElementById("img3");
  var y = document.getElementById("lab");
  var z = document.getElementById("simulator");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
  } else if (z.style.display === "block"){
    z.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

function fps() {
  document.getElementById('display').setAttribute("src", "imgs/lab_imgs/fps.jpeg")
  var myDiv = document.getElementById("simulator");
  myDiv.style.display = "block";
  //var button = document.createElement('BUTTON');
  var text = document.createTextNode("Scan Prints");
  var image = ""
  //button.appendChild(text);
  //myDiv.appendChild(button);

  var object = "teacup"
}

function tlc() {
  document.getElementById('display').setAttribute("src", "imgs/lab_imgs/tlc.jpg")
  var myDiv = document.getElementById("simulator");
  myDiv.style.display = "block";
  //var button = document.createElement('BUTTON');
  var text = document.createTextNode("Isolate Mixture");
  var image = ""
  //button.appendChild(text);
  //myDiv.appendChild(button);

  var object = "teacup"
}
