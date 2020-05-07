import React, { useState, useEffect } from 'react';
import './WeeklyTasks.css';
import taskAPI from '../../services/taskAPI'

function WeeklyTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await taskAPI.index();
      setTasks(result);
    };
    fetchData();
  }, []);

  return (
    <div className='weeklyTasks'>
      <h2>Week <span role="img" aria-label="calendar">🗓</span></h2>
      <div className='btn btn-primary'>+ Add a task</div>
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