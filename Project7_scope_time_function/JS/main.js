var X = 14;                                 // Global variable
function Add_numbers_1() {
    document.write(10 + X + "<br>");
}
function Add_numbers_2() {
    document.write (X + 12 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Y = 30;                              // Local Variable
    document.write(10 + Y +"<br>")
}
function Add_numbers_4() {                  // I initially wrote this one wrong
                                            // wasn't sure if I was suppose to 
    var Y = 70                              // submit it broken or fixed?
    documnt.write(Y-2 + "<br>");           
}
Add_numbers_3();
Add_numbers_4();


function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("outofoffice").innerHTML = "Hello" + 
        ", how can we help you today?";
    }
}

if (12>6) {
    document.write("Congrats, you can count ;)")
}

function smart_enough(){
    Smarts = document.getElementById("Smarts").value;
    if (Smarts >= 8) {
        Eligible = "You are eligible to enroll";
    }
    else {
        Eligible = "Sorry, you need more Smarts";
    }
    document.getElementById("How_much_Smarts_ya_got").innerHTML = Eligible;
}

function Time_function(){                           // Time Function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time <= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}