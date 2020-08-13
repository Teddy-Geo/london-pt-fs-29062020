// for of iterates over values , where for in iterate over keys
//used more for arrays the for objects  

const sizes = ["S", "M", "L"];

for (let values of sizes){
console.log(values);
}

const stations = [

  {name: "abc", usage: 2.2},
  {name: "def", usage: 2},
  {name: "trg", usage: 7.2},
  {name: "pth", usage: 1.6},
  {name: "lqm", usage: 4.8}
];

for (const station of stations) {
  console.log('station', station.name);
  for (const value of stations) {
    console.log(value, station);
  }
}