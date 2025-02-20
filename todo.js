function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;
   
    let li = document.createElement("li");
    li.innerHTML = `<span>${taskValue}</span> 
                    <button class="edit" onclick="editTask(this)">Edit</button>
                    <button class="delete" onclick="removeTask(this)">Delete</button>`;
    document.getElementById("todo-list").appendChild(li);
    taskInput.value = "";
}
function removeTask(button) {
    button.parentElement.remove();
}
function editTask(button) {
    let li = button.parentElement;
    let span = li.querySelector("span");
    let newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}
