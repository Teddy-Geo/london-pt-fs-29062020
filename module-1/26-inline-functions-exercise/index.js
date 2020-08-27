/* ================ */
/* INLINE FUNCTIONS */
/* ================ */

/**
 * Exercise 1
 *
 * create an inline function {reverseArray} that takes array as a param
 * and return reversed array. If you don't pass any param,
 * use default value "[]", is you pass any other type than array
 * return a string "Please, pass correct type".
 */
const reverseArray = function (array = []) {
  if (Array.isArray(array)){
    return array.reverse();
  }
  return "Please, pass correct type"
}
/**
 * Exercise 2
 *
 * create an inline function {nextOddNum} that takes number as a param
 * and return next odd number.
 */
const nextOddNum = function (number) {
  if (number % 2 !== 0) {
    number += 2;
  } else if (number % 2 === 0) {
    number += 1;
  }
  return number;
}
/**
 * Exercise 3
 * 
 * create an inline function {isLessThan100} which should take 
 * 2 numbers as a param.
 * Given two numbers, return true if the sum of both numbers is 
 * less than 100. Otherwise return false.
 */
const isLessThan100 = function (num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  }
  return false;
}
/**
 * Exercise 4
 * create an inline function {incrementBy5} which takes
 * a number as a param, add 5 and return the result.
 */
const incrementBy5 = function (number) {
return number + 5;
}
/**
 * Exercise 5
 * create a function {incrementAllBy5} which takes array
 * of numbers as a first param and a incrementor function as a second param.
 * Then apply incrementor function to each element in your array and 
 * return the result
 */
const incrementAllBy5 = function (array, incrementor) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(incrementor(array[i]));
  }
  return newArray;
};