function Vote_Function(){                   // Vote exercise
    var Age, Can_vote;
    Age = document.getElementById("Age") .value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote") .innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {    // Vehicle exercise
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford","Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Fruit(Color, Size, Shape, Taste, Name) {             // My own constructor
    this.Fruit_Color = Color;
    this.Fruit_Size = Size;
    this.Fruit_Shape = Shape;
    this.Fruit_Taste = Taste;
    this.Fruit_Name = Name;
}
var Apples = new Fruit("red", "medium", "round", "delicious", "Apples");
function NewandThis() {
    document.getElementById("New_and_This").innerHTML = 
    "Guess what fruits are " + Apples.Fruit_Color + ", of a " + Apples.Fruit_Size + " size, a " 
    + Apples.Fruit_Shape + " shape, and taste " + Apples.Fruit_Taste + "....." + Apples.Fruit_Name + "!"
}

function Shoe(Sex, Size, Brand, Color) {  // Another constructor
    this.ShoeSex = Sex;
    this.ShoeSize= Size;
    this.ShoeBrand = Brand;
    this.ShoeColor = Color;
}
var Drew = new Shoe("Mens","10.5","Adidas","White");
function AllShoes() {
    document.getElementById("Shoes").innerHTML = 
    "You've selected a " + Drew.ShoeSex + " shoe , at a size " + Drew.ShoeSize + " made by " 
    + Drew.ShoeBrand + ", and they are a vibrant " + Drew.ShoeColor + "."
}
function CountFunction() {                                   // Counting by 10....only once :P 
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count() {
        var Starting_Point = 10;
        function Plus_ten () {Starting_Point += 10}
        Plus_ten();
        return Starting_Point;
    }
}

