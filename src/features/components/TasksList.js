import React, {useState} from 'react';
import AddTask from './AddTask';
import { TASKS } from './TASKS';
import TaskCard from './TaskCard';

//TasksList will display all TaskCards and handles AddTask
const TasksList = ({ taskList, onDelete, onUpdate}) => {   

    return (
        <div>
          <h1>Tasks</h1>
          {taskList.map(task => (
        <div key={task.id}>
            <TaskCard task={task} onDelete={onDelete} onUpdate={onUpdate}/> 
       </div>
       ))}
      </div>
    )
};

export default TasksList;