import React, {useRef, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const FormDatePicker = ({label, defaultValue, resetCounter, onChangeHandler}) => {
  console.log("inside form date picker")
  const select = useRef(null)
  useEffect(() => {
    if (select && select.current) {
      console.log(select.current.value)
      select.current.value = defaultValue
    }
  }, [resetCounter])

  const handleDateChange = (date) => {
    // Call the onChangeHandler callback with the selected date value
    console.log(date)
    onChangeHandler({ target: { name: 'dueDate', value: date } });
  };
  return (
    <div>
        <label htmlFor="datePicker" className="col-sm-2 col-form-label">{label}</label>
        <div className="col-sm-10">
        <DatePicker
          selected={defaultValue}
          onChange={handleDateChange}
          className="form-control" // Apply Bootstrap form-control class
          dateFormat="dd/MM/yyyy" // Customize date format if needed
        />
        </div>
    </div>
  )
}
