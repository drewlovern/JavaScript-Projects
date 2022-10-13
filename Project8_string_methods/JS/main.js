function full_sentence(){                            //Conatenate
    var part_1 = "Check out "
    var part_2 = "this sentence that I could "
    var part_3 = "have just made into "
    var part_4 = "one single variable ;P"
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){                            // Slice
    var Sentence = "All work and no play makes Drew a dull boy.";
    var Section = Sentence.slice(27,31);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_case(){                              // Upper
    var Sentence = "Click to change to Upper Case!";
    var Upper = Sentence.toUpperCase();
    document.getElementById("uppercase").innerHTML = Upper;
}
function search(){                                  // Search
    var Sentence = "Where is the first 19 in this string?"
    var searching = Sentence.search(/19/i);
    document.getElementById("searched").innerHTML = searching;
    }
    function stringmethod(){                        //String
    var Y = 39820;
    document.getElementById("numbertostring").innerHTML = Y.toString();
}
function precisionmethod(){                         // Precision
    var Y = 39.558444816577;
    document.getElementById("precise").innerHTML = Y.toPrecision(8);
}
function fixedmethod(){                             // Fixed
    var Y = 39.558444816577;
    document.getElementById("fixed").innerHTML = Y.toFixed();
}
function valueofmethod(){                           // Value of
    var Sentence = "This will not change.";
    document.getElementById("value").innerHTML = Sentence.valueOf();
}