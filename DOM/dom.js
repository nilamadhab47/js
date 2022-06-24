// DOM Manipulation
// document - object to interact with element
const second = document.getElementById("second-li");
console.log(second);

const firstLi = document.querySelector("li"); // Returns the first element that is a descendant of node that matches selectors.
console.log(firstLi);

const listItems = document.querySelectorAll("li"); // Returns all li items
console.log(listItems);
console.log(listItems.length);

listItems.forEach(li =>{
    console.log(li);
})
// listItems.map(li =>{
//     console.log(li);
// }) // error
Array.from(listItems).map(li =>{
    console.log(li);
}) // works
// console.log(getElementByClassName(""))

listItems[0].style.color = "red"
listItems[0].style.backgroundColor = "blue"
listItems[0].textContent = "Changed"
// listItems[0].value = 5;
listItems[0].setAttribute("value", "8")
// listItems[0].setAttribute("class", "blue big")
// listItems[1].classList.add("blue")
// listItems[1].classList.toggle("blue")
// listItems[1].className = "blue big"

// const p = document.createElement("p");
// const text = document.createTextNode("hello")
// // p.textContent = "hello world"
// // document.body.appendChild(p)
// p.append(text)
// document.body.prepend(p);

console.log(listItems[0].innerHTML)
console.log(document.querySelector("ol").innerHTML)

const parent = document.querySelector("ol")
const listItemsToAdd = []

for (let i = 0; i < 3; i++) {
    
    const li = document.createElement("li")
    li.textContent = `list items with i =${i}`
    listItemsToAdd.push(li)
    
}
parent.append(...listItemsToAdd)

listItems[0].remove()

console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(window.getComputedStyle(listItems[0]).fontSize)

const scrollable = document.getElementById("scrollable")

console.log(scrollable.clientHeight)
console.log(scrollable.offsetHeight)
console.log(scrollable.offsetTop) //distance from the top

console.log(scrollable.querySelectorAll("p")[5].offsetTop)





