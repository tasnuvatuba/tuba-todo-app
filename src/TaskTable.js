import React from 'react'

export const TaskTable = (props) => {
  const tasks = props.tasks
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
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
