import React from 'react'

export const Input = ({label, fieldName, type = "text", onChangeHandler}) => {
  return (
    <div>
        <label htmlFor={fieldName}>{label}:</label>
        <input type={type} id={fieldName} name={fieldName} onChange={onChangeHandler}/>
    </div>
  )
}
