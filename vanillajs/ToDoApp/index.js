const container = document.querySelector("#container");
const tasks = [];

// Adding a title
const title = document.createElement("h1");
title.innerHTML = "To Do App";
container.appendChild(title);

// The table
const table = document.createElement("table");
table.className = "table";

const caption = document.createElement("caption");
caption.innerHTML = "Tasks";
table.appendChild(caption);

const thead = document.createElement("thead");
const headTr = document.createElement("tr");
const fields = ["Description", "Date", "Done"];

fields.map((field) => {
  const th = document.createElement("th");
  th.innerHTML = field;
  headTr.appendChild(th);
});

const tbody = document.createElement("tbody");

thead.appendChild(headTr);
table.appendChild(thead);
table.appendChild(tbody);
container.appendChild(table);

// Task input
const newTaskForm = document.createElement("form");
newTaskForm.className = "newTask";

const inputGroup = document.createElement("div");
inputGroup.className = "inputGroup";

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Descripción";
inputGroup.appendChild(taskInput);

const dateInput = document.createElement("input");
dateInput.type = "date";
inputGroup.appendChild(dateInput);

newTaskForm.appendChild(inputGroup);

const createButton = document.createElement("button");
createButton.type = "submit";
createButton.innerText = "Crear";
newTaskForm.appendChild(createButton);

const addTaskToTable = () => {
  // Limpiar el cuerpo de la tabla antes de actualizarla
  tbody.innerHTML = "";

  tasks.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach((task) => {
    const tr = document.createElement("tr");

    const descriptionTd = document.createElement("td");
    descriptionTd.innerText = task.description;
    tr.appendChild(descriptionTd);

    const dateTd = document.createElement("td");
    dateTd.innerText = task.date;
    tr.appendChild(dateTd);

    const doneTd = document.createElement("td");
    const doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.checked = task.done;
    doneCheckbox.addEventListener("change", (event) => {
      task.done = event.target.checked;
      updateTaskClasses(tr, task);
    });
    doneTd.appendChild(doneCheckbox);
    tr.appendChild(doneTd);

    updateTaskClasses(tr, task);
    tbody.appendChild(tr);
  });
};

const updateTaskClasses = (tr, task) => {
  const today = new Date().toISOString().split("T")[0];
  if (task.done || task.date < today) {
    tr.classList.add("done");
  } else {
    tr.classList.remove("done");
  }
};

// Event listener for form submission
newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = {
    description: taskInput.value,
    date: dateInput.value,
    done: false
  };

  tasks.push(newTask);
  addTaskToTable();

  // Clear input fields
  taskInput.value = "";
  dateInput.value = "";
});

container.appendChild(newTaskForm);
