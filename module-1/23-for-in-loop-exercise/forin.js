// FOR  all of the keys IN object, execute some code
// this is called iteration or iterating over all elements in a array
// FOR IN can be used in arrays and objects

// Object
const person = {name: "Sam", age:29};

for (let key in person) {
   console.log(`Key and value ${key}: ${person[key]}`);
   console.log(`Only key ${key}`);
   console.log(`Only value ${person[key]}`);
   console.log(key);
} 

//Array
const sizes = ["S", "M", "L"];

for (key in sizes){
  console.log(key, sizes[key]);
} 

const teams = ["spurs", "man u", "man c", "chelsea", "barking"];
const points = [1.2, 2, 2.3, 0.3, 4];

for (const key in teams) {
    const value = teams[key];
    console.log(key, value); 
}

for (let key in points){
  const value = points[key];
  console.log(key, value);
}

console.log("**************");

const pokemon = {
  id: 5,
  name: "pikachu",
  type: "electric",
  status: [
    {
    stat: "hp",
    values: 100

    }
  ]
}

for (const key in pokemon) {
    const value = pokemon[key];
    console.log(key, value);
}
