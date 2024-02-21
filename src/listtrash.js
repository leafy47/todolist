export default function listTrasher (trash) {
    trash.addEventListener('click', function(event) {

        // Or can directly access trigger element 
        const button = event.currentTarget;  
      
        // Get parent 
        button.remove();
        const li = document.getElementById(button.id);
        li.remove();
        const json = sessionStorage.getItem('lists');
        let tasks = JSON.parse(json);  
      
        tasks = tasks.filter(div => button.id !== div.listid)
      
        const data = JSON.stringify(tasks);  
      
        sessionStorage.setItem('lists', data);
      });
}