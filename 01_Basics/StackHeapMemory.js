let myName = "Raghav"
let anotherName = myName
anotherName = "Shikhar"

console.log(myName)
console.log(anotherName)

/*Here we can see that when another Name is changed it got another name without putting new value in myName. This is because anotherName has created a copy with a value but did not take a reference of my name thats why only copy is changed and original value remains same

Both these variables are placed in stack and initialzed there not in heap*/

let user1 = {           
    name : "Raghav",
    email: "rm@gmail.com"
}
/*user 1 is placed in stack and that object vala {} part is in heap and that stcack variable points to that in heap */ 
let user2 = user1;
user2.email = "r@gmail.com"

console.log(user1.email)
console.log(user2.email)

/* Both these lines printed "r@gmail.com". this is beacuse that user2 also points to same {} vala part which is placed in heap. when user2 points and created a change in its email, the change actually occured in heap and so got reflected in user1 also even when no change was done there*/
