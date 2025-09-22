let screen = "";
function printScreen() {
  document.getElementById("screen-p").innerHTML = screen;
}
function one() {
  screen += 1;
  printScreen();
}
function two() {
  screen += 2;
  printScreen();
}
function three() {
  screen += 3;
  printScreen();
}
function four() {
  screen += 4;
  printScreen();
}
function five() {
  screen += 5;
  printScreen();
}
function six() {
  screen += 6;
  printScreen();
}
function seven() {
  screen += 7;
  printScreen();
}
function eight() {
  screen += 8;
  printScreen();
}
function nine() {
  screen += 9;
  printScreen();
}
function zero() {
  screen += 0;
  printScreen();
}
function clearAll() {
  screen = "";
  printScreen();
}
function paranth1() {
  screen += "(";
  printScreen();
}
function paranth2() {
  screen += ")";
  printScreen();
}
function devide() {
  screen += "÷";
  printScreen();
}
function multiply() {
  screen += "x";
  printScreen();
}
function add() {
  screen += "+";
  printScreen();
}
function subtract() {
  screen += "-";
  printScreen();
}
function remainder() {
  screen += "%";
  printScreen();
}
function equals() {
  document.getElementById("screen2").innerHTML = Number(screen);
  screen = "";
}
