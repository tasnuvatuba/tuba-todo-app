
import './App.css';
import { uid } from "uid";
import { TaskTable } from "./TaskTable";
import { TaskForm } from "./TaskForm/TaskForm";
import { useState, useEffect } from "react";


function App() {
  // Load tasks from local storage or use the mockTasks if there are none
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    console.log(newTask)
  }

  const updateTask = (id) => {
    console.log(id)
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };


  return (
    <div>
      <TaskTable tasks = {tasks} deleteTask = {deleteTask} updateTask = {updateTask}/>
      <TaskForm submitTask={addTask}/>
    </div>
    
  );
}

export default App;
