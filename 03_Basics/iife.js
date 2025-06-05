//Immediately Invoked Function Expressions (IIFE)
/*
An IIFE, or Immediately Invoked Function Expression, is a function in JavaScript that is defined and executed immediately after it's created. One common use case is to avoid polluting the global scope, especially when writing modular code or when we want to initialize something once.
*/

//syntax 1
(function chai(){
    console.log("DB CONNECTED!");
})();       //it always strictly ends with ";" to stop its execution

//syntax 2
(() => {
    console.log("DB CONNECTED!");
})();

//IIFE with parameter
((name)=>{
    console.log(`My name is ${name}`)
})("Raghav");



