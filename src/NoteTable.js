import React from 'react'

export const NoteTable = (props) => {
  const notes = props.notes
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, i) => {
          return (
            <tr key={i}>
              <td>{note.title}</td>
              <td>{note.desc}</td>
              <td>{note.priority}</td>
              <td>{note.status}</td>
              <td>{note.createdAt}</td>
              <td>{note.updatedAt}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
