//Question: Write a JavaScript program to shuffle an array.

//solution: 
const swapArray = (array) =>{
    for(let a = array.length - 1; a>0; a--){
        const j = Math.floor(Math.random() * (a+1));
        [array[a], array[j]] = [array[j], array[a]];
    }
    return array;
}

console.log(swapArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));