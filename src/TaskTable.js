import React from 'react'


export const TaskTable = (props) => {
  const tasks = props.tasks
  const deleteTask = props.deleteTask
  const updateTask = props.updateTask

  const submitDelete = (task) =>{
    deleteTask(task.id)
  }
  
  return (
    <table>
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
                <button onClick={() => updateTask(task.id)}>Update</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                {/* <button onClick={submitDelete(task)}>Delete</button> */}

              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
