// const arr = [1,2,3,4,5]

// const doubled = arr.map(double)

// function double(num){
//     return num * 2
// } //[ 2, 4, 6, 8, 10 ]

// const doubled = arr.map((num) => {return num * 2}) //[ 2, 4, 6, 8, 10 ]
// const doubled = arr.map((num) => num * 2) // [ 2, 4, 6, 8, 10 ]
// const doubled = arr.map(num => num * 2) // [ 2, 4, 6, 8, 10 ]
// console.log(doubled)

// const [first, second] = arr;
// const [first, second, ...rest] = arr;
// console.log(first, second) // 1 2
// console.log(rest) //[ 3, 4, 5 ]

// const person = {
//     name: "connor",
//     website: "http://",
// }

// const {name, website, foo = "bar"} = person;
// console.log(person) // { name: 'connor', website: 'http://' }
// console.log(name, website, foo) //connor http:// bar

// function printName({name}) {
//     console.log(name)
// }
// printName(person)

// SPREAD OPERATOR

const arr = [1,2,3,4,5]
const arr1 = [6,7,8,9,10]

function add(x, y){
    // console.log(x +y)
}
// add(arr[0], arr[1]) // 3
// add(...arr) // 3

const combine = [...arr,...arr1]
// console.log(combine) [1,2,3,4,5,6,7,8,9,10]
const combine1 = [0,...arr,4.5,...arr1]
// console.log(combine1)[ 0, 1, 2, 3, 4, 5, 4.5, 6, 7, 8, 9, 10]

// function logParams(x,...rest){
//     console.log(x)
//     console.log(rest)
// }
// logParams([1])
// logParams([2,3,4,5])
  
//TEMPLATE LITERAL

// const name = "connor";
// const defaultName = name ?? defaultName
// console.log("hello " + defaultName) //hello connor
// console.log(`Hello ${name}`) //Hello connor
const person = {
    company : {
        website : "localhost"
    }
}
console.log(person.company.website)

// javascript read from left to right

const person1 = {
    company : {
        // website : "localhost"
    }
}

console.log(person1.company.website) //undefined

const person2 = {
    // company : {
        // website : "localhost"
    // }
}
// console.log(person2.company.website) //error

const person3 = {
    // company : {
    //     website : "localhost"
    // }
}

console.log(person3?.company?.website ?? "foo") //foo

const shouldCodeRun = true;

function test(){
    console.log("hello")
}
shouldCodeRun && test() //hello

// if(shouldCodeRun){
//     test()
// }




