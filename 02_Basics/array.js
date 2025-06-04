//======================================Basics of Arrays=========================================

/*
Array is an object where multiple items are laced inside single variable
JS arrays are resizable and can contain mix of datatypes
Elements can only be accessed directly using indexing.

Copy operations inside an array always create "shallow copies"
A shallow copy of an object is a copy whose properties share the same reference point as those of the source object from which the copy was made, means any change done also reflects in original array.

Similarly, in deep copy properties do not share the same reference.
*/
const arr = [9,8,7,6,5,4,3,2,1,0, true, "Raghav"]

//another way of declaring an array
const myarr = new Array(9,8,7,6,5,4,3,2,1,0)        //same as previous one - arr


//==============================Array Methods===========================
// 1. push - adds the element at the last
myarr.push(-1)  
console.log(myarr)

// 2. pop - removes the last element of the array
myarr.pop()
console.log(myarr)

// 3. unshift - adds element at the first index of the array. This causes it to be a time consuming operations as all elements need to shift one position ahead
myarr.unshift(10)
console.log(myarr)

// 4. shift - removes element from the first index of the array. This causes it to be a time consuming operations as all elements need to shift one position back
myarr.shift()
console.log(myarr)

// 5. includes(num) - checks whether this element num is in array or not
console.log(myarr.includes(9))

//Simialrly other methods
console.log(myarr.indexOf(9))
console.log(myarr.indexOf(10))

//gives a string by joining elements using any special character you gave i
const newArr = myarr.join(' > ')  
console.log(newArr)
console.log(typeof newArr)

/*
slice - return a copy of a section of an array in [start, end), does not modify the original array.
splice - change the contents of an array by removing, replacing, or adding elements in place.
         Syntax: array.splice(start, deleteCount, item1, item2, ...)
         - start: index at which to start changing the array
         - deleteCount: number of elements to remove
         - item1, item2, ...: elements to add (optional)
         Returns: an array containing the deleted elements
         Modifies the original array
*/

console.log('a', myarr)

const myn1 = myarr.slice(1,3)
console.log(myn1)
console.log('b', myarr)


const myn2 = myarr.splice(1,3)
console.log(myn2)
console.log('c', myarr)


//=======playing more with arrays==============================


let a1 = [1,2,3]
let a2 = [4,5,6]

//here a2 gets added as an elements in a1
a1.push(a2)
console.log(a1)

a1.pop()

//to merge to arrays
//method 1 - here concat doesnot changes a1 or a2 but creates a new copy of fnal array
let newarr1 = a1.concat(a2)
console.log(newarr1)

//Method 2 - it also creates new array copy and does not change sthe original one
//it is called "spreading" - very useful
let newarr2 = [...a1,...a2]
console.log(newarr2)

//to handle such bad arrrays 
const badArr = [1,2,3,[4,5,6],7,[[8,9],10]]
console.log(badArr)

//we use flat
/*
Infinity is not a good practice to put, ideally one should give exact depth of flatting
*/
const goodarr = badArr.flat(Infinity)
console.log(goodarr)

//==========================Something more===========================

// Is this an array
console.log(    Array.isArray("Raghav")     )

//make an array out of its elements
console.log(    Array.from("Raghav")     )

//very interesting case
console.log(    Array.from({name: "Raghav"})     )

/* Here, it rrturns an empty array because it can't make array directly from an object like that. you have to explicitly tell whether key arrays or values arrays */



let s1 = 100, s2 = 200, s3 = 300
//making array directly from some random variables
console.log(Array.of(s1,s2,s3))