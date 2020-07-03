const firstName = "Teo";
let age = 5;
let likesChicken = false;
let drivingLicense = undefined;
const surname = "Geo";

if (age >= 18) {
  console.log("Can go to bar")
} else {
  console.log("User in not old enough");
}

if (surname.charAt(0) === "G") {
  console.log("Surname starts with G");
}

if (drivingLicense !== undefined) {
  if (drivingLicense < 0){
    console.log("Expired, please don't drive");
  } else {
    console.log("Go driving");
  } 
} else {
  console.log("Learn to drive");
}

drivingLicense = 1;

if (drivingLicense !== undefined) {
  if (drivingLicense < 0){
    console.log("Expired, please don't drive");
  } else {
    console.log("Go driving");
  } 
} else {
  console.log("Learn to drive");
}

drivingLicense = -1;

if (drivingLicense !== undefined) {
  if (drivingLicense < 0){
    console.log("Expired, please don't drive");
  } else {
    console.log("Go driving");
  } 
} else {
  console.log("Learn to drive");
}

if (likesChicken) {
 // eat chicken
} else if (!likesChicken && age < 10) {
  //force eat chicken
} else {
  // no chicken eat veg
}

if (likesChicken) {
  // eat chicken
 } else if (!likesChicken && age < 10) {
   //force eat chicken
 }
 