

function candy_function(){
    var candy_output;
    var candy = document.getElementById("candy_input").value;
    var candy_string = ", what a delicious choice!"
    switch(candy) {
        case "Licorice":
            candy_output = "Licorice" + candy_string;
        break;
        case "Lemon Heads":
            candy_output = "Lemon Heads" + candy_string;
        break;
        case "Chocolate Bar":
            candy_output = "Chocolate Bar" + candy_string;
        break;
        case "Sour Patch Kids":
            candy_output = "Sour Patch Kids" + candy_string;
        break;
        case "Milk Duds":
            candy_output = "Milk Duds" + candy_string;
        break;
        case "Air Heads":
            candy_output = "Air Heads" + candy_string;
        break;
        default:
            candy_output= "Please enter an option exactly as it is spelled.";
    }
    document.getElementById("output").innerHTML = candy_output;
}

function classname(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var i = document.getElementById("ID_Name")
var ctx = i.getContext("2d");

var grd = ctx.createRadialGradient(250, 125, 1, 250, 250, 400);
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250)

