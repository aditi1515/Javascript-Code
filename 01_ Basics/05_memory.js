// Stack memory - call by value

let num1 = 5;
let num2 = num1;

num2 = 6;

console.log(num1);
console.log(num2);

//heap memory - > call by reference

let user = {

    email: "123@.com"
}

let user2 = user;

user2.email = "hello@g,mail.com";

console.log(user.email);
console.log(user2.email);