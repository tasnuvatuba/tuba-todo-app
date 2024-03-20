import React, {useEffect, useRef} from 'react'
import Form from 'react-bootstrap/Form';

export const Input = ({label, fieldName, type = "text", onChangeHandler, resetCounter, defaultValue, isTitleEmpty}) => {
  const input = useRef(null)
  useEffect(() => {
    if (input && input.current) {
      console.log(input.current.value)
      input.current.value = defaultValue ? defaultValue : ""
    }
  }, [resetCounter])
  return (
    
    <Form.Group className="mb-3" controlId={fieldName}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={fieldName} onChange={onChangeHandler} defaultValue={defaultValue} style={{ borderColor: isTitleEmpty ? "red" : "" }}/>
    </Form.Group>
    

    
  )
}
