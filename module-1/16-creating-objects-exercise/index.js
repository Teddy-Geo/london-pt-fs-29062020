/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
let user = {
  firstName: 'Teo',
  lastName: 'Geo',
  age: 88
};
console.log(user);
/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */

let allTypes = {
  string: 'Hello',
  number: 4,
  array: ['hello', 'me', 24],
  object: {
       i: 'me',
       age: 24
  }, 
  function: function sum( num1, num2) {
       return num1 + num2;
     }, 
  boolean: true
};
console.log(allTypes);
/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
 
function createMovieObject(name, rating, ticketPrice) {
  //this.name = name;
  //this.rating = rating;
  //this.ticketPrice = ticketPrice;
  let movie = new Object();
  return {name, rating, ticketPrice};
}
console.log(createMovieObject('Godzilla', 5.5, 12.00));
