const myName = "John"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam", "Teo", "Victor"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */

 function greetVisitors() { 
  
  for (let visitor = 0; visitor < visitors.length; visitor++) {
    let name = visitors[visitor];
    console.log(`Hi ${myName}, my name is ${name}!`);
  }
 }
 greetVisitors();

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */

function getElementIndex(check) {
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number === check) {
      return index;
    }
  } return 'Item not found';
}

// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */
function total() {
  let sum = 0
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    sum += number;
  } return sum;
}

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */

let newArray = [];
function addIndex() {
    for(let i = 0; i < numbersForIndexes.length; i++) {
      newArray.push(numbersForIndexes[i] + i);
    }
    return newArray;
  }

const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */


function lowestNumber() {
  for (let i = 0; i < forLowestNumber.length; i++) {
    if(forLowestNumber[i] < 0) {
      return forLowestNumber[i];
    }
  }
}
console.log(lowestNumber());

function lowestNumber() {
  let setNumber = 0;
  for (let i = 0; i < forLowestNumber.length; i++) {
    if(forLowestNumber[i] < setNumber) {
      setNumber = forLowestNumber[i];
    }
  }
  return setNumber;
}
console.log(lowestNumber());