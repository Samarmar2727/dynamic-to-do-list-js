document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function updateLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = () => {
      li.remove();

      // remove from localStorage
      let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      savedTasks = savedTasks.filter(task => task !== taskText);
      updateLocalStorage(savedTasks);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  function loadTasksFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskText => {
      createTaskElement(taskText);
    });
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
      createTaskElement(taskText);

      // save to localStorage
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      savedTasks.push(taskText);
      updateLocalStorage(savedTasks);

      taskInput.value = "";
    } else {
      alert("Please add your task");
    }
  }

  // Load existing tasks
  loadTasksFromLocalStorage();

  // Add event listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
