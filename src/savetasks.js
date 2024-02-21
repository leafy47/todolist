export default function saveTasks(name) {
    // Get task elements
    const tasks = document.querySelectorAll('.task'); 
    // Array to store data
    const taskData = [];
  
    // Loop through each  
    tasks.forEach(task => {
  
      // Get data per task as before
      const title = task.querySelector('.title').textContent;
      const desc = task.querySelector('.description').textContent;
      const select = task.querySelector('.score').value;
      const date = task.querySelector('input[type="date"').value;
      const trash = task.querySelector('.trashcan').id;
      
      // Add to array 
      taskData.push({
        title, 
        desc,
        select,
        date,
        trash,
      });
  
    });
  
    // Stringify array
    const data = JSON.stringify(taskData);  
  
    sessionStorage.setItem(name, data);
    console.log(data);
  }