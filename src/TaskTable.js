import React from 'react'
import Table from 'react-bootstrap/Table';
import { TaskForm } from "./TaskForm/TaskForm";
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
              {isPriorityArrowAscending? (<ArrowUp className="pen" style={{ fontSize: '1.5em' }} onClick={sortByPriority}/>) : (<ArrowDown className="pen" style={{ fontSize: '1.5em' }} onClick={sortByPriority}/>)}
            </span>
          </th>
          <th>Status</th>
          <th>Created {' '}
            <span style={{ fontWeight: 'bold' }}>
              {isCreatedAscending? (<ArrowUp className="pen" style={{ fontSize: '1.5em' }} onClick={()=>sortBydate("created")}/>) : (<ArrowDown className="pen" style={{ fontSize: '1.5em' }} onClick={()=>sortBydate("created")}/>)}
            </span>
          </th>
          <th>Updated {' '}
            <span style={{ fontWeight: 'bold' }}>
              {isUpdatedAscending? (<ArrowUp className="pen" style={{ fontSize: '1.5em' }} onClick={()=>sortBydate("updated")}/>) : (<ArrowDown className="pen" style={{ fontSize: '1.5em' }} onClick={()=>sortBydate("updated")}/>)}
            </span>
          </th>
          <th>Due Date {' '}
            <span style={{ fontWeight: 'bold' }}>
              {isDueDateAscending? (<ArrowUp className="pen" style={{ fontSize: '1.5em' }} onClick={()=>sortBydate("dueDate")}/>) : (<ArrowDown className="pen" style={{ fontSize: '1.5em' }} onClick={()=>sortBydate("dueDate")}/>)}
            </span>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => {
          // Define styles based on task status
          const rowStyle = {
            textDecoration: task.status === 'Done' ? 'line-through' : (task.status === 'Failed' ? 'line-through' : 'none'),
            color: task.status === 'Done' ? 'green' : (task.status === 'Failed' ? 'red' : 'inherit')
            
          };

          return (
            <tr key={i} style={rowStyle}>
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
