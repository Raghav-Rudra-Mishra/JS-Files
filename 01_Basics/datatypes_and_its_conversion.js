/*
Wrting  “use strict” initially in the js code file does following-
	Every code following it is treated as per new version of javascript
Alert() can not be directly used inside nodejs as it causes problem and can only be accepted in browser in this form
JavaScript primitive data types are string, number, big Int, boolean, symbol, undefined, null
- the type of NULL is OBJECT
- the type of UNDEFINED is UNDEFINED

Object are the mutable datatypes
Array is indexed datatype
*/

let score = "33abc"
console.log(typeof(score))
let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)      //gives NaN which show that a given value is not a number 

/*

//converting all to numbers

"33"=> 33
"33abc" = NaN
true => 1
undefined => 0
*/