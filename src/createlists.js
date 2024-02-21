import newTaskF from "./newtask";
import createTask from "./createtask";
import listTrasher from "./listtrash";

export default function createLists (name) {
    const newproj = document.querySelector('#newproj');
    const def2 = document.querySelector('h1');
    const newli = document.createElement('li');
    newli.textContent = name;
    newli.setAttribute('contenteditable', 'true');
    let numofli = document.querySelectorAll('li');
    newli.id = numofli.length + 'L';
    newli.classList.add('listitems');
    newli.addEventListener('input', () => {
      // Text content updated  
      def2.textContent = newli.textContent; 
      saveLists();
    });
    newli.addEventListener('click', () => {
      // Text content updated  
      def2.textContent = newli.textContent;
      def2.id = newli.id + 'T';
      //Clear containers
      const container = document.querySelector('.container');
      container.innerHTML = ''; 
      loadTasks(def2.id);
      newTaskF();
    });
    const parentdiv = newproj.parentNode;
    parentdiv.insertBefore(newli, newproj);
    // trash can
    const trash = document.createElement('img');
    trash.src = './icons8-trash-24.png';
    trash.classList.add('ttrash');
    trash.id = newli.id;
    listTrasher(trash);
    newli.append(trash);
    saveLists();
}

function loadTasks(name) {

    if (sessionStorage.getItem(name)) {
      // Get data from sessionStorage
    const json = sessionStorage.getItem(name);
    const tasks = JSON.parse(json);  
  
    const currentdivs = document.querySelectorAll('.task');
    
    // Iterate each task  
    if (tasks.length === null) {
    tasks.forEach(task => {
  
      // Create elements
      createTask(task.title, task.desc, task.select, task.date);
    });
  }
    else if (tasks.length > currentdivs.length) {
      tasks.forEach(task => {
  
        // Create elements
        createTask(task.title, task.desc, task.select, task.date);
      })
    };
  }}

  function saveLists () {
    const lists = document.querySelectorAll('.listitems');
  
    const listData = [];
  
    lists.forEach(list => {
      const title = list.textContent;
      const listid = list.id;
      listData.push ({
        title,
        listid
      })
    });
  
    const data = JSON.stringify(listData);
  
    sessionStorage.setItem('lists', data);
    console.log(data);
  }