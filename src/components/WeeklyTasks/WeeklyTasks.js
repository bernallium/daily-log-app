import React, { useState, useEffect } from 'react';
import './WeeklyTasks.css'
import taskAPI from '../../services/taskAPI'
import Task from '../Task/Task'

function WeeklyTasks() {
  let [tasks, setTasks] = useState([]);
  let [tasksLength, setTasksLength] = useState(0);
  let [newTask, updateNewTask] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await taskAPI.indexWeek();
      setTasks(result);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    updateNewTask(e.target.value);
  }

  const addTask = (e) => {
    // Need to prevent the browser from submitting the form when you click the button or hit
    e.preventDefault();
    console.log('addTask');
    taskAPI.create({task: newTask});
    updateNewTask('');
  };

    const deleteTask = (taskToDelete) => {
    setTasksLength(tasks.length - 1);
    taskAPI.delete(taskToDelete);
  }

  return (
    <div className='weekly-tasks'>
    <h2>Week <span role="img" aria-label="calendar">🗓</span></h2>
      <form className="form-group" onSubmit={addTask}>
        <input type="text" className="form-control" name="task" placeholder="+ Add a task"
          value={newTask}
          onChange={handleChange}
          required
        />
      </form>
      {tasks.map(task =>
        <Task task={task} deleteTask={deleteTask}/>
        )
      }
    </div>
  );
}

export default WeeklyTasks;