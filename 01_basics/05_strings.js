const name = "Dipankar"
const repoCount = 50

// console.log(name + repoCount + " Hello World")


// console.log(`Hi my name is ${name} and my repo number is ${repoCount} `)

const gameName = new String('Dipankar')
// console.log(gameName[3])

// console.log(gameName.__proto__)


// console.log(gameName.charAt(5))


// console.log(gameName.indexOf('k'))


const newString = gameName.substring(0, 5)

console.log(newString)

const anotherString = gameName.slice(0, 2)

console.log(anotherString)

const newStringOne = "        Hitesh        "

console.log(newStringOne.trim())

const newName = "Dipankar---Das"

console.log(newName.replace("---", " "))


console.log(newName.includes('Daas'))


console.log(newName.split("-"))
