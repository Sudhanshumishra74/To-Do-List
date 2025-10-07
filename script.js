document.addEventListener("DOMContentLoaded", () => {
  let inputBox = document.getElementById("inputBox");
  let btn = document.getElementById("btn");
  let taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => renderTask(task));

  btn.addEventListener("click", function() {
    let taskText = inputBox.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      task: taskText
    };

    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    inputBox.value = "";
  });

  function renderTask(task) {
    let li = document.createElement("li");
    li.innerHTML = task.task;

    let del = document.createElement("button");
    del.innerHTML = "Task Completed";
    del.addEventListener("click", function() {
      tasks = tasks.filter(t => t.id !== task.id);
      saveTask();
      taskList.removeChild(li);
    });

    li.appendChild(del);
    taskList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
