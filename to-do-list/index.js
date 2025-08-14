const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation(); 
        li.remove();
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
