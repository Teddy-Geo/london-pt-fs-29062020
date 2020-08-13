// use a variable outside the loop
let num = 0;
while (num < 10) {
  console.log(num++);
}

// infinite counter
/* let number = 1;

while (number > 0) {
  console.log(number++);
} */

// with while loop we have access of the counter outside of the loop whereas in for loop, counter only exist inside the block of code 
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
  console.log("****");
}
console.log(i);

console.log("*****");

// generating random number b/n 50 and 100
let index = 0;
const target = 50 + Math.random() * 50 
while(index < target){
 index++;
}
console.log(index);

console.log(" Ticket generator ");

function generateTicket () {
  return [1,2,3,4,5, Math.random() * 10];
}

function validTicket(ticket) {
  return ticket[ticket.length -1] < 4;
}

const validTickets = [];

attempts = 0;

while (validTickets.length < 1000) {
  const newTicket = generateTicket();

  if (validTicket(newTicket)){
    validTickets.push(newTicket);
  }
  
  attempts++;
} 

//console.log(generateTicket());
console.log(validTickets.length, attempts);