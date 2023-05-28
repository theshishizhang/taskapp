import React, { useState } from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import TaskPage from './pages/TaskPage';
import { TASKS } from './app/shared/TASKS';

function App() {
  //return function showing components on the page
  //Todo - Update Task
  const [taskList, setTaskList] = useState(TASKS);

  const addTask = () => {
    //TODO - add formik
    const newTask = {
      id: taskList.length,
      title: "Phase 1 user testing",
      status: "Done",
      description: "Some quick example text to build on the card title and make up the bulk of the card‘s content."
    }

    setTaskList([...taskList, newTask]);

} 

  return (
    <Container>
      <Row>
        <Col>
        <TaskPage/>
        </Col>
        <Col className='mt-10px'>
        <Button onClick={()=> addTask()} className='btn-sm bg-primary'>Add new Task</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;