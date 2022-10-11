function addition_Function() {
    var addition = 8 + 9;
    document.getElementById("Math").innerHTML = "8 + 9 = " + addition; // Addition
}
function Subtraction_Function() {
    var Subtraction = 100 - 34;
    document.getElementById("Sub").innerHTML = "100 - 34 = " + Subtraction; // Subtraction
}
function Multiplication() {
    var simple_Math = 10 * 3;
    document.getElementById("Mult").innerHTML = "10 * 3 = " + simple_Math; // Multiplication
}
function Division() {
    var more_math = 10 / 5;
    document.getElementById("Div").innerHTML = "10 / 5 = " + more_math; // Division
}
function All_Math() {
    var allmath = (20 / 10) * 30 / 2 -5;
    document.getElementById("All").innerHTML = "(20 / 10) * 30 / 2 -5 = " + allmath; // Multiple Math operators
}
function Modulus() {
    var modu = 32 % 7;
    document.getElementById("Mod").innerHTML = "When divding 32 by 7, you have a remainder of: " + modu; // Modulus
}
function negation_Operator(){
    var x = 10;
    document.getElementById("Op").innerHTML = -x;  // Negation
}
var W = 72;
W++;
document.write(W);  //Increment

document.write("<br>");
document.write("<br>");

var D = 72;
D--;
document.write(D); //Decrement 

window.alert(Math.random());  // Random between 0 and 1 popup

window.alert(Math.random() * 100); // Random between 0 and 100 popup

function Pi() {
document.getElementById("Pi").innerHTML = Math.PI;  // Pi Object
}
