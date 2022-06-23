console.log(5=="5") // loose equality - only value
console.log(5===5) //strict equality - only value and types

console.log(Number(false)) // 0 
console.log(Number(true)) // 1

console.log(Boolean(10)) //true
console.log(String(0)) // 0 = false

console.log(Number("abc")) // NaN

console.log(Null == Null) // error

console.log({} == {}) // false
console.log([] == []) // false

// Use triple equality 99% of the cases
// Use double equality only for null and undefined
 

