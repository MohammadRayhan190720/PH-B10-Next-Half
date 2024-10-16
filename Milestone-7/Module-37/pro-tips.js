//reverse a string

const reverseString = str =>
  str.split('').reverse().join('')

console.log(reverseString("Mohammad Rayhan"));

//get the average of multiple numbers
const average = (...averg) => averg.reduce((privious, current)=> privious + current ,0)/averg.length

console.log(average(5,10,15,20));

//check if the number is even or odd

const evenNumber = (num1) => num1 % 2===0;
console.log(evenNumber(10));

//remove duplicate elements in an array
const uniqeArray = (arr) =>[...new Set(arr)];

const array = [1,1,2,4,5,1,2,4];
console.log(uniqeArray(array));

//capitleize the frist letter of a string

const capitleFristLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const address = 'rangpur dhaka';
console.log(capitleFristLetter(address));