//Question: Write a JavaScript program to compute the sum and product of an array of integers.

//Solution: 
let array = [1, 2, 3, 4, 5, 6]; 
let sumOfArray = 0;
let productOfArray = 1;

for(let a = 0; a<array.length; a++){
    //Calculate Sum 
    sumOfArray += array[a];

    //Calculating Product
    productOfArray *= array[a];
}

console.log(`Sum of this array is: ${sumOfArray}`);
console.log(`Product of this array is ${productOfArray}`);