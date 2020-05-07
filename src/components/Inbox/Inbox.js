import React, { useState, useEffect } from 'react';
import './Inbox.css';
import taskAPI from '../../services/taskAPI'

function Inbox() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await taskAPI.index();
      setTasks(result);
      // console.log(tasks);
    };
    fetchData();
  }, []);

  return (
    <div className='inbox'>
      <h2>Inbox <span role="img" aria-label="inbox">📥</span></h2>
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

export default Inbox;