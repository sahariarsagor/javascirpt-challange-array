//Question: Write a JavaScript program to find the most frequent item in an array.

//Solution: 
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let mostFrequent = 1;
let most = 0;
let item;

for(let x = 0; x<arr1.length; x++){
    for(let y = x; y<arr1.length; y++){

        if(arr1[x] == arr1[y]){
            most++;
        }

        if(mostFrequent<most){
            mostFrequent = most;
            item = arr1[x];
        }
    }
    most = 0;
}

console.log(`${item} ${mostFrequent} times`);