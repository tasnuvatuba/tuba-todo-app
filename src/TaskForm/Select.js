import React, {useRef, useEffect} from 'react'

export const Select = ({fieldName, label, options, onChangeHandler, resetCounter}) => {
  const select = useRef(null)
  useEffect(() => {
    if (select && select.current) {
      console.log(select.current.value)
      select.current.value = ""
    }
  }, [resetCounter])
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <select ref={select} id={fieldName} name={fieldName} onChange={onChangeHandler}>
        {options.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
      </select>        
    </div>
  )
}
