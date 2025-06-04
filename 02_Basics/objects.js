/*
There are 2 common ways to declare an object in JavaScript:
1. As a literal:
   const obj = { key: 'value' };

2. Using a constructor (e.g., function or class):
   function MyObject() {
     this.key = 'value';
   }
   const obj = new MyObject();

Singleton - A singleton is a design pattern that ensures only one instance of an object is created.
            - Objects created using literals are often treated like singletons if they are reused directly.
            - Constructor functions or classes can be used to implement singletons, but by default they create new instances each time you use 'new'.
            - To enforce a singleton with a constructor, you must manually implement the logic to return the same instance.
*/


//===================  Object literals  =====================================

/* This comment ends at object constructor heading

const user = {
    //object has lot of key value pairs
    //by default these keys are processed as strings and they can also be made as strings too
    name : "Raghav",
    "email" : "raghav@gmail.com",   //you can't access this one directly by '.' operator and so you have to access by using an array notation 
    branch : "ECE",
    Roll : 43,
    sem : 7,
    course : "BTECH",
    sym : "mKy1"
}

//you can access elements like 
console.log(user.name)
console.log(user["name"])
console.log(user["email"])


// Symbols

//declared a symbol
const sym = Symbol("Ky1")


console.log(user.sym)   //even when i declared a new symbol with same name it prints the value inside the object
console.log(typeof user.sym)    //that key value pair is not even a symbol but is shows it as a string

//so what we added inside an object was not a symbol it was string type key value pair

//to get that as a symbol we put it inside a [] brackets as shown below
const user2 = {
    //object has lot of key value pairs
    //by default these keys are processed as strings and they can also be made as strings too
    name : "Raghav",
    "email" : "raghav@gmail.com",   //you can't access this one directly by '.' operator and so you have to access by using an array notation 
    branch : "ECE",
    Roll : 43,
    sem : 7,
    course : "BTECH",
    [sym] : "mKy1"
}

console.log(typeof user2[sym])  
console.log(user2[sym])

//=================some common infos about object==========================

user["email"] = "rm@gmail.com"
console.log(user)
console.log(user2)

//here we added a function inside an object
user.greeting = function(){
    console.log(`Hi, ${user.name}`)
}

//when we print call that function here it show message and 
//"undefined"
console.log(user.greeting())
console.log(user)


//the better way to get the name of user is by using  "this " keyword. It takes a key of that object only
user.greeting2 = function(){
    console.log(`Hi, ${this.name}`)
}

console.log(user.greeting2())

*/

//============================== Object Constructor ================================

const tinderuser = new Object()
tinderuser.id = 123
tinderuser.name = "Nihal"
tinderuser.isLoggedIn = false
console.log(tinderuser)

const regularUser = {
    email : "user@gmail,com",
    //here an object inside an object
    fullName:{
        firstName : "Raghav",
        MiddleName : "Rudra",
        LastName : "Mishra"
    },
    id : 124,
    age:19
}

console.log(regularUser.fullName.firstName)

//mergin 2 more objects
const newUser = {regularUser,tinderuser}
console.log(newUser)

//the problem that appeared above is that second object got inside a first object

//so we do like the one below

//here {}->target object and remaining are source objects
//data gets accumulated at target object and that is assigned to obj1
//so obj1==={}
//by default the first object acts as a tatget object and remaining act as source objects
const obj1 = Object.assign({},tinderuser, regularUser)
console.log(obj1)



//we can get thje keys and values of any arrays by getting them in arrays
//following are printed as arrays
console.log(Object.keys(obj1))
console.log(Object.values(obj1))


//to check if any object contains some proprty
console.log(tinderuser.hasOwnProperty('isLoggedIn'))