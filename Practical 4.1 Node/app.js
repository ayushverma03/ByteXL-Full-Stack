
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store tasks
let tasks = [];

function showMenu() {
  console.log("\n--- Task Manager ---");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Delete Task");
  console.log("4. Exit");

  rl.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        viewTasks();
        break;
      case "3":
        deleteTask();
        break;
      case "4":
        rl.close();
        break;
      default:
        console.log("Invalid choice. Try again.");
        showMenu();
    }
  });
}

function addTask() {
  rl.question("Enter task name: ", (task) => {
    tasks.push(task);
    console.log(`Task "${task}" added.`);
    showMenu();
  });
}

function viewTasks() {
  console.log("\n--- Your Tasks ---");
  if (tasks.length === 0) console.log("No tasks yet!");
  else tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
  showMenu();
}

function deleteTask() {
  viewTasks();
  rl.question("Enter task number to delete: ", (num) => {
    const index = parseInt(num) - 1;
    if (index >= 0 && index < tasks.length) {
      const removed = tasks.splice(index, 1);
      console.log(`Task "${removed}" deleted.`);
    } else {
      console.log("Invalid task number.");
    }
    showMenu();
  });
}


showMenu();
