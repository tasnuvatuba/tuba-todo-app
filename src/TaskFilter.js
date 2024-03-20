import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { TaskForm } from "./TaskForm/TaskForm";

export const TaskFilter = ({filterTasks, addTask, onSearchTermChangeHandler, searchTerm}) => {
    return (
        <div>
            <Stack direction="horizontal" gap={2}>
                <TaskForm submitTask={addTask} label="Add Task" />
                <Form.Control type="text" placeholder="Search by title..." onChange={onSearchTermChangeHandler} value={searchTerm}/>
                <Button variant="outline-dark" onClick={()=>filterTasks('None')}>
                    All
                </Button>
                <Button variant="outline-secondary" onClick={()=>filterTasks('Pending')}>
                    Pending
                </Button>
                <Button variant="outline-primary" onClick={()=>filterTasks('InProgress')}>
                    InProgress
                </Button>
                <Button variant="outline-success" onClick={()=>filterTasks('Done')}>
                    Done
                </Button>
                <Button variant="outline-danger" onClick={()=>filterTasks('Failed')}>
                    Failed
                </Button>
                
            </Stack>
        </div>
        
      );
}
