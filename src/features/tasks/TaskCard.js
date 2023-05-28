import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import {TASKS} from "../../app/shared/TASKS";

const TaskCard = () => {
    const [taskList, setTaskList] = useState(TASKS);
  
    //delete task function
    const deleteTask = (id) => {
      setTaskList(taskList.filter(task => task.id !== id))
    }
  
    //add task function
    return (
      <>
            {taskList.map(task => (
            <div key={task.id}>
                <Card style={{width: '18rem', border: '1px solid #ccc', padding: "20px", margin: "10px"}}>
                  <CardBody>
                    <CardTitle tag="h5">
                    {task.name} 
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Status: {task.status}
                    </CardSubtitle>
                    <CardText>
                    Description: {task.description}
                    </CardText>
                  </CardBody>
                  <Button onClick={()=> deleteTask(task.id)} className='btn-sm bg-primary mr-10'>Delete Task</Button>
                  <Button className='btn-sm bg-primary ml-10'>Update Task</Button> 
                </Card>     
           </div>
            ))}
            </>
    );
  };

export default TaskCard;