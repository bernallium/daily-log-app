import React from 'react';
import './WeeklyTasks.css'
import Task from '../Task/Task'
import dateService from '../../services/dateService.js'


const WeeklyTasks = ({weekTasks, newWeekTask, handleWeekChange, addWeekTask, deleteTask, migrateBack}) => {
  // let [tasks, setTasks] = useState([]);
  // let [tasksLength, setTasksLength] = useState(0);
  // let [newTask, updateNewTask] = useState('');
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await taskAPI.indexWeek();
  //     setTasks(result);
  //   };
  //   fetchData();
  // }, []);

  // const handleChange = (e) => {
  //   updateNewTask(e.target.value);
  // }

  // const addTask = (e) => {
  //   // Need to prevent the browser from submitting the form when you click the button or hit
  //   e.preventDefault();
  //   console.log('addTask');
  //   taskAPI.create({task: newTask});
  //   updateNewTask('');
  // };

  //   const deleteTask = (taskToDelete) => {
  //   setTasksLength(tasks.length - 1);
  //   taskAPI.delete(taskToDelete);
  // }

  const weekHeader = `${dateService.getMonth(dateService.getFirstDayOfWeek())} 
  ${dateService.getDD(dateService.getFirstDayOfWeek())} 
  - ${dateService.getMonth(dateService.getFirstDayOfWeek()) === dateService.getMonth(dateService.getLastDayOfWeek()) ? `` : `dateService.getMonth(sunday)`} 
  ${dateService.getDD(dateService.getLastDayOfWeek())} 
  ${dateService.getFirstDayOfWeek().slice(0, 4)}`

  return (
    <div className='weekly-tasks'>
    <h2>Week <span role="img" aria-label="calendar">🗓</span></h2>
    <h3>{weekHeader} </h3>
      <form className="form-group" autoComplete="off" onSubmit={addWeekTask}>
        <input type="text" className="form-control" name="task" placeholder="+ Add a task"
          value={newWeekTask}
          onChange={handleWeekChange}
          required
        />
      </form>
      {weekTasks.map(task =>
        <Task
          key={task._id}
          task={task} 
          deleteTask={deleteTask} 
          migrateBack={migrateBack}
        /> 
      )}
    </div>
  );
}

export default WeeklyTasks;