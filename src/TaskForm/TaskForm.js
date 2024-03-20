import React, {useState, useEffect} from 'react'
import { Input } from "./Input";
import { Select } from "./Select";
import { uid } from "uid";
import { FormModal } from "./FormModal";
import { FormDatePicker } from "./FormDatePicker";
import Form from 'react-bootstrap/Form';
import { Pen } from "react-bootstrap-icons";
import {PlusSquare} from 'react-bootstrap-icons'
import Button from "react-bootstrap/Button";

export function formatDateWithTime(date) {
  // Get the date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = date.getDate().toString().padStart(2, '0');
  
  // Get the time components
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  // Construct the formatted string
  const dateString = `${year}-${month}-${day}`;
  const timeString = `${hours}:${minutes}`;
  const formattedDateTime = `${dateString}, ${timeString}`;
  
  return formattedDateTime;
}

export function isEmpty(text){
  if (text.trim() === "") {
    return true;
  } else {
    return false;
  }
}




export const TaskForm = ({submitTask, defaultTask, label}) => {

  const [task, setTask] = useState({});
  const [resetCounter, setResetCounter] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [showUpdateIcon, setShowUpdateIcon] = useState(label === 'Update');
  const [isTitleEmpty, setIsTitleEmpty] = useState(false)


  useEffect(() => {
    setShowUpdateIcon(label === 'Update');
  }, [label]);


  useEffect(() => {
    reset();
  }, [defaultTask]);

  

  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setTask({ ...task, title: e.target.value })
        break
      case "desc":
        setTask({ ...task, desc: e.target.value })
        break
      case "priority":
        setTask({ ...task, priority: e.target.value })
        break
      case "status":
        setTask({ ...task, status: e.target.value })
        break
      case "dueDate":
        setTask({ ...task, dueDate: formatDateWithTime(e.target.value) })
        break
      default:
        break
    }
    
  }

  const reset = () => {
    setTask(
      defaultTask? defaultTask :
      {
        id: uid(),
        title: "",
        desc: "",
        priority: 3,
        status: "Pending",
        createdAt: formatDateWithTime(new Date()),
        updatedAt: formatDateWithTime(new Date()),
        dueDate: formatDateWithTime(new Date()),
     }   
    )
    setResetCounter(resetCounter + 1)  
  }

  const submit = (e) => {
    e.preventDefault()
    if (isEmpty(task.title)) {
      console.log("Title is required.");
      setIsTitleEmpty(true)
      return;
    }
    else {
      setIsTitleEmpty(false)
    }
    submitTask(task)
    reset()
    setShowModal(false)
  }


  const clear = (e) => {
    e.preventDefault()
    reset()
    //setShowModal(false)
  }


  return (
    <div>
      {showUpdateIcon ? 
      (<Pen className = "pen" style={{ fontSize: '1.5em' }} onClick={() => setShowModal(true)}>{label}</Pen>) :
      // (<PlusSquare className="plus-circle" style={{ fontSize: '3em' }} onClick={() => setShowModal(true)} >{label} </PlusSquare>)
      <Button variant="secondary" onClick={() => setShowModal(true)} className="single-line-button">+ Add Task</Button>}
      
      <FormModal title={label} showModal={showModal} onClose={() => setShowModal(false)} submit={submit} reset={clear} >
      <Form>
          <Input
            label={"Title*"}
            fieldName="title"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={task.title}
            isTitleEmpty = {isTitleEmpty}
            
          />
          <Input
            label={"Details"}
            fieldName="desc"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={task.desc}
          />
          <Select
            label="Priority"
            fieldName="priority"
            options={[1, 2, 3, 4, 5]}
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={task.priority}
          />
          <Select
            label="Status"
            fieldName="status"
            options={["Pending", "InProgress", "Done", "Failed"]}
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={task.status}
          />
          <FormDatePicker 
            label="Due Date" 
            fieldName="dueDate"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={task.dueDate} 
          />
          

        </Form>  
      </FormModal>
                 
    </div>
  )
}
