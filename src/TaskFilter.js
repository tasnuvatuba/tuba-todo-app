import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export const TaskFilter = ({filterTasks}) => {
    return (
        <div className='badge-container'>
            <Stack direction="horizontal" gap={2}>
                <Badge pill onClick={()=>filterTasks('None')}>
                    All
                </Badge>
                <Badge pill onClick={()=>filterTasks('Pending')}>
                    Pending
                </Badge>
                <Badge pill onClick={()=>filterTasks('InProgress')}>
                    In Progress
                </Badge>
                <Badge pill onClick={()=>filterTasks('Done')}>
                    Done
                </Badge>
                <Badge pill onClick={()=>filterTasks('Failed')}>
                    Failed
                </Badge>
            
            </Stack>
        </div>
        
      );
}
