document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        let taskText = taskInput.value.trim();

        if(taskText){
            const li = document.createElement("li");
            li.textContent = taskText
            const removeBtn = document.createElement("button");
            removeBtn.textContent ="Remove"
            removeBtn.className = "remove-btn"
            removeBtn.onclick = () => li.remove();
            li.appendChild(removeBtn); 
             taskList.appendChild(li); 
             taskInput.value = "";
        }else{
             alert("please add your task");
        }

    }

     addButton.addEventListener("click", addTask);
     taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
        });


});