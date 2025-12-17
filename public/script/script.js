let main = document.querySelector("main")
let navs = document.querySelectorAll("li")





let overviewBtn = document.querySelector(".overviewBtn");
let internalStructureBtn = document.querySelector(".internalStructureBtn");
let surfaceGeologyBtn = document.querySelector(".surfaceGeologyBtn");
let pin = document.querySelector(".pin")

let change = document.querySelector(".change")
let img = document.querySelector('.planetDet > :first-child > img')
let message = document.querySelector(".message > p");
overviewBtn.classList.add("highlight")

overviewBtn.addEventListener("click", function() {
    overviewBtn.classList.add("highlight")
    internalStructureBtn.classList.remove("highlight")
    surfaceGeologyBtn.classList.remove("highlight")
    img.src = overviewBtn.dataset.url
    message.textContent = overviewBtn.dataset.description;
    overviewBtn.style.backgroundColor = change.dataset.color;
});

internalStructureBtn.addEventListener("click", function() {
    internalStructureBtn.classList.add("highlight")
    overviewBtn.classList.remove("highlight")
    surfaceGeologyBtn.classList.remove("highlight")
    img.src = internalStructureBtn.dataset.url
    message.textContent = internalStructureBtn.dataset.description;
    
})

surfaceGeologyBtn.addEventListener("click", function() {
    surfaceGeologyBtn.classList.add("highlight")
    overviewBtn.classList.remove("highlight")
    internalStructureBtn.classList.remove("highlight")
    img.src = overviewBtn.dataset.url
    message.textContent = surfaceGeologyBtn.dataset.description;
    pin.src = surfaceGeologyBtn.dataset.url;

})

change.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.dataset.url) return;
    const url = target.dataset.url;
    const description = target.dataset.description;
    console.log(url, description);
});

document.addEventListener("DOMContentLoaded",()=>{
    let nav = document.querySelector(`.${main.dataset.planet}`)
        nav.style.borderColor = main.dataset.color
})
        


