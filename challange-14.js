// Question: Accept one array return the sum of all the element of this array. 

//Solution: 
const sumOfArray = (myNum) =>{
    let sum = 0;
    for(let a = 0; a< myNum.length; a++){
        sum = sum + parseInt(myNum[a]);
    }
    console.log(sum);
}

sumOfArray([1, 2]);