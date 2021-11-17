let tasks = [];
// {name: string, completed: boolean}
const addTask = (name, status) => {
  tasks.push({ name: name, completed: status });
};

const removeTask = (position) => {
  const tasksNew = [];
  for (const index in tasks) {
    if (position !== Number(index)) tasksNew.push(tasks[index]);
  }
  tasks = tasksNew;
};

const toggleStatusTask = (position) => {
  const tasksNew = [];
  for (const index in tasks) {
    const name = tasks[index].name
    const isCompleted = tasks[index].completed;
    if (position === Number(index)) tasksNew.push({name: name, completed: !isCompleted});
    if (position !== Number(index)) tasksNew.push({name: name, completed: isCompleted});
  }
  tasks = tasksNew;
};

addTask("teste0", false);
addTask("teste1", false);
addTask("teste2", false);
addTask("teste3", true);
toggleStatusTask(0);
toggleStatusTask(3);
// removeTask(0);
// removeTask(1);

console.log(tasks);
