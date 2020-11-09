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
  var x = document.getElementById("img3");
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
  var object = "teacup"

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
    object = "cakesmudge";

  if (sim === "Run Fingerprint Scanner" || sim === "Run TLC")
    document.getElementById('display').setAttribute("src", "imgs/lab_imgs/" + object + ".jpg")

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
