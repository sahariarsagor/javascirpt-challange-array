//Question: Write a JavaScript program to find the sum of squares of a numerical vector.


//Solution: 
function square(array){
    let sum = 0;
    for(let x = 0; x<array.length; x++){
        sum += Math.pow(array[x], 2);
    }
    console.log(sum);
}
square([0, 1, 2, 3, 4]);