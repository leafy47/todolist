import putTrash from "./trash.js"
import saveTasks from "./savetasks.js";
import newTaskF from "./newtask.js";


export default function createTask(title1, descr1, select1, date1) {
const container = document.querySelector('.container');
  
// Create div 
const task = document.createElement('div');
task.classList.add('task');

// Title 
const title = document.createElement('p');
title.classList.add('title'); 
title.textContent = title1;
title.setAttribute('contenteditable', 'true');
let def2 = document.querySelector('h1');
title.addEventListener('input',() => {
     saveTasks(def2.id);
   });

// Description
const description = document.createElement('p');
description.classList.add('description');
description.textContent = descr1;
description.setAttribute('contenteditable', 'true');
description.addEventListener('input',() => {
     saveTasks(def2.id);
   });

// Priority  
const priority = document.createElement('div');
priority.classList.add('priority');

// Select and options
const label = document.createElement('label');
label.textContent = 'Priority ';
const select = document.createElement('select'); 
select.classList.add('score');

[1, 2, 3, 4, 5].forEach(num => {
   const option = document.createElement('option');
   option.value = num;
   option.textContent = num;
   select.appendChild(option);
});

select.value = select1;
 
// Rest of elements
const duedate = document.createElement('div');
duedate.classList.add('duedate');
duedate.textContent = 'Date: ';
const trashcan = document.createElement('img');
trashcan.src = './recycle-bin (1).png';
trashcan.classList.add('trashcan');
const numoftasks = document.querySelectorAll('.task');
trashcan.id = numoftasks.length + 1;
putTrash(trashcan);


const input = document.createElement('input');
input.type = 'date';
input.value = date1;

// Append elements
duedate.appendChild(input);
duedate.appendChild(trashcan);


// Append elements  
task.appendChild(title);
task.appendChild(description);

priority.appendChild(label);
priority.appendChild(select);
task.appendChild(priority);
task.appendChild(duedate);

newTaskF();
let newtask = document.querySelector('#newtask');
container.insertBefore(task, newtask);
};