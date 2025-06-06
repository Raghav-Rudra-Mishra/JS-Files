//for, while and do while are three basic loops we know

//below are the uncommon array specific loops:


//===============================================================================================


//  1) For of 
//here this object can be "object", "string", "array" or anything else because everything is object here

const arr = [1,2,3,4,5]
for(const itr of arr){
    console.log(itr*2)
}

//Map object holds key value pairs and remembers the original insertionorder of the keys. Any value may be either used as key or value. A key in the map can only occur once.
const map = new Map()
map.set('State', "Uttar Pradesh")
map.set('country', "IN")
console.log(map)
console.log(typeof map) //=> object


//below it prints the whole key value pair as an array
for(const ele of map){
    console.log(ele)
}

//below is destructuring
for(const [key,value] of map){
    console.log(key, ":", value)
}

// but objects as {} are not iteratable using for of loop

//=======================================================================================================

//2) FOR - IN LOOP

const obj = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

//Below key provide only key of key value pair in object

for(const key in obj){
    console.log(key, " : ", obj[key])
}

//It also works for array but for below syntax it provides keys for object 

const brr = [1,2,3,4,5]

//so here it also provides keys obj array
for(const itr in brr){
    console.log(itr, ":", brr[itr])
}


//Therefore we can say that for of loop fetches element but forin loop points to key of an object
//for for -in loop, maps are not interatable

//=================================================================================================

//3) for Each loop

const crr = [1,2,3,4,5,6]

crr.forEach((ele)=>{
    //here you can do anything
    console.log(ele)
})

// or you can do this

function print(item){
    console.log(item)
}
crr.forEach(print)

//In reality for each has 3 basic paramters as follows

crr.forEach((item,index,crr)=>{
    console.log(item,index,crr)
})

//      example


const profile = [
    {
        platform : "Leetcode",
        Rating : 1744
    },
    {
        platform : "CodeChef",
        Rating : 1391
    },
    {
        platform : "Codeforces",
        Rating : 1150
    }
]

//usecase1

profile.forEach((item)=>{
    for(const key in item){
        console.log(key, " : ", item[key])
    }
})

//usecase2

profile.forEach((item)=>{
    console.log(item.platform, " : ", item.Rating)
})





