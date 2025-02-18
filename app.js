document.getElementById('addTaskBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput').value;
    
    if (taskInput) {
        // Create a new list item (li)
        var li = document.createElement('li');
        li.textContent = taskInput;

        // Create a delete button
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x'; // You can use "Delete" text instead
        deleteBtn.style.marginLeft = '10px'; // Add spacing
        deleteBtn.style.backgroundColor ='red';
        deleteBtn.style.fontSize = '10px';

        // Add event listener to remove the task when the delete button is clicked
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Append the delete button to the list item
        li.appendChild(deleteBtn);

        // Append the list item to the task list
        document.getElementById('taskList').appendChild(li);

        // Clear the input field after adding the task
        document.getElementById('taskInput').value = '';
    }
});
