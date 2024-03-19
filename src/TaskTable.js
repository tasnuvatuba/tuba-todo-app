import React from 'react'
import Table from 'react-bootstrap/Table';
import { TaskForm } from "./TaskForm/TaskForm";
import Button from 'react-bootstrap/Button';



export const TaskTable = ({tasks, deleteTask, updateTask}) => {
  
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => {
          return (
            <tr key={i}>
              <td>{task.title}</td>
              <td>{task.desc}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>{task.createdAt}</td>
              <td>{task.updatedAt}</td>
              <td>{task.dueDate}</td>
              <td>
                <TaskForm submitTask={updateTask} defaultTask={task} label={"Update"} />
                <Button variant="outline-danger" size = 'sm' onClick={() => deleteTask(task.id)}>Delete</Button>
                {console.log(tasks)}
                {/* <button onClick={submitDelete(task)}>Delete</button> */}

              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
