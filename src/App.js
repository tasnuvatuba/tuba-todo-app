import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { TaskTable } from "./TaskTable";
import { useState, useEffect } from "react";
import { TaskFilter } from "./TaskFilter";
import { formatDateWithTime } from "./TaskForm/TaskForm";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  // Load tasks from local storage 
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [localStorageCounter, setLocalStorageCounter] = useState(0)
  const [isPriorityArrowAscending, setIsPriorityArrowAscending] = useState(true)
  const [isCreatedAscending, setIsCreatedAscending] = useState(true)
  const [isUpdatedAscending, setIsUpdatedAscending] = useState(true)
  const [isDueDateAscending, setIsDueDateAscending] = useState(true)
  const [searchTerm, setSearchTerm] = useState('');

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [localStorageCounter]);

  const addTask = (newTask) => {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if(newTask.status === "Done" || newTask.status === "Failed"){
      localStorageTasks.push(newTask);
    }
    else{
      localStorageTasks.unshift(newTask);
    }
    setTasks(localStorageTasks);
    setLocalStorageCounter(localStorageCounter + 1);
  }

  const updateTask = (updatedTask) => {
    updatedTask.updatedAt = formatDateWithTime(new Date())
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTasks = localStorageTasks.filter((x) => x.id !== updatedTask.id);

    console.log("new tasks")
    console.log(newTasks)
    console.log("updated Tasks")
    console.log(updatedTask)
    if(updatedTask.status === "Done" || updatedTask.status === "Failed"){
      newTasks.push(updatedTask);
    }
    else{
      newTasks.unshift(updatedTask);
    }
    
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
    setSearchTerm("")
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let filteredTasks;
    if(status === 'None'){
      filteredTasks = localStorageTasks;
    }
    else{
      filteredTasks = localStorageTasks.filter((task) => {
        return task.status === status;
      });

    }
    setTasks(filteredTasks)
  }

  const sortByPriority = () => {
    if(isPriorityArrowAscending){
      console.log("sort by priority ascending");
      const ascendingOrderedTasks = [...tasks].sort((a, b) => parseInt(a.priority) - parseInt(b.priority));

      setTasks(ascendingOrderedTasks)
      setIsPriorityArrowAscending(false);
    }
    else{
      console.log("sort by priority descending");
      const descendingOrderedTasks = [...tasks].sort((a, b) => parseInt(b.priority) - parseInt(a.priority));

      setTasks(descendingOrderedTasks)
      setIsPriorityArrowAscending(true);
    }

    
  }

  function parseDateFromString(dateString) {
    const [datePart, timePart] = dateString.split(', '); // Split the string into date and time parts
    const [year, month, day] = datePart.split('-').map(Number); // Parse date components
    const [hours, minutes] = timePart.split(':').map(Number); // Parse time components
    
    // Create a new Date object using the parsed components
    const parsedDate = new Date(year, month - 1, day, hours, minutes);
    
    return parsedDate;
  }


  const sortBydate = (label) => {
    switch (label) {
      case "created":
        if (isCreatedAscending) {
          const sortedtasks = tasks.map(task => {
            task.createdAt = parseDateFromString(task.createdAt);
            return task;
          }).sort((a, b) => {
            return a.createdAt - b.createdAt;});
          setTasks(sortedtasks.map(task => {
            task.createdAt = formatDateWithTime(task.createdAt);
            return task;
          }));
          setIsCreatedAscending(false);
        }

        else {
          const sortedtasks = tasks.map(task => {
            task.createdAt = parseDateFromString(task.createdAt);
            return task;
          }).sort((a, b) => {
            return b.createdAt - a.createdAt;});
            setTasks(sortedtasks.map(task => {
              task.createdAt = formatDateWithTime(task.createdAt);
              return task;
            }));
          setIsCreatedAscending(true);
        }
        break;

        case "updated":
          if (isUpdatedAscending) {
            const sortedtasks = tasks.map(task => {
              task.updatedAt = parseDateFromString(task.updatedAt);
              return task;
            }).sort((a, b) => {
              return a.updatedAt - b.updatedAt;});
              setTasks(sortedtasks.map(task => {
                task.updatedAt = formatDateWithTime(task.updatedAt);
                return task;
              }));
            setIsUpdatedAscending(false);
          }
  
          else {
            const sortedtasks = tasks.map(task => {
              task.updatedAt = parseDateFromString(task.updatedAt);
              return task;
            }).sort((a, b) => {
              return b.updatedAt - a.updatedAt;});
              setTasks(sortedtasks.map(task => {
                task.updatedAt = formatDateWithTime(task.updatedAt);
                return task;
              }));
            setIsUpdatedAscending(true); 
          }
          break;

          case "dueDate":
            if (isDueDateAscending) {
              const sortedtasks = tasks.map(task => {
                task.dueDate = parseDateFromString(task.dueDate);
                return task;
              }).sort((a, b) => {
                return a.dueDate - b.dueDate;});
                setTasks(sortedtasks.map(task => {
                  task.dueDate = formatDateWithTime(task.dueDate);
                  return task;
                }));
              setIsDueDateAscending(false); 
            }
    
            else {
              const sortedtasks = tasks.map(task => {
                task.dueDate = parseDateFromString(task.dueDate);
                return task;
              }).sort((a, b) => {
                return b.dueDate - a.dueDate;}); 
                setTasks(sortedtasks.map(task => {
                  task.dueDate = formatDateWithTime(task.dueDate);
                  return task;
                }));
              setIsDueDateAscending(true); 
            }
            break;
    
        default:
          break;
    }

  }

  const onSearchTermChangeHandler = (e) => {
    //console.log(e.target.value)
    setSearchTerm(e.target.value);
    const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const searchedTasks = allTasks.filter((task) => {
      return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    setTasks(searchedTasks)
  }


  return (
    <Container >
      <Row className='p-md-5'>
        <Col className="text-center">
          <h1>Toodle</h1>
          <h5>Your personal task organizer</h5>
        </Col>
      </Row>
      <Row>
        <Col className='pb-3'>
          <TaskFilter filterTasks = {filterTasks} addTask = {addTask} onSearchTermChangeHandler={onSearchTermChangeHandler} searchTerm = {searchTerm}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskTable tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} isPriorityArrowAscending={isPriorityArrowAscending} sortByPriority={sortByPriority}
                      isCreatedAscending = {isCreatedAscending} isUpdatedAscending = {isUpdatedAscending} isDueDateAscending={isDueDateAscending} sortBydate={sortBydate}/>
        </Col>
      </Row>
      {/* <Row className='p-md-5'>
        <Col className='text-center'>
          <TaskForm submitTask={addTask} label="Add Task" />
        </Col>
      </Row> */}
    </Container>
  );
  
  
}

export default App;
