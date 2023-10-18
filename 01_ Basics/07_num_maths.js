//NUMBERS
const num = 200;
console.log(num);

const num2 = new Number(100);
//we get methods as well

console.log(num2.toString()); //type of num2 changes to string

const num3 = 189.4563;
console.log(num3.toFixed(2)); // numbers after decimal //189.46
console.log(num3.toPrecision(4)); //priority to numbers brfore decimal //189.4

const money = 1000000;
console.log(money.toLocaleString());//standard US 1,000,000
console.log(money.toLocaleString('en-In'));//indian 10,00,000

console.log(Number.MAX_VALUE); //standard Number functions in js
console.log(Number.MIN_VALUE);


//MATH Library
console.log(Math.abs(-3));
console.log(Math.round(3.4));
console.log(Math.floor(3.4));
console.log(Math.ceil(3.4));

console.log(Math.random()); // always gives value between 0 and 1
//To get values in a range
console.log(Math.random()*10+1); //+1 so as to avoid getting 0 

//For any random numbers bewteen range min-max

//Math.floor((Math.random()*(max-min+1))+min)