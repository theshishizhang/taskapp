import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'reactstrap';

//update task is a button on TaskCard
const UpdateTask = ({ task, onUpdate }) => {
  const { id, title } = task
    //update Task
  const [updatedTaskTitle, setUpdatedTaskTitle] = useState('');
  const [updatedTaskStatus, setUpdatedTaskStatus] = useState();

  const handleUpdate = () => {
      const updatedTaskData = {
        id: id, 
        title: updatedTaskTitle,
        status: updatedTaskStatus
    }
    onUpdate(updatedTaskData)
    setModalOpen(false);
  };

  //update Task Modal state
  const [modalOpen, setModalOpen] = useState(false); 

return(
    <div>
    <Button onClick={() => setModalOpen(true)} className='btn-sm bg-primary ml-10'>Update Task</Button> 
    <Modal style={{ width: '100px' }} isOpen={modalOpen}>
        <h1>Update Task</h1>
        {/* input field for title change*/}
        <input
            placeholder={title}
            value={updatedTaskTitle} 
            onChange={(event) =>setUpdatedTaskTitle(event.target.value)}
        />
        <select value={updatedTaskStatus} onChange={(event) =>setUpdatedTaskStatus(event.target.value)}>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Done</option>
        </select>
        <br />
        <button onClick={() => handleUpdate()}>Save</button>
        <button onClick={() => setModalOpen(false)}>Close</button>
    </Modal>
    </div>
    )
};

export default UpdateTask;