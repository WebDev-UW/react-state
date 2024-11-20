import { useState } from 'react';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';

// TODO:
// Step 1: Create a reducer function and move state management logic into it
// Step 2: Change useState to useReducer, and give it your new reducer function
// Step 3: Change setTasks to dispatch

export default function Exercise1() {
  // HINT: Step 2 changes this line
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    // HINT: move this code into the reducer function
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    // HINT: move this code into the reducer function
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    // HINT: move this code into the reducer function
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Exercise 1 - Todo List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

// HINT: create your reducer function here
// function tasksReducer(tasks, action) { ... }

let nextId = 3; 
const initialTasks = [
  {id: 0, text: 'Open exercise', done: true},
  {id: 1, text: 'Write reducer function', done: false},
  {id: 2, text: 'Change useState to useReducer', done: false},
  {id: 3, text: 'Change code to use "dispatch" instead of "setTasks"', done: false},
];
