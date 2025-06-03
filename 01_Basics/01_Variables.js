const accountId = 144553        //can't be changed later
let accountEmail = "raghav@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"

// accountId = 2        nah not possible
accountEmail = "rm@gmail.com"
accountPass = "98765"
accountCity = "Lucknow"

console.log(accountId)
console.table([accountEmail,accountId,accountPass,accountCity])
/*
Const use to declare constant values
var is not used now because it does not know or define any scope of variable and has issue in block scope and functional scope, but 
Let has its scope and so it is only preferred to use now. Var is depreciated.

Variable can also be declared without any let and bar but it is very bad practice

If any variable is declared and not initialized, JavaScript considers it “undefined” type and printing that variable would give ‘undefined’ to you.
*/ 