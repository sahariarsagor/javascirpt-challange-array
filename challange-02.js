// Question: Write a Javascript code to clone an array. 

//Solution: 
//using slice method
let originalArray = [2, 4, 6];
let cloneArray = originalArray.slice();
console.log(cloneArray); //print [2, 4, 6];


//using spread operator
let ourArray = [8, 10, 12];
let ourCloneArray = [...ourArray];
console.log(ourCloneArray);

//using concat method
let ourAnotherArray = [12, 14, 16];
let ourAnotherCloneArray = [].concat(ourAnotherArray);
console.log(ourAnotherCloneArray);