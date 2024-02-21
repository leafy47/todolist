export default function trasher (trash) {
    trash.addEventListener('click', function(event) {

        // Or can directly access trigger element 
        const button = event.currentTarget;  
      
        // Get parent 
        const parentDiv = button.parentElement.parentElement;
        parentDiv.remove();
        let def2 = document.querySelector('h1');
        const json = sessionStorage.getItem(def2.id);
        let tasks = JSON.parse(json);  
      
        tasks = tasks.filter(div => button.id !== div.trash)
      
        const data = JSON.stringify(tasks);  
      
        sessionStorage.setItem(def2.id, data);
        console.log(tasks);
      });
}