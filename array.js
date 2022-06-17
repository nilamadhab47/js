//ARRAY

const arr = [1,2,3,4,5];
// // const arr = new Array(1,2)
// // const arr = new Array()
// // const arr = new Array(5).fill(0);

// console.log(arr.length);

// arr[1] = 10; //changing the element at index 2 from 2 to 10
// console.log(arr[1]); // getting the element from the array

// console.log(arr.includes(3)) // true
// console.log(arr.includes(9)) // false

// console.log(arr.indexOf(4)) // 3
// console.log(arr.lastIndexOf(4)) // 3

// console.log(arr.push(6,7,8)); // [1,2,3,4,5,6] add to 6 to the last
// console.log(arr.pop()); // [1,2,3,4,5,6] remove last element i.e 8
// console.log(arr.pop()); // [1,2,3,4,5,6] remove last element i.e 7
// console.log(arr.pop()); // [1,2,3,4,5,6] remove last element i.e 6

// console.log(arr.unshift(6,7,8)); // [6,7,8,1,2,3,4,5] Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(arr.shift()); // [1,2,3,] Removes the first element from an array and returns it

// console.log(typeof arr) // object
// console.log(Array.isArray) [Function: isArray]

// console.log(arr.splice(1, 2)) [ 2, 3 ] Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(arr.splice(1, 2 , 'hello')) [ 1, 'hello', 4, 5 ]
// console.log(arr.slice(1,3)) [ 2, 3 ] Array<number>.slice(start?: number | undefined, end?: number |

// const Arr = arr.concat(["hello", "world"]) [ 1, 2, 3, 4, 5, 'hello', 'world' ] Combines two or more arrays. This method returns a new array without modifying any existing arrays. 
// console.log(arr.reverse()) reverses the elements in an array in place.
// console.log(arr.join(" ,  ")) 1 ,  2 ,  3 ,  4 ,  5 Adds all the elements of an array into a string, separated by the specified separator string.

//printing an array with

// 1. for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// 2.  let i = 0;
// for(const value of arr){
//     console.log(value)
//     i++;
// }

// 3. arr.forEach(function(value){
//     console.log(value)
// })


// forEach - Performs the specified action for each element in an array.

// arr.forEach(function(value, index){
//     console.log(value , index)
// })
// output- 
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

// arr.forEach(function(value, index){
//     console.log(value , index, this)
// },{num:10})
// 1 0 { num: 10 }
// 2 1 { num: 10 }
// 3 2 { num: 10 }
// 4 3 { num: 10 }
// 5 4 { num: 10 }

// arr.forEach(function(value, index){
//     console.log(value + index + this.num)
// }, {num:10});
// 11
// 13
// 15
// 17
// 19


// filter - Returns the elements of an array that meet the condition specified in a callback function.
// const Arr = arr.filter(function(value){
//     return value > 3;
// })[ 4, 5 ]

// .find() - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// const Arr = arr.find(function(value){
//     return value > this.num
// },{num:1}) // ans=2


// every - Determines whether all the members of an array satisfy the specified test.
// arr.every(function(value){
//     console.log (value > 1)
// }) //false, not every member is greater than 1. 

//some- Determines whether the specified callback function returns true for any element of an array.
// arr.some(function(value){
//     console.log (value > 1)
// }) //true

// sum of elements of an array
// const num = arr.reduce(function(accumulator, currValue) {
//     return accumulator - currValue;
// });
// console.log(num)

//sort()
// const arr1 = [5, 3, 10, 12, 2 , 18 , 1]
// arr1.sort(compare);
// function compare(a, b) {
//     return a - b
// }
// console.log(arr1)
