import { Container, Row, Col } from 'reactstrap';
import TasksList from '../features/tasks/TasksList';

const TaskPage = () => {
    return (
        <Container>
            <Row>
                <Col xs="3">
                    <h3>Tasks</h3>
                        <TasksList/>    
                </Col>
            </Row>       
        </Container>
    );
}

export default TaskPage;