//this keyword refers current context

const user = {
    username : "Raghav",
    age : 19,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website!`)
    }
}

user.welcomeMessage()

/*
when v8 engine runs in browser, this always points to global object which was window object in a browser.
but in node standalone there is no global object or specifically this global object is empty
*/

function f(){
    let username = "Raghav"
    console.log(this.username)
}

//below this one gave me undefined . So uyes you can't get this for a function it only works in object

f()

//Arrow function also does not work with this

const f2 = ()=>{
    let username = "Raghav"
    console.log(this.username)
}
f2()

//========================Arrow Function====================

const add2 = (num1,num2)=>{
    return num1+num2
}

console.log(add2(2,3))

//belwo is a implicit return function
//it by default returns a single line computation

const add = (num1,num2) => num1+num2

//Int this way you can also return object 
const user2 = () => ({username: "Raghav"})
console.log(user2())





/////////////////////////////////////////////////////////////////////////////////////////////////////
const myArr = [2,3,4,5]
myArr.forEach((num,idx)=>{
    console.log(num+idx)
})

const value = myArr.reduce((acc, num) => acc + num, 0);
console.log(value);



