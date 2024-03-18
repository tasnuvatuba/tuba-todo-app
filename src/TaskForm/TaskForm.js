import React, {useState, useEffect} from 'react'
import { Input } from "./Input";
import { Select } from "./Select";
import { uid } from "uid";

export const TaskForm = ({submitTask}) => {

  const [task, setTask] = useState({});
  const [resetCounter, setResetCounter] = useState(0)

  useEffect(() => reset(), []) //for everytime when the page is refreshed

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
    //console.log(`name: ${e.target.name} | value: ${e.target.value}`)
  }

  const reset = () => {
    setTask({
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
    // setShowModal(false)
  }


  const clear = (e) => {
    e.preventDefault()
    reset()
    // setShowModal(false)
  }


  return (
    <div>
        <form>
          <Input
            label={"Title"}
            fieldName="title"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
          />
          <Input
            label={"Details"}
            fieldName="desc"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
          />
          <Select
            label="Priority"
            fieldName="priority"
            options={[1, 2, 3, 4, 5]}
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
          />
          <Select
            label="Status"
            fieldName="status"
            options={["Pending", "InProgress", "Done", "Failed"]}
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
          />
          <Input
            label={"DueDate"}
            fieldName="dueDate"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
          />

          <button onClick={submit}>Submit</button>
          <button onClick={clear}>Clear</button>
          
        </form>        
    </div>
  )
}
