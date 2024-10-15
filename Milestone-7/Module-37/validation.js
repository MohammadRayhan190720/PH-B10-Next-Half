//truety => true , "anything", [] , {},
//falsey => false, '' , null , undifiend, 0

// check truety
const myAge = 24;
if(myAge){
  console.log("I am perfect for log in")
}else{
  console.log("You are a age lukano person.Go back and ask your mother your age!")
}
// console.log(myAge);

//ternary
const validation = myAge
  ? "You are perfect for log in"
  : "You are a age lukano person.Go back and ask your mother your age!";
console.log(validation);

//check falsey
const name = "rayhan";
if(!name){
  console.log("flase values")
}else {
  console.log("truety values");
}

//number to string conversion
const result = 5;
console.log(result);
const resultStr = result + '';
console.log(resultStr);

//string to number conversion
const age = "26";
console.log(age);
const ageNum = +age;
console.log(ageNum);