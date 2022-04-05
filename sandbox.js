// expected input: "hello i am sam"
// expected output: "olleh i ma mas"
// assume valid input and no punctuation

const sentence = "hello I am Jordan";

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords(sentence));

// Write a function at that takes an array and an index and returns the item at corresponding index.
// However, negative indices should work from the back of the array.

const myArray = ["hi", "I", "am", "array"];

// expected: array, 2 ... array, -1
// output: 'am' ... 'array'

function at(arr, index) {
  return index > -1 ? arr[index] : arr[arr.length + index];
}

console.log(at(myArray, 2));
console.log(at(myArray, -1));

// Write a function that takes positive int n, returns array that contains all numbers from 1 to n sorted
// If a number is divisible by 3, print 'Fizz'; if evenly divisible by 5, print 'buzz'
// if a multiple of both, print 'FizzBuzz'
// if num % 3 === 0, print 'Fizz'

function fizzBuzz(int) {
  const fizzArray = [];

  for (let i = 1; i <= int; i++) {
    if (i % 15 === 0) fizzArray.push("FizzBuzz");
    else if (i % 3 === 0) fizzArray.push("Fizz");
    else if (i % 5 === 0) fizzArray.push("Buzz");
    else fizzArray.push(i);
  }

  return fizzArray;
}

console.log(fizzBuzz(16));
console.log(fizzBuzz(21));

// Unique String

// expected: [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]
//        	  'BbBb'
// expected: [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]
//            'foo'

function uniqueString(arr) {
  // check each string for its contents
  // compare those contents to the next string
  const unique = new Set(
    arr.map((string) => {
      string.split("").sort().join(",");
    })
  );
  console.log("unique", unique);
  const setArr = [...unique];
  console.log("setArr", setArr);

  setArr.reduce((a, b) => a !== b);

  // return a string if it includes a letter that is unique among other strings
}

console.log(uniqueString(["mail", "liam", "bail", "laim", "mamil"]));
