import React from 'react';
import './Task.css'

const Task = ({task, deleteTask}) => {
  return (
    <div className='task'>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" for="defaultCheck1">{task.task}</label>
      </div>
      <i className="far fa-trash-alt delete" onClick={() => deleteTask(task)}></i>
    </div>
  );
}

export default Task;