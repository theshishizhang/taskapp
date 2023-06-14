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

export default App;
