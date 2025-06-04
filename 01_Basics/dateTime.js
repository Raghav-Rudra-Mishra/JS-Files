/*
Date OBJECT in javascript represents a single moment at any platform. This moment is defined from 1970, January 1st. 
*/

let myDate = new Date()
console.log(typeof myDate)      //object

//this below one is not readable
//2025-06-04T10:34:43.921Z
console.log(myDate)    

//better to convert it to a string; improves readability
//Wed Jun 04 2025 10:34:43 GMT+0000
console.log(myDate.toString())

//Wed Jun 04 2025
console.log(myDate.toDateString())

//2025-06-04T10:37:29.418Z
console.log(myDate.toISOString())

//2025-06-04T10:37:29.418Z
console.log(myDate.toJSON())

//6/4/2025
console.log(myDate.toLocaleDateString())

//6/4/2025, 10:37:29 AM
console.log(myDate.toLocaleString())

//10:37:29 AM
console.log(myDate.toLocaleTimeString())

//10:37:29 GMT+0000
console.log(myDate.toTimeString())

//Wed, 04 Jun 2025 10:37:29 GMT
console.log(myDate.toUTCString())

//this below one prints just '0'
console.log(myDate.getTimezoneOffset())

console.log("\n Here below we got some 'get' outputs:\n")
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getFullYear())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getMonth())  //provides month-1 value just like an array index
console.log(myDate.getSeconds())
console.log(myDate.getTime())
console.log("\n")

let newDate = new Date(2023, 0 , 23)        // (year, month-1, Date), yes months are like array indexes
//more values can add to hour, minutes, seconds and PM/AM

console.log(newDate)
console.log(newDate.toLocaleDateString())

let moreDate = new Date("2023-01-14")   // here month is 1 only
console.log(moreDate)

//===========================TimeStamps==================================
let  timeStamp = Date.now()     
console.log(timeStamp)      // provided 1749033943261