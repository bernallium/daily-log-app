import React, { useState, useEffect } from 'react';
import './WeeklyTasks.css';
import taskAPI from '../../services/taskAPI'

function WeeklyTasks() {
  let [tasks, setTasks] = useState([]);
  let [newTask, updateNewTask] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await taskAPI.index();
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

  return (
    <div className='weeklyTasks'>
      <h2>Week <span role="img" aria-label="calendar">🗓</span></h2>
      {/* <div className='btn btn-primary'>+ Add a task</div> */}
      <form className="form-group" onSubmit={addTask}>
        <input type="text" className="form-control" name="task" placeholder="+ Add a task"
          value={newTask}
          onChange={handleChange}
          required
        />
      </form>
      {tasks.map(task =>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
          <label className="form-check-label" for="defaultCheck1">
            {task.task}
          </label>
        </div>
        )
      }
    </div>
  );
}

export default WeeklyTasks;