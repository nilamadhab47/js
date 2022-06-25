// Event Driven Programming - JavaScript runs in response to Users action

const button = document.querySelector('button');

// button.addEventListener("click", onClick);
// button.addEventListener("click", onClick, {
//     capture: true,
//     once: true,
//     passive: true,
// });

// document.body.addEventListener("click", onClick);

// button.removeEventListener("click", onClick)

// button.addEventListener("dblclick", onClick);
// button.addEventListener("mousedown", onClick);

// window.addEventListener("keydown", event =>{
//     console.log(event.code)
// })

function onClick(event) {
    // event.stopPropagation(); // this won't work on body
    // event.preventDefault();
    // console.log("clicked me")
    // console.log(event) //PointerEvent
    console.log(event.target)
    // console.log(event.forget)
    // console.log(this)

}

//event Propogation - capturing target bubbling

const scrollable = document.getElementById("scrollable")

// scrollable.addEventListener("scroll", event=>{
//     console.log(event.target.scrollTop)
// })
// scrollable.addEventListener("mouseenter", event=>{
//     console.log(event.pageX, event.pageY)
// })
scrollable.addEventListener("drop", event=>{
    scrollable.prepend(button)
})
scrollable.addEventListener("dragover", event=>{
    event.preventDefault()
})
scrollable.addEventListener("click", event=>{
    if(event.target !== this){
        event.target.textContent = "clicked"
    }
})

button.addEventListener("dragstart", event=>{
    console.log(event)
})
