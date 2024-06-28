let tasks =[]
let priorities=[]

function addTask() {
    const taskInput = document.getElementById("task");
    const priorityInput = document.getElementById("priority");
    const taskList = document.getElementById("")
















    const completeButton = document.createElement("button");
                completeButton.textContent='Complete';
                completeButton.onclick=function() {
                    li.classList.toggle('completed')
                }
    li.appendChild(completeButton);
    const editButton=document.createElement("button");
    editButton.textContent="Edit"
    editButton.onclick= function () {
        const newTask = prompt('Edit Task:',task);
        if(newTask!==null&&newTask.trim()!==''){
            const taskIndex = tasks.indexOf(task);
            tasks[taskIndex]=newTask;//update the tasks array
            li.firstChild.textContent = newTask;//updagte the text node in DOM
            task = newTask;//update task variable to new task
        }
    }
    li.appendChild(editButton)
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        taskList.removeChild(li);
        const taskIndex = tasks.indexOf(tasks);
        tasks.splice(taskIndex,1);
    };
    li.appendChild(removeButton);
    taskInput.value='';
}
