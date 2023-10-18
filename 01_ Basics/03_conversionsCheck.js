let score = 33;

console.log(typeof(score));
console.log(typeof score);

let valOfNum = Number(score);

console.log(typeof valOfNum);

//value after conversion to number
// 33 is a num => 33
//if "33abc" => NaN()not a number
// true=>1 , false => 0
//null => 0 
// undefined => NaN


let isLoggedIn = 1;
let str = "";

let  booelanIsLoggedIn = Boolean(isLoggedIn);
let  booleanStr = Boolean(str);
console.log(booelanIsLoggedIn);
console.log(booleanStr);

//value after conversion to boolean
// 1 -> true
// "" -> false
// "hello"-> true

let num = 20;

let strNum = String(num);
console.log(strNum);
console.log(typeof strNum);



//---------Operations----------------

//Basic Operatons

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**4);  Power 


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true); // 1
console.log(+""); // 0


//Prefix and postfix operators