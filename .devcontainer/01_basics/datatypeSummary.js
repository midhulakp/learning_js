// primitive (call by value)
//7 types: String, Number, Boolean, null, undefined, BigInt, Symbol(make a value unique)


const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //Boolean

const outsideTemp = null// Object

 
let userEmail;

const id = Symbol('123') //symbol
const anotherID = Symbol('123') //symbol


console.log(id === anotherID);

const bigNumber = 3463252358110571093n //BigInt


//Reference Type (non primitive)

//Arrays, Objects, Functions

const fruit = ["apple","banana"] //Object

const fruitObj={
        name : "apple",
        color : "red"
}  //Object


const  myfunction = function(){
    console.log("hello world");
    
}

myfunction(); //Function
