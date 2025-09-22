let screen = "";
function appendToDisplay(input) {
  screen += input;
  document.getElementById("screen-p").innerHTML = screen;
}

function clearAll() {
  screen = "";
  document.getElementById("screen-p").innerHTML = screen;
  document.getElementById("screen2").innerHTML = "";
}
function equals() {
  try {
    document.getElementById("screen2").innerHTML = eval(screen);
  } catch (error) {
    document.getElementById("screen2").innerHTML = "Error";
  }
  screen = "";
}
