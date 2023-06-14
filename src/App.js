import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import TasksList from './features/components/TasksList';
import { TASKS } from './features/components/TASKS';
import AddTask from './features/components/AddTask';

function App() {
  const [taskList, setTaskList] = useState(TASKS);

  //delete Task
  const deleteTask = (idToDelete) => {
    setTaskList(taskList.filter(task => task.id !== idToDelete))
  }

  //add Task
  const addTask = (newTaskData) => {
    const newTaskItem = {
    id: taskList.length,
    ...newTaskData
  }
  setTaskList(taskList.concat(newTaskItem))
};

//update Task
  const updateTask = (updatedTaskData) => {
    setTaskList(taskList.map(task => (task.id === updatedTaskData.id) ? {...task, ...updatedTaskData} : task)) //if the new data id === the task id, update the task, if not, save the same task
  }



  return (
    <>
      <TasksList taskList={taskList} onDelete={deleteTask} onUpdate={updateTask}/>
      <AddTask taskList={taskList} onCreate={addTask}/>
    </>
  )
};

>>>>>>> temp

export default App;
