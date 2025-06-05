/*
let -> works in local scope 
var -> works in global scope and therefore can be changed unknowingly even outside its scope
Thats why var was depreciated
const -> works in local scope for constant value to prevent any change later
*/

let a = 300
var b = 60
if(true){
    let a = 30
    var b = 60
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)

/*
Above let pefectly handled scope of variable and can be declare same variable in different scope
but var got changed
*/

