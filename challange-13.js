/** Question: 
 let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
Output
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."

**/

//Solution: 
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

for(let a = 0; a<= color.length; a++){

    let order = ["st", "nd", "th"]

    if((a+1) == 1){
        order = "st"
    }
    else if((a+1) == 2){
        order = "nd";
    }

    else if((a+1) > 2 && (a+1) <= 10){
        order = "th";
    }
    console.log(`your ${a+1}${order} choice is: ${color[a]}`);
}