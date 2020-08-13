const stations = [
  {name: "withstable", usage: 1.2 },
  {name: "romford", usage: 2 },
  {name: "earlsfield", usage: 2.3 },
  {name: "east tilbury", usage: 0.3 },
  {name: "angel", usage: 4 },
  {name: "barking", usage: 6 },

];

for (let counter = 0; counter < 6; counter++) {
console.log(stations[counter].name, stations[counter].usage);
}

console.log("****counting up from 0 ****");
for (let counter = 0; counter < 6; counter++) {
console.log(counter);
}

console.log("****nice numbers****");
for (let counter = 1; counter <= 6; counter++) {
console.log(counter);
}

console.log("****elements in the array****");
for (let i = 0; i < stations.length; i++) {
//const station = stations[i];
console.log(stations[i]); //console.log(station);
}

/* console.log("***counting in other ways***");

for (let i = 53562623237; i > 87647484; i = Math.random() * 1000000000000) {
console.log(`i is ${i}`);
} */

console.log("****Not numbers");

for (const person = {name: "s"}; person.name.length <= 10; person.name = person.name + "K"){
  console.log(person);
}

console.log("****nested for loops");

 for (let index = 0; index < stations.length; index++) {
  const station = stations[index];
  for (let millions = 0; millions < station.usage; millions += 0.1) {
    console.log(`${station.name} not reached capacity yet ${millions}`);
  }
  console.log(`reached capacity of ${station.usage}`)
} 

const arrayOfArrays = [
  [5,5,5],
  [6,8,90,2]
]

for (let i = 0; i < arrayOfArrays.length; i++){
  const arrayOfNumbers = arrayOfArrays[i];

  for (let j = 0; j < arrayOfNumbers.length; j++) {
    const number = arrayOfNumbers[j];
    
  }
}

// Nested Loops and multi-dimensional objects //
/* We can use nested loops to access all the 
  elements inside multi-dimensional arrays or objects
 */

let twoD = [[1,2,3,4,5,6,7],
            [8,9,5,7,3,22,6,42],
            [123,54,12,11,9,15]];
          

//nested for loops
let rows = twoD.length;
for (let i = 0; i < rows; i++) {
 let items = twoD[i].length;
 console.log(i, items);
 for(let num = 0; num < items; num++){
  console.log(twoD[i][num]);
 } 
}

let bigHero = {characters:[
  {name:'Hiro', voice:'aaa'},
  {name:'Baymax',voice:'sss'},
  {name:'Gogo', voice:'hhh'},
  {name:'Fred', voice:'ttt'}
]};  

let chars = bigHero.characters; //bigHero['characters'];
for (let i = 0; i < chars.length; i++) {
  //console.log(chars[i]);
   //console.log(chars[i].name);
   //console.log(chars[i]['voice']);
   
   //for in loop
   for(let property in chars[i]){
     console.log(property, chars[i].voice, chars[i][property]);
   }
}


// GRID 
 
const grid = [];

// [
//   [1, 0, 1],
//   [0, 1, 0],
//   [0, 1, 0]
// ]

for (let y = 0; y < 3; y++) {
  const row = [];
  for (let x = 0; x < 3; x++) {
    //row.push([1, 0, 1])
    row.push({ x: x, y: y});
  }
  grid.push(row);
}
console.log(grid);

console.log("**** modifying the counter");
for (let counter = 0; counter <= 6; counter++){
  console.log(counter);
  if (counter === 3) {
    counter += 10;
  }
 
}