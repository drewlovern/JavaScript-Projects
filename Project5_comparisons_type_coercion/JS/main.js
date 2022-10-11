document.write(typeof "Spaghetti");
document.write("<br>")
document.write("10" + 20);
document.write("<br>")
function my_function() {
    document.getElementById("NaNtime").innerHTML = 0/0;
}


function notnumber() {
    document.getElementById("true").innerHTML = isNaN('Not a Number');
}


function isnumber() {
    document.getElementById("false").innerHTML = isNaN('1000');
}

function infin() {
    document.getElementById("high").innerHTML = 3E310;
}


function neginfin() {
    document.getElementById("low").innerHTML = -3E310;
}
document.write("<br>")
document.write(8 > 4);
document.write("<br>")
document.write(4 > 8);

console.log(8 * 4);
console.log(8<4);
document.write("<br>")
document.write(30 == 30)
document.write("<br>")
document.write(4 == 9)
document.write("<br>")

X = 30
Y = "30"
A = "We did it!"
B = "We did it!"
C = "10"
D = 20
E = 10
F = 15
document.write (X === Y)
document.write("<br>")
document.write (A === B)
document.write("<br>")
document.write (C === D)
document.write("<br>")
document.write (E === F)
document.write("<br>")

document.write(8<12 && 12>8)
document.write("<br>")
document.write(8>12 && 12>8)
document.write("<br>")
document.write(8>12 || 12<8)
document.write("<br>")
document.write(8<12 || 12>8)
document.write("<br>")

function not_function() {
    document.getElementById("Not").innerHTML = ! (20>10)
}
function notty_function() {
    document.getElementById("Notty").innerHTML = ! (20<10)
}