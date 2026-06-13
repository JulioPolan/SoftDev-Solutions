const taskInput = document.getElementById('task-input');
const userSelect = document.getElementById('user-select');
const addTaskButton = document.getElementById('add-task');
const tasksList = document.getElementById('tasks');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const selectedUser = userSelect.value;

    const taskItem = document.createElement('li');
    taskItem.textContent = (`${selectedUser} - ${taskText}`);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', () => taskItem.remove());

    taskItem.appendChild(removeButton);
    tasksList.appendChild(taskItem);
    taskInput.value = '';
    userSelect.value = '';
});