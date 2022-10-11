function my_Dictionary() {  //Dictionary
    var Drums = {
        Make: "Tama",
        Model: "Stage Custom",
        Color: "Pearl",
        Pieces: 5,
        Price: "$700"
    } ;
    delete Drums.Color;    // Deleting Value
    document.getElementById("Dictionary").innerHTML = Drums.Color;
}