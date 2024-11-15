let score = "33"

console.log(typeof score); //string
console.log(typeof (score)); //string

let valueInNumber = Number(score)
console.log(typeof (valueInNumber)); //number


let value = "33abc"
let valueNumber = Number(value)
console.log(typeof (valueNumber)); //number
console.log(valueNumber); //nan


let value1 = null
let valueNumber1 = Number(value1)
console.log(typeof (valueNumber1)); // number
console.log(valueNumber1); //0


let value2 = undefined
let valueNumber2 = Number(value2)
console.log(typeof (valueNumber2)); //number
console.log(valueNumber2); //nan


let value3 = true
let valueNumber3 = Number(value3)
console.log(typeof (valueNumber3)); //number
console.log(valueNumber3); //1


//"33" => 33
//"33aaa" => NaN
//true => 1
//false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof (booleanIsLoggedIn)); //boolean
console.log(booleanIsLoggedIn); //true


// 1 => true
//0 => false
// "" => false
//"value" => true





let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof (stringNumber)); //String
console.log(stringNumber); //"33"