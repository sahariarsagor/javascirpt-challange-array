//Question: Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

//Solution: 
let num = 25468;
let str = num.toString();
let result = [str[0]];

for(let a = 1; a<str.length; a++){
    if(str[a-1]%2 === 0 && str[a]%2 === 0){
        result.push('-', str[a]);
    } else {
        result.push(str[a]);
    }
}

console.log(result.join(''));