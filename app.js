const popUpBox = document.getElementById("popUp");
const inputBox = document.getElementById("inputBox");
const taskContainer = document.getElementById("task");
const priorityContainer = document.getElementById("priority");
const inprogressContainer = document.getElementById("inprogress");
const testingContainer = document.getElementById("testing");
const bugsContainer = document.getElementById("bugs");
const dropedContainer = document.getElementById("droped");
const doneContainer = document.getElementById("done");

function displayPopUp(){
    popUpBox.classList.add("display");
    inputBox.value = "";
}

function closePopUp(){
    popUpBox.classList.remove("display");
}

function addTask(){
    let section = document.createElement("section");
    taskContainer.appendChild(section);
    section.classList.add("card");
    section.setAttribute('draggable', true);
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    section.appendChild(li);
    inputBox.value = "";
    dragAndDrop();
}

function dragAndDrop(){
let selected;

const columns = document.querySelectorAll(".column");
const cards = document.getElementsByClassName("card");

for(card of cards) {
    card.addEventListener("dragstart", (e) =>{
        e.target.classList.add("dragging");
        selected = document.getElementsByClassName("dragging");
        console.log("debug");
    });
    card.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
    });
};

columns.forEach((column) => {
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
        column.classList.add("hovered");
    });
    column.addEventListener("dragleave", () => {
        column.classList.remove("hovered");
    });
    column.addEventListener("drop", () => {
        column.appendChild(selected[0]);
        column.classList.remove("hovered");
    });
});
}
taskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SECTION"){
        e.target.remove();
    }
})

priorityContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SECTION"){
        e.target.remove();
    }
})

inprogressContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SECTION"){
        e.target.remove();
    }
})

testingContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SECTION"){
        e.target.remove();
    }
})

bugsContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SECTION"){
        e.target.remove();
    }
})

dropedContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SECTION"){
        e.target.remove();
    }
})

doneContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SECTION"){
        e.target.remove();
    }
})