const a = [1,2,3,4,5,6]

const values = a.forEach((num)=>{
    console.log(num)
})

console.log(values)

//this values = undefined, means nothing is returned by forEach 
//Neither it returns using 'return' keyword
//so never try to return from forEach its useless
//but you can do this using another     "filter"    method and return keyword in it, as below

//example 1

const values2 = a.filter((num)=>{
    return num>4
})

console.log(values2)

//example 2

const values3 = a.filter((num)=>{
    return num%2
})

console.log(values3)
//example with forEach
const newa = []
a.forEach((num)=>{
    if(num%2){
        newa.push(num)
    }
})

console.log(newa)

//Map in array

//If you do return num > 4 inside map(), it won't filter the array — instead, it will return a new array of boolean values (true or false) based on whether each element is greater than 4.

const newA = a.map((num)=>{
    return num*4
})

console.log(newA)

const values4 = a.map((num)=>{
    return num>4
})

console.log(values4)

/*
The map() and filter() methods in JavaScript are both used to process arrays, but they serve different purposes. The map() method transforms every element in an array and returns a new array of the same length, where each element is the result of the transformation function. It is commonly used when you want to modify or reshape the elements without removing any. On the other hand, filter() is used to select a subset of the original array based on a condition. It returns a new array containing only those elements for which the provided function returns true, potentially reducing the size of the array. While map() is about transforming elements, filter() is about selecting elements. Using map() for conditions like return num > 4 results in an array of booleans, whereas filter() with the same condition returns an array of numbers that actually satisfy that condition.
*/


