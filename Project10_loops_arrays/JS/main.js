function Call_Loop(){                       // Call Loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}
function practice(){
 let words = "What's happening?"
 let length = words.length;
 document.getElementById("tada").innerHTML = length;
}

var Instruments = ["Xylophone", "Maracas", "Djembe", "Claves", "Cajon", "Cello", "Tambourine"];
var Content = "";
var Y;
function for_Loop() {                                       // For Loop
    for (Y = 0; Y<Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {                                // Array Function
    var What_Happened = [];
    What_Happened[0] = "nothing";
    What_Happened[1] = "something";
    What_Happened[2] = "everything";
    What_Happened[3] = "unknown";
    document.getElementById("Array").innerHTML = "When you clicked the button " +
    What_Happened[1] + " happened.";
}

function constant_function(){                           // Constant Function
    const musical_instrument = {type:"drums", brand:"Tama", color:"white"};
    musical_instrument.color = "green";
    musical_instrument.price= "$1,100";
    document.getElementById("Constant").innerHTML = "The " + musical_instrument.color
    + " " + musical_instrument.brand + " " + musical_instrument.type + " cost " +
    musical_instrument.price
}

var x = 27;                             // Variable stacking order
document.write(x);
{
    let x = 44;
    document.write("<br>" + x);
}
document.write ("<br>" + x + "<br>"); 


var ret = fun(19, 10);                  // Return Stmnt
function fun(x, y)
{
return x * y;
}
document.write(ret + "<br>");

let plant = {                       // Object
    name: "Prickley Pear",
    species: "Cactus",
    color: "green",
    edible: "not",
    description : function() {
        return "This is a " + this.name + " " + this.species 
        + ". It is " + this.color + " and is " + this.edible + " edible."
    }
};
document.getElementById("cactus").innerHTML = plant.description();

function break_Loop(){                  // Break Statement
    let Digit = "";
    let X = 1;
    while (X < 11) {
        if (X === 8) break;
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("break").innerHTML = Digit;
}

function cont_Loop(){                   // Continue statement
    let Digit = "";
    let X = 0;
    while (X < 10) {
        X++;
        if (X === 5) continue;
        Digit += "<br>" + X;
       
    }
    document.getElementById("cont").innerHTML = Digit;
}