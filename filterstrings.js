
filter out words with a length less than 6 characters

const words = ["apple", "banana", "grape", "kiwi", "orange"];

const filterstrings = (words)=>{
    return words.filter((word)=>word.length < 6)
}
console.log("filteredstrings:", filterstrings(words));