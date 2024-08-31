//Array Method in Javascript
//8 popular method in javascript array. 

// 1. push Method 
// Adds one or more elements to the end of an array and returns the new length of the array.
let arr = [1, 2, 3, 4]; 
let returnValue = arr.push(5); 
console.log(returnValue); //print 5 cause the array length is 5
console.log(arr); // new array is [1, 2, 3, 4, 5];


// 2. Pop Method 
//Removes the last element from an array and returns that element.

let popReturnValue = arr.pop();
console.log(popReturnValue); // print 5 cause the last element is 5. 
console.log(arr); // print [1, 2, 3, 4]

// 3. shift() method 
//Removes the first element from an array and returns that element.
let shiftReturnValue = arr.shift();
console.log(arr); // print [2, 3, 4];
console.log(shiftReturnValue); // print 1, cause the first element is 1. 

// 4. unshift() method: 
//Adds one or more elements to the beginning of an array and returns the new length of the array.

let unshiftReturnValue = arr.unshift(1);
console.log(arr); // print [ 1, 2, 3, 4 ]
console.log(unshiftReturnValue); // print 4 cause new length is 4. 

// 5. slice method 
//Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

let newArray = [1, 2, 3, 4, 5, 6];
let slicedArray = newArray.slice(1, 4);
console.log(slicedArray); // print [ 2, 3, 4 ]

// 6. splice Method: 
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let anotherArray = [2, 4, 6, 8, 10];
console.log(anotherArray.splice(1, 3)); // [ 4, 6, 8 ]


// 7. forEach method: 
// Executes a provided function once for each array element.

let againArray = [1, 2, 3, 4, 5, 6];
againArray.forEach(function(items){
    console.log(items); // print 1, 2, 3, 4, 5, 6;
});


// 8. map method: 
//Creates a new array populated with the results of calling a provided function on every element in the calling array.

let doubled = againArray.map(function(items){
    console.log(items*2); // print 2, 4, 6, 8, 10, 12
});