const popUpBox = document.getElementById("popUp");
const inputBox = document.getElementById("inputBox");
const taskContainer = document.getElementById("task");
const columns = document.querySelectorAll(".column");
const cards = document.getElementsByClassName("card");

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

    for(card of cards) {
        card.addEventListener("dragstart", (e) =>{
            e.target.classList.add("dragging");
            selected = document.getElementsByClassName("dragging");
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

for(column of columns){
    column.addEventListener("click", function(event){
        if(event.target.tagName === "SECTION"){
            event.target.remove();
        };
    });
};
