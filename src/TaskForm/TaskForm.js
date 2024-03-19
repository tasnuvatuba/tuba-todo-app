import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { Input } from "./Input";
import { Select } from "./Select";
import { uid } from "uid";
import { FormModal } from "./FormModal";
import Form from 'react-bootstrap/Form';
import { Pen } from "react-bootstrap-icons";
import {PlusCircle} from 'react-bootstrap-icons'


export const TaskForm = ({submitTask, defaultTask, label}) => {

  const [task, setTask] = useState({});
  const [resetCounter, setResetCounter] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [showUpdateIcon, setShowUpdateIcon] = useState(label === 'Update');


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
        setTask({ ...task, dueDate: e.target.value })
        break
      default:
        break
    }
    
  }

  const reset = () => {
    console.log("inside clear")
    console.log(defaultTask)
    setTask(
      defaultTask? defaultTask :
      {
        id: uid(),
        title: "",
        desc: "",
        priority: 3,
        status: "Pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        dueDate: new Date().toISOString(),
     }   
    )
    setResetCounter(resetCounter + 1)  
  }

  const submit = (e) => {
    e.preventDefault()
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
      (<PlusCircle className="plus-circle" style={{ fontSize: '3em' }} onClick={() => setShowModal(true)} >{label} </PlusCircle>)}
      
      <FormModal title={label} showModal={showModal} onClose={() => setShowModal(false)} submit={submit} reset={clear}>
      <Form>
          <Input
            label={"Title"}
            fieldName="title"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={task.title}
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
          <Input
            label={"DueDate"}
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
