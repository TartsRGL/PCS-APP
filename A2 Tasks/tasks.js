const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const shortTermTasks = document.getElementById('shortTermTasks');
const mediumTermTasks = document.getElementById('mediumTermTasks');
const longTermTasks = document.getElementById('longTermTasks');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value;

    if (taskText === '') {
        alert('Zadejte úkol!');
        return;
    }

    if (!taskDueDate) {
        alert('Zadejte datum úkolu!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskText} (Termín: ${taskDueDate})`;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => taskItem.remove();
    taskItem.appendChild(deleteBtn);

    const currentDate = new Date();
    const dueDate = new Date(taskDueDate);

    // Výpočet rozdílu mezi dnešním datem a datem splnění v dnech
    const timeDifference = dueDate - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Přepočet na dny

    // Třídění podle rozdílu dní
    if (daysDifference <= 7) {
        shortTermTasks.appendChild(taskItem); // Krátkodobé úkoly
    } else if (daysDifference <= 30) {
        mediumTermTasks.appendChild(taskItem); // Střednědobé úkoly
    } else {
        longTermTasks.appendChild(taskItem); // Dlouhodobé úkoly
    }

    // Vyprázdnění vstupů
    taskInput.value = '';
    taskDate.value = '';
}
