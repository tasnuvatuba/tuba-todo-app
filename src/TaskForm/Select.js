import React, {useRef, useEffect} from 'react'
import { Form } from 'react-bootstrap';

export const Select = ({fieldName, label, options, onChangeHandler, resetCounter, defaultValue}) => {
  const select = useRef(null)
  useEffect(() => {
    if (select && select.current) {
      console.log(select.current.value)
      select.current.value = defaultValue
    }
  }, [resetCounter])
  return (
    <Form.Group controlId={fieldName}>
      <Form.Label>{label}</Form.Label>
      <Form.Select name={fieldName} onChange={onChangeHandler} className="mb-3" defaultValue={defaultValue}>
        {options.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
      </Form.Select>
    </Form.Group>

  )
}
