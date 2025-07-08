

let inputBox = document.getElementById("inputBox");
let btn = document.getElementById("btn");
let taskList = document.getElementById("taskList");

btn.addEventListener("click", function(){
    let task = inputBox.value.trim();


    if(task == "") return;
    let li = document.createElement("li");
    li.innerText = task;
    li.style.fontSize = "2rem";
    li.style.marginTop = "10px";

    let del = document.createElement("button");
 del.innerHTML = `<i class="fa-solid fa-trash"></i>`;
 del.style.marginLeft = "300px";
    del.style.padding = "5px 10px";
    del.style.fontSize = "1rem";
    del.style.cursor = "pointer";
    del.style.borderRadius = "20px";
    del.style.backgroundColor = "red";
    del.style.border = "none";
    del.style.color = "white"
    del.style.gap = "30px"

    del.addEventListener("click", function(){
           taskList.removeChild(li);
           taskList.removeChild(del);
    })
    
    taskList.appendChild(li);
taskList.appendChild(del);
  
    inputBox.value = "";

})
