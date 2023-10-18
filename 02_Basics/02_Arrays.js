const flowers =["lily", "rose","hibiscus"];

const colors = ["white","red", "pink"]

// flowers.push(colors);//arrays will not merge but the colors array will be added as whole in the flowers array as an eleemnt 
//this method changes the exisiting array
console.log(flowers);

const mergedArray = flowers.concat(colors)//it will combine both the arrays and returns a new array without modifying the existing aray
console.log(mergedArray);

//use spread operator
const spreadedArray  = [...flowers , ...colors];
console.log(spreadedArray);

//flat
const arr3 = [1,[2,3],4,[5,6,[7]]];
const flatArray = arr3.flat(Infinity) //flat resolves array to depth and returns all element in a new array
console.log(flatArray);

//IMPORTANT
console.log(Array.isArray("Aditi"));//tells whether given input is array or not
console.log(Array.from("Aditi"));//returns array
console.log(Array.from({name:"Aditi"}));//for objects define wthere the array should be of key or of values

const s1 =2;
const s2 = 3;
const s3 = 3;

console.log(Array.of(s1,s2,s3));//returns new array of given set of elements
