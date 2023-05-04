import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, Button } from 'reactstrap';
import {TASKS} from "../../app/shared/TASKS";

const TaskCard = ({ task }) => {
    const { id, name, dueDate } = task;
   

    // const deleteCard = () => {
    //     setTaskId(TASKS.filter(task => task.id !== id ))
    // }

    return (
        <Card color='light'>
            <CardBody>
                <CardTitle tag='h5'><br />Task: {name}</CardTitle>
                <CardSubtitle className='mb-2 text-muted' tag='h6'><br />Due Date: {dueDate}</CardSubtitle>   
                <Button className='btn-sm bg-primary'>Edit</Button>
                {/* <Button onClick={() => deleteCard(task.id)}className='btn-sm bg-danger'>Delete</Button>   */}
            </CardBody>
        </Card>
    );
};

export default TaskCard;