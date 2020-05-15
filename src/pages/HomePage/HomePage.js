import React, { useState, useEffect } from 'react';
import './HomePage.css'
import Inbox from '../../components/Inbox/Inbox'
import Daily from '../../components/Daily/Daily'
import WeeklyTasks from '../../components/WeeklyTasks/WeeklyTasks'
import taskAPI from '../../services/taskAPI'
import dateService from '../../services/dateService'

const HomePage = () => {
  let [inboxTasks, setInboxTasks] = useState([]);
  let [weekTasks, setWeekTasks] = useState([]);
  let [tasksLength, setTasksLength] = useState(0);
  let [newInboxTask, updateNewInboxTask] = useState('');
  let [newWeekTask, updateNewWeekTask] = useState('');
  // const [showButton, setShow] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      const result = await taskAPI.index();
      const inboxTasks = result.filter(task => !task.dateMigrated);  // Tasks that have not been migrated
      const weekTasks = result.filter(task => task.dateMigrated);  // Tasks that have been migrated
      setInboxTasks(inboxTasks);
      setWeekTasks(weekTasks);
    };
    fetchData();
  }, [tasksLength]);

  // No array passed in --> Infinite fetch re-render loop (new tasks are also rendered), ie. runs once
  // ComponentDidMount: [] --> No infinite fetch, but no re-render when a new task is added
  // [tasks] --> Infinite fetch re-render loop (new tasks are rendered)
  // Try passing in some sort of counter?

  const handleInboxChange = (e) => {
    updateNewInboxTask(e.target.value);
  }

  const handleWeekChange = (e) => {
    updateNewWeekTask(e.target.value);
  }

  const addInboxTask = async (e) => {
    e.preventDefault(); // Need to prevent the browser from submitting the form when you click the button or hit
    await taskAPI.create({task: newInboxTask});
    setTasksLength(tasksLength + 1);
    updateNewInboxTask('');
  };

  const addWeekTask = (e) => {
    e.preventDefault();  // Need to prevent the browser from submitting the form when you click the button or hit
    taskAPI.create({task: newWeekTask, dateMigrated: dateService.getMondayOfWeek()});
    setTasksLength(tasksLength + 1);
    updateNewWeekTask('');
  };

  const deleteTask = async (taskToDelete) => {
    await taskAPI.delete(taskToDelete);
    setTasksLength(tasksLength - 1);
  }

  const migrateForward = async (task) => {
    task.dateMigrated = dateService.getMondayOfWeek();
    setTasksLength(tasksLength - 1);
    await taskAPI.update(task);
  }

  const migrateBack = async (task) => {
    task.dateMigrated = '';
    setTasksLength(tasksLength + 1);
    await taskAPI.update(task);
  }

  return (
    <div className='home'>
      <Inbox 
        inboxTasks = {inboxTasks}
        newInboxTask = {newInboxTask}
        handleInboxChange = {handleInboxChange}
        addInboxTask = {addInboxTask}
        deleteTask = {deleteTask}
        migrateForward = {migrateForward}
      />
      <WeeklyTasks 
        weekTasks = {weekTasks}
        newWeekTask = {newWeekTask}
        handleWeekChange = {handleWeekChange}
        addWeekTask = {addWeekTask}
        deleteTask = {deleteTask}
        migrateBack = {migrateBack}
      />
      <Daily />
    </div>
  ); 
}

export default HomePage;