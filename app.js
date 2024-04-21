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

const card = document.getElementById("card-id");

card.addEventListener('dragstart', function(event){
    console.log(event);
})
priorityContainer.addEventListener('dragover', function(event){
    event.preventDefault();
})
priorityContainer.addEventListener('drop', function(event){
    priorityContainer.prepend(card);
})