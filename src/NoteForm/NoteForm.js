import React, {useState, useEffect} from 'react'
import { Input } from "./Input";
import { Select } from "./Select";
import { uid } from "uid";

export const NoteForm = ({submitNote}) => {

  const [note, setNote] = useState({});
  const [resetCounter, setResetCounter] = useState(0)

  useEffect(() => reset(), [])

  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setNote({ ...note, title: e.target.value })
        break
      case "desc":
        setNote({ ...note, desc: e.target.value })
        break
      case "priority":
        setNote({ ...note, priority: e.target.value })
        break
      case "status":
        setNote({ ...note, status: e.target.value })
        break
      default:
        break
    }
    console.log(`name: ${e.target.name} | value: ${e.target.value}`)
  }

  const reset = () => {
    setNote({
        id: uid(),
        title: "",
        desc: "",
        priority: 3,
        status: "Pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }   
    )
    setResetCounter(resetCounter + 1)  
  }

  const submit = (e) => {
    e.preventDefault()
    submitNote(note)
    reset()
    console.log(note)
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
          />
          <Input
            label={"Details"}
            fieldName="desc"
            onChangeHandler={onChangeHandler}
          />
          <Select
            label="Priority"
            fieldName="priority"
            options={[1, 2, 3, 4, 5]}
            onChangeHandler={onChangeHandler}
          />
          <Select
            label="Status"
            fieldName="status"
            options={["Pending", "InProgress", "Done", "Failed"]}
            onChangeHandler={onChangeHandler}
          />

          <button onClick={submit}>Submit</button>
          <button onClick={clear}>Clear</button>
          
        </form>        
    </div>
  )
}
