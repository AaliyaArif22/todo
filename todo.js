function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button onclick="removeTask(this)"> Delete </button>`;
    
    document.getElementById("todo-list").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}