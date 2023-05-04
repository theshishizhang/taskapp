import { Container, Row, Col } from 'reactstrap';
import TasksList from '../features/tasks/TasksList';
import DetailCard from '../features/tasks/DetailCard';
import NewCard from '../features/tasks/NewCard';
import { selectedTaskById } from '../features/tasks/TasksSlice';
import { useState } from 'react';


const TaskPage = () => {
    const [TaskId, setTaskId] = useState(0);
    const selectedTask = selectedTaskById(TaskId)

    //add task
    function AddTask() {
        function addTask() {
            <NewCard />
            console.log('newCard');
        };
        return( 
            <>
            <button onClick={addTask}className='bg-success'>Add Task</button>
            
            </>
        );  
    };

    return (
        <Container>
            <Row>
                <Col xs="3">
                    <h3>Tasks</h3>
                    <TasksList setTaskId={setTaskId} />
                </Col>
                <Col xs="9">
                    <h3>Detailed View</h3>
                    <DetailCard task={selectedTask} />
                    <AddTask />
                </Col>    
            </Row>       
        </Container>
    );
};

export default TaskPage;