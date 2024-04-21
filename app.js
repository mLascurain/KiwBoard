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
}

function closePopUp(){
    popUpBox.classList.remove("display");
}

function addTask(){
    if(inputBox === ""){
        alert("dont forget to add a title to create the task!");
    }
    else{
        let div = document.createElement("div");
        taskContainer.appendChild(div);
        div.classList.add("card");
        div.setAttribute('id', 'card-id');
        div.setAttribute('draggable', true);
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.setAttribute('draggable', true);
        div.appendChild(li);
    }
    inputBox.value = "";
}

const columns = document.querySelectorAll(".column");
//const card = document.querySelectorAll(".card");
const card = document.getElementsByClassName("card");

columns.forEach((column) => {
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
        column.classList.add("hovered");
    });
    column.addEventListener("dragleave", () => {
        column.classList.remove("hovered");
    });
    column.addEventListener("drop", () => {
        column.appendChild(card[0]);
        column.classList.remove("hovered");
    })
});
