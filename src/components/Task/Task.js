import React from 'react';
import './Task.css'

const Task = ({task, deleteTask, migrateTask}) => {
  return (
    <div className='task'>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" for="defaultCheck1">{task.task}</label>
      </div>
      <div className='button-container'>
        <i className="far fa-trash-alt delete" onClick={() => deleteTask(task)}></i>
        {/* Only display migrate button for tasks in the Inbox component */}
        {migrateTask && <i className="fas fa-angle-double-right migrate" onClick={() => migrateTask(task)}></i>}
      </div>
    </div>
  );
}

export default Task;