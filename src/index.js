import createTask from "./createtask.js";
import newTaskF from "./newtask.js";
import createLists from "./createlists.js";

const newproj = document.querySelector('#newproj');
// Get li elements 
const liElements = document.querySelectorAll('li');




newproj.addEventListener('click', () => {
  createLists('Test');
});


let logo = document.querySelector('#logo');
logo.addEventListener('click', () => {
  sessionStorage.clear();
});


function loadLists() {

  if (sessionStorage.getItem('lists')) {
    // Get data from sessionStorage
  const json = sessionStorage.getItem('lists');
  const tasks = JSON.parse(json);  

  const currentdivs = document.querySelectorAll('.task');
  
  // Iterate each task  
  if (tasks.length === null) {
}
  else if (tasks.length > currentdivs.length) {
    tasks.forEach(task => {

      // Create elements
      createLists(task.title);
    })
  };
}}

loadLists();