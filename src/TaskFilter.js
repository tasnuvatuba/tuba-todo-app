import React from 'react'
import Form from 'react-bootstrap/Form';


export const TaskFilter = ({filterTasks}) => {
    //const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (e) => {
        const status = e.target.value;
        console.log(status)
        filterTasks(status);

    };

    return (
        <Form.Group controlId="taskFilter">
            <Form.Label>Filter by Status:</Form.Label>
            <Form.Select onChange={handleStatusChange}>
            <option value="none">None</option>
            <option value="pending">Pending</option>
            <option value="done">Done</option>
            <option value="in progress">In Progress</option>
            <option value="failed">Failed</option>
            </Form.Select>
        </Form.Group>
    )
}
