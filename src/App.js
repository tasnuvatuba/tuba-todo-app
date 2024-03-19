import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { TaskTable } from "./TaskTable";
import { TaskForm } from "./TaskForm/TaskForm";
import { useState, useEffect } from "react";
import { TaskFilter } from "./TaskFilter";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  // Load tasks from local storage or use the mockTasks if there are none
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [localStorageCounter, setLocalStorageCounter] = useState(0)
  

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [localStorageCounter]);


  const addTask = (newTask) => {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks([...localStorageTasks, newTask]);
    setLocalStorageCounter(localStorageCounter + 1);
  }

  const updateTask = (updatedTask) => {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTasks = localStorageTasks.map((x) => {
      if (x.id === updatedTask.id) {
        x = updatedTask;
      }
      return x;
    });

    setTasks(newTasks);
    setLocalStorageCounter(localStorageCounter + 1);
  };

  const deleteTask = (id) => {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(
      localStorageTasks.filter((task) => {
        return task.id !== id;
      })
    );
    setLocalStorageCounter(localStorageCounter + 1);
  };

  const filterTasks = (status) => {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let filteredTasks;
    if(status == 'None'){
      filteredTasks = localStorageTasks;
    }
    else{
      filteredTasks = localStorageTasks.filter((task) => {
        return task.status == status;
      });

    }
    setTasks(filteredTasks)
  }


  return (
    <Container >
      <Row className='p-md-5'>
        <Col className="text-center">
          <h1>To-do List</h1>
        </Col>
      </Row>
      <Row>
        <Col className='pb-md-3'>
          <TaskFilter filterTasks = {filterTasks}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskTable tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </Col>
      </Row>
      <Row className='p-md-5'>
        <Col className='text-center'>
          <TaskForm submitTask={addTask} label="Add Task" />
        </Col>
      </Row>
    </Container>
  );
  
  
}

export default App;
