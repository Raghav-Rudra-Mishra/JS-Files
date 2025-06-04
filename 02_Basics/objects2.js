//destructuring the array

const numbers = [10, 20, 30];

// Destructuring
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

//we can also skip elements as follows
const [first, , third] = numbers;
console.log(first); // 10
console.log(third); // 30

//or we can also use default values
const [x = 1, y = 2, z = 3] = [100];
console.log(x, y, z); // 100 2 3



//destructring of object

const course = {
    courseName : "JS",
    price : 999,
    instructor : "Hitesh"
}

//following is the basic syntax for destructuring
//const {name of property : short name you like to give it for convenience} = object
const {instructor : inst} = course

console.log(inst)



//concept of APIs - Application Programming Interface
/*
earlier values were recieved in XML structure which was complex. Now it is fetched in JSON format; converted to objects later for handling with data
*/