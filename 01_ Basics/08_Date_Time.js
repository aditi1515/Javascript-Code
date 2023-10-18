const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(typeof date); //object

let newDate = new Date(2003 , 0 , 15);
console.log(newDate.toString());

let myDate = new Date(223,15,2,4,5)
console.log(myDate.toString());
console.log(myDate.toLocaleString());


let timeSTamp = Date.now();
console.log(timeSTamp); //milliseconds


//localeString is very useful
newDate.toLocaleString('default',{

    weekday:'long',
    
})
