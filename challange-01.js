// Write a JavaScript function to check whether an 'input' is an array or not.

//Solution 
function isArray(input){
    return Array.isArray(input);
}

//testing passing a string and a array
console.log(isArray("Sahariar Sagor")); //print false 
console.log(isArray([1, 2, 3])); //print true