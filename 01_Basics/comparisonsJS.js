console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2!=1)
console.log(2==1)

console.log(null>0) // => false
console.log(null==0) // => false
console.log(null>=0) // => true
console.log(null===0) // => false , === is for strict checking

//strict checking is something where datatypes are also checked as "5"==5 is true but "5"===5 is false

//all beolw falses
console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined===0)

//Somemore about arrays, objects and funtions

const heroes = ["ShaktiMan","Nagraj","Doga"]    //typeof is object 
let myobject = {    //typeof is object 
    name : "Raghav",
    RollNo : 43
}

const myFunc = function(){    //typeof is function but it is known as 'function object'
    console.log("Hello! I am func.")
}
myFunc();

console.table([typeof(heroes),typeof(myobject),typeof(myFunc)])

