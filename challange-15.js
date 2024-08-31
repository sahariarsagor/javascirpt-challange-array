//Question: Find the leap years in a given range of years.

//Solution: 
const findingLeapYear = (startingYear, endingYear) => {
    let leapYear = [];

    for(let year = startingYear; year<= endingYear; year++){
        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            leapYear.push(year);
        }
    }
    return leapYear;
}

//testing 
console.log(findingLeapYear(2000, 2024));