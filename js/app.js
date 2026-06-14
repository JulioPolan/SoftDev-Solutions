// Manejo del botón de login (solo si existe en la página)
const loginButton = document.getElementById('login-button');
if (loginButton) {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    loginButton.addEventListener('click', (e) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();
        const user = usernameInput ? usernameInput.value.trim() : '';
        const pass = passwordInput ? passwordInput.value.trim() : '';
        if (!user || !pass) {
            alert('Ingrese usuario y contraseña.');
            return;
        }
        // Redirige al administrador de tareas
        window.location.href = 'admin_tareas.html';
    });
}

// Código de administración de tareas: solo ejecutarlo si los elementos existen
const taskInput = document.getElementById('task-input');
const userSelect = document.getElementById('user-select');
const addTaskButton = document.getElementById('add-task');
const tasksList = document.getElementById('tasks');

if (taskInput && userSelect && addTaskButton && tasksList) {
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
}