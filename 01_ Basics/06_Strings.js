
let name = "Aditi"

let age = 21;

//String Interpolation using backticks 
console.log(`Hello my name is ${name} ans my age is ${age}`);


//String as objects 
const str = new String('hello') // gives an object with each character as key value pair
//{ 0:h....and so on }
console.log(str);


//String Methods
console.log( str.__proto__);  
console.log(str.length); // length of string
console.log(str.toUpperCase()); // doesnt change original value 
console.log(str.charAt(3)); // gives character at given position
console.log(str.indexOf('l')); // gives index of given character

const subStr = str.substring(0,4);
console.log(subStr); // doesn't take negative value

const slicedStr = str.slice(-6 , 2); /// can accept negative values
//negatuve index count back from string i.e. negativeIdx + string.length
console.log(slicedStr);

const stringSpaces = "     helloooo        "
const stringnoSpace = stringSpaces.trim();
console.log(stringSpaces);
console.log(stringnoSpace);
//trim works only on whitespaes and new line terminators 
// trimStart() and trimEnd() also exists


let replaceStr = "heloo.com/2%hel"
console.log(replaceStr.replace('%','-')); // heloo.com/2-hel

console.log(replaceStr.includes('helo')); //true

const stringSplit = "welcome-bro"
console.log(stringSplit.split('-'));//returns an array

