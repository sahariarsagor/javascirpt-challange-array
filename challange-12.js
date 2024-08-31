//Question: Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

//Solution: 
const testDuplicate = (myNum)=>{
    let len = myNum.length;
    let finalArray = [];
    let ourObject = {};

    for(let a = 0; a<len; a++){
        ourObject[myNum[a]] = 0;
    }

    for (a in ourObject){
        finalArray.push(a);
    }

    console.log(finalArray);
}

testDuplicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]);