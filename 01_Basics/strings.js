const name = "Raghav";
const count = 50;

// Not the best way to concatenate strings
console.log(name + " Value = " + count);

// Recommended way using template literals aka backticks
console.log(`Hey! my name is ${name} and my health count on BGMI is ${count}`);

// Initializing a string as an object (not commonly needed in most cases)
const anotherName = new String("Shikhar");

// Still using the original 'name' and 'count' variables here
console.log(`Hey! my name is ${anotherName} and my health count on BGMI is ${count}`);

//you have some methods to do required task. example
//its good to go on chrom and view methods directlyfrom there and view also visit mdn docs
console.log(anotherName.length)
console.log(anotherName.toUpperCase())
console.log(anotherName.charAt(2))
console.log(anotherName.indexOf('k'))

let newStr = anotherName.substring(0,4)   //gives string from 0 to 3 i.e., 4(excluded)
console.log(newStr)

newStr = anotherName.slice(0,4) 
console.log(newStr)
//but slice can also take negative values representing reverse
newStr = anotherName.slice(0,-2) 
console.log(newStr)

//there s a method that is used to remove unwanted spaces - object.trim(), object.trimStart(), object.trimEnd()

const url = "https://newsiteName.com/Raghav%20Mishra"
//browser itself adds %20 for spaces so if you need to remove it, you can do as following
console.log(url.replace("%20","_"))
console.log(url.includes('Raghav'))


//method for some splitting based on a any type of character or part 
console.log(url.split('/'))
