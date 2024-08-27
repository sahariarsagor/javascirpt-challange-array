//Question: Write a simple JavaScript program to join all elements of the following array into a string.

//Solution: 
let myColor = ["red", "green", "yellow", "aqua", "blue"];
let myColorString = myColor.toString();
console.log(myColorString); //print red,green,yellow,aqua,blue
console.log(myColor.join()); //print red,green,yellow,aqua,blue
console.log(myColor.join(" + ")); // print red + green + yellow + aqua + blue 