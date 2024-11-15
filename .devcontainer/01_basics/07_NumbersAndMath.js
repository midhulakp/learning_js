const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance, typeof balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));//for precision

const num = 213.8966

console.log(num.toPrecision(3));

const number = 100000
console.log(number.toLocaleString());
console.log(number.toLocaleString('en-IN'));


console.log(Number.MAX_VALUE);



//*****************MATHS**************************/

console.log(Math);
console.log(Math.sqrt(81));
console.log(Math.abs(-4));


console.log(Math.round(6.2341));

console.log(Math.ceil(4.5345));
console.log(Math.floor(4.5677));

console.log(Math.min(4,6,1,2,6,0));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20



console.log(Math.floor(Math.random() *(max-min + 1)) + min);
