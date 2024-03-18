import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { TaskTable } from "./TaskTable";
import { TaskForm } from "./TaskForm/TaskForm";
import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
  }

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((x) => {
      if (x.id === updatedTask.id) {
        x = updatedTask;
      }
      return x;
    });

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };


  return (
    <Container >
      <Row className='p-md-5'>
        <Col className="text-center">
          <h1>To-do List</h1>
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
