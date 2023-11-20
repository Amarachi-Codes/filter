create a new array (largeNumbers) that includes only the numbers greater than 10.

const numbers = [15, 8, 23, 4, 42, 11];

const largeNumbers = (numbers)=>{
    return numbers.filter((number)=>number > 10)
}
console.log("largeNumbers:", largeNumbers(numbers));