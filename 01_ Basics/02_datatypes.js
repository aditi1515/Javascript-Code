"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3
    +
    3) // code readability should be high

console.log("aditi")


let name = "aditi"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object




//Types of datatypes

//1 Primitive
// String , Number , Boolean , null , undefined , Symbol , BigInt 

let str = "";
let bool = true;
let something = null;
let score; // undefinded

let id = Symbol('123');
let id2 = Symbol('123');

console.log(id === id2);

const bigNum = 1213333334355555557454545n;

console.log(typeof bigNum);


//2 Reference or Non-primitive datatypes

//Arrays , objects , functions