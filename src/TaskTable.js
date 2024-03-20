import React from 'react'
import Table from 'react-bootstrap/Table';
import { TaskForm } from "./TaskForm/TaskForm";
import Button from 'react-bootstrap/Button';
import { Trash } from "react-bootstrap-icons";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

export const TaskTable = ({tasks, deleteTask, updateTask, isPriorityArrowAscending, sortByPriority, isCreatedAscending, isUpdatedAscending, isDueDateAscending, sortBydate}) => {
  
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
          <th>Priority {'  '} 
            <span style={{ fontWeight: 'bold' }}>
              {isPriorityArrowAscending? (<ArrowUp onClick={sortByPriority}/>) : (<ArrowDown onClick={sortByPriority}/>)}
            </span>
          </th>
          <th>Status</th>
          <th>Created {' '}
            <span style={{ fontWeight: 'bold' }}>
              {isCreatedAscending? (<ArrowUp onClick={()=>sortBydate("created")}/>) : (<ArrowDown onClick={()=>sortBydate("created")}/>)}
            </span>
          </th>
          <th>Updated {' '}
            <span style={{ fontWeight: 'bold' }}>
              {isUpdatedAscending? (<ArrowUp onClick={()=>sortBydate("updated")}/>) : (<ArrowDown onClick={()=>sortBydate("updated")}/>)}
            </span>
          </th>
          <th>Due Date {' '}
            <span style={{ fontWeight: 'bold' }}>
              {isDueDateAscending? (<ArrowUp onClick={()=>sortBydate("dueDate")}/>) : (<ArrowDown onClick={()=>sortBydate("dueDate")}/>)}
            </span>
          </th>
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
              <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TaskForm submitTask={updateTask} defaultTask={task} label={"Update"} />
                <Trash className = "trash" style={{ fontSize: '1.5em' }} onClick={() => deleteTask(task.id)}>Delete</Trash>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
