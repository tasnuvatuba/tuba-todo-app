import React from 'react'

export const Select = ({fieldName, label, options, onChangeHandler}) => {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <select id={fieldName} name={fieldName} onChange={onChangeHandler}>
        {options.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
      </select>        
    </div>
  )
}
