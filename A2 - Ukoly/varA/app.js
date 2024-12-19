const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate'); // Přidáno pro výběr data
const shortTermTasks = document.getElementById('shortTermTasks');
const longTermTasks = document.getElementById('longTermTasks');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value; // Získání data z pole

    if (taskText === '') {
        alert('Zadejte úkol!');
        return;
    }

    if (!taskDueDate) {
        alert('Zadejte datum úkolu!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskText} (Termín: ${taskDueDate})`; // Zobrazení úkolu s datem

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => taskItem.remove();
    taskItem.appendChild(deleteBtn);

    // Rozlišení mezi krátkodobým a dlouhodobým úkolem
    const currentDate = new Date();
    const dueDate = new Date(taskDueDate);

    // Krátkodobé úkoly mají termín dnes nebo včera
    if (dueDate <= currentDate) {
        shortTermTasks.appendChild(taskItem); // Přidat do krátkodobých úkolů
    } else {
        longTermTasks.appendChild(taskItem); // Přidat do dlouhodobých úkolů
    }

    taskInput.value = '';
    taskDate.value = ''; // Vyprázdnění pole pro datum
}
