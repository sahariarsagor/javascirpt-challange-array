//Question: Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

//Solution: 
const action = (Array, n)=>{
    if(Array == null){
        return void 0;
    }

    if(n == null){
        return Array[0];
    }

    if(n<0){
        return [];
    }

    return Array.slice(0, n);
}

//testing 
console.log(action([7, 9, 0, -2]));
console.log(action([], 3));
console.log(action([7, 9, 0, -2], 3));
console.log(action([7, 9, 0, -2], 6));
console.log(action([7, 9, 0, -2], -3));