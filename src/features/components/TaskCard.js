import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import UpdateTask from './UpdateTask';

//TaskCard will handle update and delete tasks
const TaskCard = ({ task, onDelete, onUpdate }) => {
    const { id, title, status } = task;

    return(
        <Card style={{width: '18rem', border: '1px solid #ccc', padding: "20px", margin: "10px"}}>
              <CardBody>
                <CardTitle tag="h5">
                {title} 
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                Status: {status}
                </CardSubtitle>
                <CardText>
                </CardText>
              </CardBody>
              <Button onClick={() => onDelete(task.id)} className='btn-sm bg-primary mr-10'>Delete Task</Button>
              <UpdateTask onUpdate={onUpdate} task={task}/> 
        </Card>        
    )
};

export default TaskCard;