// script.js

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = () => {
        li.classList.toggle("completed");
        saveTasks();
    };
    li.appendChild(completeButton);
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
        taskList.removeChild(li);
        saveTasks();
    };
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
    taskInput.value = "";
    
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#task-list li").forEach(task => {
        tasks.push({
            text: task.firstChild.textContent,
            completed: task.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("task-list");
    
    tasks.forEach(taskData => {
        const li = document.createElement("li");
        li.textContent = taskData.text;
        
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => {
            li.classList.toggle("completed");
            saveTasks();
        };
        if (taskData.completed) {
            li.classList.add("completed");
        }
        li.appendChild(completeButton);
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            taskList.removeChild(li);
            saveTasks();
        };
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);
    });
}
