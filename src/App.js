
import './App.css';
import { uid } from "uid";
import { TaskTable } from "./TaskTable";
import { TaskForm } from "./TaskForm/TaskForm";

const mockTasks = [
  {
    id: uid(),
    title: "Note 1",
    desc: "Note 1 description",
    priority: 5,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
    dueDate: "2024-03-17T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 2",
    desc: "Note 2 description",
    priority: 5,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
    dueDate: "2024-03-17T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 3",
    desc: "Note 3 description",
    priority: 3,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
    dueDate: "2024-03-17T05:19:29.533Z",
  },
]



function App() {

  const addTask = (newTask) => {
    // setNotes([...notes, newNote])
    console.log(newTask)
  }

  return (
    <div>
      <TaskTable tasks = {mockTasks}/>
      <TaskForm submitTask={addTask}/>
    </div>
    
  );
}

export default App;
