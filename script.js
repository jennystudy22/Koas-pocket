alert("Selamat datang di Aplikasi Koas!");
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}function saveNote() {
    const clinicalNote = document.getElementById('clinicalNote');
    const savedNote = document.getElementById('savedNote');
    savedNote.textContent = clinicalNote.value;
    clinicalNote.value = "";
}// Simpan tugas
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        saveTasks();
        taskInput.value = "";
    }
}

// Simpan catatan klinis
function saveNote() {
    const clinicalNote = document.getElementById('clinicalNote');
    const savedNote = document.getElementById('savedNote');
    savedNote.textContent = clinicalNote.value;
    localStorage.setItem('clinicalNote', clinicalNote.value);
    clinicalNote.value = "";
}

// Muat data saat halaman dimuat
window.onload = function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    savedTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });

    const savedNote = localStorage.getItem('clinicalNote');
    if (savedNote) {
        document.getElementById('savedNote').textContent = savedNote;
    }
};

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push(li.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}