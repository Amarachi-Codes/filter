const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber = (numbers)=>{
    return numbers.filter((number)=>number % 2 === 0)
}
console.log("evenNumbers: ", evenNumber(numbers));
