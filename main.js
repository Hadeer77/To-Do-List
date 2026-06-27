let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let ul = document.getElementById("taskList");


addBtn.onclick = function(){
    if(taskInput.value===""){
        return;
    }
    let li = document.createElement("li");
    li.textContent = taskInput.value ;

    li.onclick = function(){
        li.classList.toggle("completed");
    };
    ul.appendChild(li);

    taskInput.value = "";

};

let clearBtn = document.getElementById("clearCompleted");
clearBtn.onclick = function(){
    let completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(function(task){
        task.remove();

    });
};



