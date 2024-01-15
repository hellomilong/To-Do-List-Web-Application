document.getElementById('add-task-btn').addEventListener('click', function() {
    var newTask = document.getElelmentById('new-task').value;
    if (newTask.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = newTask;
        li.addEventListener('click', function(){
            this.classList.toggle('completed');
        });
        // Add the creared list item to the task list
        document.getElementById('task-list'). appendChild(li);
    }
});