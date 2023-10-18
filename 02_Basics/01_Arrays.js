
const arr = [1,2,3,4,5];
console.log(arr);

const arr2 = new Array(1 ,2 ,3 ,4, 5)
console.log(arr2);

//Array Methods
arr.push(6)//adds element at last
arr.push(7)
arr.pop();//removes element from last

arr2.unshift(9); //unshift shifts elements of array to add the given element at first position
console.log(arr2);
arr2.shift(); //shifts element left
console.log(arr2);

console.log(arr2.includes(2));
console.log(arr2.indexOf(2));

const newArr = arr2.join() // return string of array;
console.log(newArr);


//Slice and Splice

const A = [1,2,3,4,5];

const B = A.slice(1,3); //slice does not change the original array


console.log("b" ,B);
console.log("a" ,A);

const C = [1,2,3,4,5];

const D = C.splice(1,3); //splice  changes the original array


console.log("d" ,D);
console.log("c" ,C);