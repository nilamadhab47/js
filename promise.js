//promise -> contains a value for asynchronous operation
//state -> pending state, fulfilled , rejected

// const promise = new Promise((resolve, reject)=> {
//     // resolve(2);
//     reject(2); //error
// })
// const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=> reject(3), 1000)s
// })

// const promise = Promise.resolve(3)
// console.log(promise) // Promise { 2 }

// setTimeout(() => {
//     console.log(promise)
    
// }, 1000);

// promise.then(value=> console.log(value))
// promise.then(value=> console.log(value)).catch(error => console.log("something happened "+ error))

// promise.then(value => value * 2 ).then(value=> value +1).then(console.log).catch(error => console.log("something happened "+ error)).finally(console.log("done"))

// const promise = Promise.all([Promise.resolve(3)]).then(console.log)
// const promise1 = Promise.any([Promise.resolve(3)]).then(console.log)

// function tester (){
//     return 3;
// }
// console.log(3)
async function tester (){
    try {
        const value = await new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(5);
            }, 1000);
        })
        
    } catch (error) {
        console.error(error)
    }
    
}
console.log(tester)