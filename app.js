const popUpBox = document.getElementById("popUp");
const inputBox = document.getElementById("inputBox");
const taskContainer = document.getElementById("task");

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
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        div.appendChild(li);
        //taskContainer.appendChild(li);
    }
    inputBox.value = "";
}