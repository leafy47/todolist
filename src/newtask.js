import createTask from "./createtask";

export default function newTask () {

const newtask = document.createElement('h3');
newtask.id = 'newtask';
newtask.textContent = '+ New Task';
newtask.addEventListener('click', () => {
  createTask('Laura B', 'Prime Pussy', 5, '2025-06-06');
});
const container = document.querySelector('.container');
let newtaskcount = document.querySelector('#newtask');
if (newtaskcount) {}
else {
  container.appendChild(newtask);
}};