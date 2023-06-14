import React, { useState } from 'react';
import { Button } from 'reactstrap';

//add Task is a function on the page
//maybe need to use useRef
const AddTask = ({ onCreate }) => {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskStatus, setNewTaskStatus] = useState();

    //add task function
    const handleAdd = () => {
        const newTaskData = {
            title: newTaskTitle,
            status: newTaskStatus
        }
        onCreate(newTaskData);
    }
    
    return (
        <div>
            <h2>Add new task</h2>
            <input
                placeholder='enter task title'
                value={newTaskTitle} 
                onChange={(event) => setNewTaskTitle(event.target.value)}
            />
            {/* Add Task Status */}
            <select name='status' value={newTaskStatus} onChange={(event) =>setNewTaskStatus(event.target.value)}>
                <option value="Open">Open</option>
                <option value="In Progress" selected>In Progress</option>
                <option value="Done">Done</option>
            </select>
            <br />
            {/* Add Task Submit Button */}
            <Button onClick={() => handleAdd()} className='btn-sm bg-primary'>Add new Task</Button>
    </div>
    )
};

export default AddTask;