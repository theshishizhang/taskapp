import TaskCard from "./TaskCard";
import {Col, Row} from 'reactstrap';
import {TASKS} from "../../app/shared/TASKS";


const TasksList = () => {
    
    return (
        <Row className='ms-auto'>
            {TASKS.map((task) => {
                return (
                    <Col 
                        md='8' 
                        className='m-3' 
                        key={task.id}
                    >
                        <TaskCard className='bg-secondary' task={task} />
                    </Col>
                )
            })}
        </Row>
     ); 
};

export default TasksList;