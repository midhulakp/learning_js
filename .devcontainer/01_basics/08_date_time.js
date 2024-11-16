//Dates

let mydate = new Date()
console.log(mydate);

console.log(mydate.toString()); //Sat Nov 16 2024 13:07:04 GMT+0000 (Coordinated Universal Time)

console.log(mydate.toDateString());// sat nov 16 2024

console.log(mydate.toISOString()); //2024-11-16T13:07:04.589Z

console.log(mydate.toLocaleDateString()); // 11/16/2024

console.log(mydate.toLocaleString()); //11/16/2024 , 1:08:53 pm

console.log(mydate.toLocaleTimeString()); //1:08:53 pm

console.log(mydate.toTimeString()); //13:08:53 GMT+0000 (Coordinated Universal Time)


console.log(typeof mydate); //obj


let myCreatedDate = new Date(2023,0,23)  //month start from 0 in js

console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024,6,23,5,3) 

console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2024-07-2024") //invalid date

console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2024") 

console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()

console.log(newDate.getMonth());

console.log(newDate.getDate());


console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "long", //saturday
})); 