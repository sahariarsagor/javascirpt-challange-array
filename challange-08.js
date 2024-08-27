//Question: Write a JavaScript program that prints the elements of the following array.

//Solution: 
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let i in a){
    console.log("Row "+ i);

    for(let j in a[i]){
        console.log(' ' + a[i][j]);
    }
}