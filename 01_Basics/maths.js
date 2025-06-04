//==========================Number==========================================

const score = 200
const balance = new Number(1e6)
//the below one specifically casts that it is a number
console.log(balance)    
console.log(score + " " + balance)

let newStr = balance.toString()     //here it became string as a copy not by reference 
console.log(newStr)
console.log(newStr.length)
console.log(typeof newStr)
console.log(balance.toFixed(3))     //to fixed provides that much decimals after point providing precision

const float = 123.8966
// toPrecision(n) formats the number to n significant digits
console.log(float.toPrecision(3))

console.log(balance.toLocaleString())   //this adds ,  according to thousands, millions, billions, trillions, etc.
//If you want it to be in lacs crores etc for indian purposes, do following - 
console.log(balance.toLocaleString('en-IN'))  //as per indian standard

//========================Maths==================================

//Maths by default is an object with some properties of itself
console.log(Math)
/*
Some very regualrly used methods or properties are 
abs - for absolute
round - for rounding to closest integer
ceil - for upper rounding
floor - for lower rounding
sqrt - for squre root
pow - for power
sin tan cos sinh cosh tanh
*/

console.log(Math.min(4,3,5,67))     //gives minimum value of all
console.log(Math.max(4,3,5,67))     //gives maximum value of all

let value = Math.random()
//this provides any random value between 0 to 1

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1)) + 10)) 
//this above one woul always be between 10 and 20 by god
//it could be used to fix a range of random number from minimum to maximum value very precisely an integer
