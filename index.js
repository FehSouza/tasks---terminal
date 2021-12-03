const $todo = document.querySelector('.todo');

const $listTasks = document.createElement('ul');
const $inputAddTask = document.createElement('input');
const $inputCheckBox = document.createElement('input');
$inputCheckBox.setAttribute('type', 'checkbox');
const $buttonAddTask = document.createElement('button');
$buttonAddTask.textContent = 'Add tarefa';

$todo.appendChild($inputAddTask);
$todo.appendChild($inputCheckBox);
$todo.appendChild($buttonAddTask);
$todo.appendChild($listTasks);

let tasks = [];

const addTask = (name, status) => {
  tasks.push({ name: name, completed: status });
  renderTasks(tasks);
};

const removeTask = (position) => {
  const tasksNew = [];

  for (const i in tasks) {
    if (i !== position) tasksNew.push(tasks[i]);
  }

  tasks = tasksNew;
  renderTasks(tasks);
};

const toggleStatusTask = (position) => {
  const tasksNew = [];

  for (const i in tasks) {
    const name = tasks[i].name;
    const status = tasks[i].completed;
    if (i === position) tasksNew.push({ name: name, completed: !status });
    if (i !== position) tasksNew.push({ name: name, completed: status });
  }

  tasks = tasksNew;
  renderTasks(tasks);
};

const renderTasks = (tasks) => {
  $listTasks.innerHTML = '';

  for (const index in tasks) {
    const $itemOfListTasks = document.createElement('li');

    $itemOfListTasks.addEventListener('dblclick', () => {
      removeTask(index);
    });

    $itemOfListTasks.addEventListener('click', () => {
      toggleStatusTask(index);
    });

    if (tasks[index].completed) $itemOfListTasks.textContent = `Tarefa: ${tasks[index].name} - Tarefa finalizada`;
    if (!tasks[index].completed) $itemOfListTasks.textContent = `Tarefa: ${tasks[index].name}`;

    $listTasks.appendChild($itemOfListTasks);
  }
};

$buttonAddTask.addEventListener('click', () => {
  if (!$inputAddTask.value.trim()) return;
  addTask($inputAddTask.value, $inputCheckBox.checked);
  $inputAddTask.value = '';
  $inputCheckBox.checked = false;
});

$inputAddTask.addEventListener('keypress', (event) => {
  if (!$inputAddTask.value.trim()) return;
  if (event.key === 'Enter') {
    addTask($inputAddTask.value, $inputCheckBox.checked);
    $inputAddTask.value = '';
    $inputCheckBox.checked = false;
  }
});
