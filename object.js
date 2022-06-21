//Object

const web = {
    name: "madhab",
    rollNo: "1989",
    friends : ["mukul, vishlesh"],
}

// console.log(web["name"])
// console.log(web.name)
// web.name = "madhu"; // change the value of key in object
// web.foo = "bar"; // add key-value pair in the object

// const name = "connor";
// const obj = {
//     // name : name
//     name,
// }
// console.log(obj) //{ name: 'connor' }

// const obj = new Object()
// obj.name = "connor";
// console.log(obj) // { name: 'connor' }


// function Website (name, rollNo, friends){
//     this.name = name;
//     this.rollNo = rollNo;
//     this.friends = friends;
// }
// const front = new Website("madhu", 5, ["kalapana"]);
// console.log(front); //Website { name: 'madhu', rollNo: 5, friends: [ 'kalapana' ] }

// const id = Symbol("id")
// const obj = {
//     [id] :123,
// }
// console.log(obj) //{ [Symbol(id)]: 123 }

// console.log('name'in web) //true
// console.log(web.hasOwnProperty('name')) //true

// const obj = {
//     sayHello(){
//         console.log("hello")

//     },
//     get getRating(){
//         return this.rollNo
//     },
//     set setRating(value){
//         this.rollNo = value
//     }
// }

// obj.sayHello()
// obj.setRating = 6; 
// console.log(obj.getRating)

const obj = {
    foo : 'bar',
    [Symbol('id')] : 0,
    __Proto__ : web
}
// console.log(obj) //
// {
//     foo: 'bar',
//     __Proto__: { name: 'madhab', rollNo: '1989', friends: [ 'mukul, vishlesh' ] }
//   }
// console.log(Object.keys(obj)) //[ 'foo', '__Proto__' ]
// console.log(Object.values(obj))
// [
//     'bar',
//     { name: 'madhab', rollNo: '1989', friends: [ 'mukul, vishlesh' ] }
// ]
// Object.entries(obj).forEach(function([key ,value]){
//     console.log(key, value)
// })
//foo bar
//__Proto__ { name: 'madhab', rollNo: '1989', friends: [ 'mukul, vishlesh' ] }
// for(key in obj){
//     console.log(key)
// }
// foo
// __Proto__
// { name: 'madhab', rollNo: '1989', friends: [ 'mukul, vishlesh' ] }


// const myObj = {
//     original : 123
// }

// Object.assign(myObj, obj)
// console.log(myObj)
// {
//     original: 123,
//     foo: 'bar',
//     __Proto__: { name: 'madhab', rollNo: '1989', friends: [ 'mukul, vishlesh' ] },
//     [Symbol(id)]: 0
//   }

console.log(web.toString()) //[object Object]


console.log(web)