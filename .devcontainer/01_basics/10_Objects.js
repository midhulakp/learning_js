//singleton
//Object.create


//object literals

let mysym = Symbol("key1")

const jsUser ={
    name:"midhula",
    "fullname":"midhula K P",
    [mysym] : "mykey1",
    age:23,
    loc:"kerala",
    email: "midhula@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

console.log(jsUser.email);

console.log(jsUser["email"]);

// console.log(jsUser."fullname");   error
console.log(jsUser["fullname"]); 

console.log(jsUser[mysym]); 


jsUser.email = "kpmidhula@gmail.com"

// Object.freeze(jsUser);
// jsUser.email = "kpmidhula7@gmail.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js User");
    
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());


jsUser.greetingOne = function(){
    console.log(`hello js User, ${this.name}`);
    
}
console.log(jsUser.greetingOne());




const regularUser = {
    email :"some@gmail.com",
    fullname:{
        userFullName :{
            firstName : "midhula",
            lastName : "k P"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);


const object1 ={
    1:"a",
    2:"b"
}

const object2 = {
    3:"a",
    4:"b"
}


// const object3 = { object1, object2 }


const object3 = Object.assign(object1,object2)
console.log(object3);


const object4 = Object.assign({},object1,object2)  //{} => target ,  object1 & object2 are source
console.log(object4);


const object5 = {...object1, ...object2}
console.log(object5);



const User =[
    {
        id : 1,
        email : "mid@gmail.com"
    },
    {
        id : 2,
        email : "midhula@gamil.com"
    },
    {
        id : 1,
        email : "mid@gmail.com"
    },
    {
        id : 2,
        email : "midhula@gamil.com"
    },
    {
        id : 1,
        email : "mid@gmail.com"
    },
    {
        id : 2,
        email : "midhula@gamil.com"
    },
    
]

console.log(User[1].email);





// const tinderUser = new Object()
const tinderUser = {}
    tinderUser.id = "1223abc"
    tinderUser.name = "midhula"
    tinderUser.isLoggedIn = false

// console.log(tinderUser);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
    courseName :"hindi",
    price : 999,
    courseInstructor : "hitesh"
}

// course.courseInstructor


const {courseInstructor} = course
console.log(courseInstructor);


const {courseName : name} = course
console.log(name);


