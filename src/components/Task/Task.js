import React, { useState } from 'react';
import './Task.css'
import taskAPI from '../../services/taskAPI';
import dateService from '../../services/dateService';

const Task = ({task, deleteTask, migrateForward, migrateBack}) => {
  const [isComplete, setComplete] = useState(task.complete ? true : false);

  const handleCheck = async (e) => {
    setComplete(e.target.checked);
    task.complete = !task.complete? dateService.getToday() : ''; 
    await taskAPI.update(task);
  }

  return (
    <div className='task'>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" checked={isComplete} onChange={handleCheck}/>
        <label className="form-check-label">{task.task}</label>
      </div>
      <div className='button-container'>
        <i className="far fa-trash-alt delete" onClick={() => deleteTask(task)}></i>
        {/* Only display migrate button for tasks in the Inbox component */}
        {migrateForward ? 
          <i className="fas fa-angle-double-right" onClick={() => migrateForward(task)}></i>
          :
          <i className="fas fa-angle-double-left" onClick={() => migrateBack(task)}></i>
        }
      </div>
    </div>
  );
}

export default Task;