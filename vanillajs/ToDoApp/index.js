const container = document.querySelector("#container");
const tasks = [];
const currentTask ={
  description: "",
  date: ""
}

// Adding a title 
const title = document.createElement("h1");
title.innerHTML = "To Do App";
container.appendChild(title);

//The table
const table = document.createElement("table");
table.className = "table";

const caption = document.createElement("caption");
caption.innerHTML = "Tasks";
table.appendChild(caption);

const thead = document.createElement("thead");
const headTr = document.createElement("tr");
const fields = ["Description", "Date"];

fields.map( (field) => {
  const th = document.createElement("th");
  th.innerHTML = field;
  headTr.appendChild(th)
});

const tbody = document.createElement("tbody")

thead.appendChild(headTr);
table.appendChild(thead);
table.appendChild(tbody)
container.appendChild(table);


//Task input
const newTaskForm = document.createElement("form");
newTaskForm.className = "newTask"

const inputGroup = document.createElement("div");
inputGroup.className = "inputGroup";

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Descripción"
inputGroup.appendChild(taskInput);

const dateInput = document.createElement("input");
dateInput.type = "date";
inputGroup.appendChild(dateInput);

newTaskForm.appendChild(inputGroup);

const createButton = document.createElement("button");
createButton.type = "submit";
createButton.innerText = "Crear";
newTaskForm.appendChild(createButton);

const addTaskToTable = (task) => {
    console.log(task)
    const tr = document.createElement("tr");

    const descriptionTd = document.createElement("td");
    console.log(task.description)
    descriptionTd.innerText = task.description;
    tr.appendChild(descriptionTd);

    const dateTd = document.createElement("td");
    console.log(task.date)
    dateTd.innerText = task.date;
    tr.appendChild(dateTd);

    tbody.appendChild(tr);
};

// Event listener for form submission
newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = {
    description: taskInput.value,
    date: dateInput.value
  };

  tasks.push(newTask);
  addTaskToTable(newTask);

  // Clear input fields
  taskInput.value = "";
  dateInput.value = "";
});

container.appendChild(newTaskForm);