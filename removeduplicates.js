// Remove duplicates from array 

const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
 const removeDuplicates = (numbers)=>{
    return numbers.filter((number, index)=> numbers.indexOf(number) === index)
 }
 console.log("removeDuplicates:", removeDuplicates(numbers));