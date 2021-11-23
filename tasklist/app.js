//UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// listen for the submit on the form button
const loadEventListeners = () => {

    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // add task event
    form.addEventListener('submit', addTask);

    // Remove task even - using delegation
    taskList.addEventListener('click', removeTask);

    // clear all tasks
    clearButton.addEventListener("click", clearTasks);

    // filter the tasks (search)
    filter.addEventListener("keyup", filterTasks);

}

const addTask = (event) => {
    event.preventDefault(); // stop the form from submitting

    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Adding a new task

    // Deal with the li content
    const li = document.createElement("li"); // create li element
    li.className = "collection-item"; // add a class. In materialize this makes uls look good. 
    li.appendChild(document.createTextNode(taskInput.value)); // create text node and append whatever was added

    // deal with the delete link
    const link = document.createElement('a'); // Create new link element
    link.className = 'delete-item secondary-content'; // add the class name. in materialize if you want something to the right of a list item it has to have secondary-content
    link.innerHTML = '<i class="fas fa-unlink"></i>'  // add icon html
    li.appendChild(link); // append the link to the li
    taskList.appendChild(li); // append the li to the ul

    // store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // clear the inputs
    taskInput.value = '';

}

// Store the task
const storeTaskInLocalStorage = (task) => {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove the tasks from local storage
const removeTaskFromLocalStorage = (taskItem) => {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log(taskItem)
}


// Retrieve tasks from the local storage
const getTasks = () => {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        // Deal with the li content
        const li = document.createElement("li"); // create li element
        li.className = "collection-item"; // add a class. In materialize this makes uls look good. 
        li.appendChild(document.createTextNode(task)); // create text node and append whatever was added

        // deal with the delete link
        const link = document.createElement('a'); // Create new link element
        link.className = 'delete-item secondary-content'; // add the class name. in materialize if you want something to the right of a list item it has to have secondary-content
        link.innerHTML = '<i class="fas fa-unlink"></i>'  // add icon html
        li.appendChild(link); // append the link to the li
        taskList.appendChild(li); // append the li to the ul
    })
}

const removeTask = (event) => {
    // target the delete item
    if (event.target.parentElement.classList.contains('delete-item')) {
        // we want the parent of the parent to delete
        if (confirm("Are you sure?")) {
            event.target.parentElement.parentElement.remove();

            // remove from local storage
            removeTaskFromLocalStorage(event.target.parentElement.parentElement);
        }
    }

}

const clearTasks = (event) => {
    // one way to clear everything
    //taskList.innerHTML = "";

    // or we can loop through and clear each one, this is faster
    while (taskList.firstChild) { // while there is still something in the list
        taskList.removeChild(taskList.firstChild);
    }
    // clear from local storage
    clearTasksFromLocalStorage();
}

const clearTasksFromLocalStorage = () => {
    localStorage.clear();
}


// This will clear out the tasks unless they match the search
const filterTasks = (event) => {
    const text = event.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

    //console.log(text);
}

// Load all event listeners
loadEventListeners();