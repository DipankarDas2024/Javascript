//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Non Primitive

// Array, Objects

const score = 100
const scoreValue = 100.3

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const heros = ["Shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Dipankar",
    age: 22,
}


const myFunction = function(){
    console.log("hello")
}
console.log(myFunction())
console.log(myObj)
console.log(heros)

