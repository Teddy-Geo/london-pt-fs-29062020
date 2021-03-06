/**
 * Exercise 1
 *
 * Create an object {user} and add properties "firstName" and "lastName".
 */
let user = {
  firstName: 'Alex',
  lastName: 'Smith'
}
/**
 * Exercise 2
 *
 * Create an object {userRead} and add properties "books" and "newspapers".
 * Both should be arrays with strings.
 */
let userRead = {
  books: ['Harry Potter', 'Hunger Games'],
  newspapers: ['The Guardian', 'Evening Standart']
}
/**
 * Exercise 3
 *
 * extend {user} object with all properties from {userRead} object
 *
 * Note: if I modify {userRead} it shouldn't change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: []
 * }
 */
user = Object.assign(user, userRead);
console.log(user);
console.log(userRead);
/**
 * Exercise 4
 *
 * Create an object {userWatch} and add properties "tvShows" and "movies".
 * Both should be arrays with strings.
 */
let userWatch = {
  tvShows: ['Friends', 'Two and Half Man'],
  movies: ['Alabala', 'Tralala']
}
console.log(user);
/**
 * Exercise 5
 *
 * extend {user} object with new property "userWatch" and assign {userWatch} object
 * as a value.
 *
 * Note: if I modify {userWatch} it should change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: [],
 *   userWatch: {
 *     tvShows: [],
 *     movies: []
 *   }
 * }
 */

 user = {
   ...user,
   userWatch:{
     ...userWatch
   }
 }
 console.log(user);