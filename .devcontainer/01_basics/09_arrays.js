//Arrays

const myArr = [0,1,2,3,4,5] //heterogenious,resizeable,zero based indexing,shallow copying

console.log(myArr[0]);


const fruits = ["apple","banana"]

const fruits2 = new Array("apple", "banana");

console.log(fruits);

console.log(fruits2);

console.log(myArr[1]);

//Array Methods

myArr.push(6) //add the value at end
console.log(myArr);

myArr.push(7) 
console.log(myArr);

myArr.pop() //delete the value from end
console.log(myArr);


myArr.unshift(9) // add value at the start
console.log(myArr);


myArr.shift() // remove value from shift
console.log(myArr);


console.log(myArr.includes(6));

console.log(myArr.indexOf(6));

const newArr = myArr.join() // array to string
console.log(myArr);
console.log(newArr);

//slice , splice


console.log("A ",myArr);

const myArr1 = myArr.slice(1,3)

console.log(myArr1);

console.log("B ",myArr);

const myArr2= myArr.splice(1,3)
console.log("c ",myArr);
console.log(myArr2);




let arr1 = [1,2,3,4,5,6]
let arr2 = [5,6,3,7,8,9,10]

arr1.push(arr2);
console.log(arr1);


const all = arr1.concat(arr2)
console.log(all);

const allarr = [...arr1,...arr2] //spread operator
console.log(allarr);


const arr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realArr3 = arr3.flat(Infinity)

console.log(realArr3);





console.log(Array.isArray("midhula"));
console.log(Array.from("midhula"));
console.log(Array.from({name:"midhula"})); //interesting

let score1 = 100
let score2= 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
