//Basic function syntax 
// --> you can pass anything inside a function either variable array or object 
function myfunc(){
    console.log("You can put any code in this box")
}

myfunc()

//function to add 2 numbers
function add2Nums(num1,num2){
    return num1+num2
}
console.log(add2Nums(2,3))
console.log(add2Nums(2,"3"))
console.log(add2Nums(2,'a'))
console.log(add2Nums(2,null))

/*
So we get two see that if any of the argument is string, then ADDITION works as CONCATENATION
In case of null it took NULL as 0
*/

//you can store that value in a variable
const result = add2Nums(3,4)
console.log(result)

//when nothing is passed, it return either "undefined" or "NaN"
const result2 = add2Nums();
console.log(result2)




/*
This is another way of setting default value to variables if any of them is not passed
If passed --> it works on them
If not passed --> it works on default values
*/

function add2Nums2(num1 = 2, num2 = 3){
    return num1+num2
}

const result3 = add2Nums2();
console.log(result3)




//=====================Very Important====================================

/*
This below shows how REST operator works. We just put '...' before paramter to get them into array even when it is not passed as an array in function call.
You can operate easily on that array.
*/

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,400,500))

function calculateCartPrice2(val1, val2, ...num){
    return [val1,val2,num]
}

console.log(calculateCartPrice2(200,400,500,200))

