import TaskCard from "./TaskCard";
import {Col, Row} from 'reactstrap';
import { selectAllTasks } from './TasksSlice';

const TasksList = ({ setTaskId }) => {
    const tasks = selectAllTasks();
    
    return (
        <Row className='ms-auto'>
            {tasks.map((task) => {
                return (
                    <Col 
                        md='8' 
                        className='m-3' 
                        key = {task.id}
                        onClick={() => setTaskId(task.id)}
                    >
                        <TaskCard className='bg-secondary' task={task} />
                    </Col>
                )
            })}
        </Row>
     );
        
};

export default TasksList;