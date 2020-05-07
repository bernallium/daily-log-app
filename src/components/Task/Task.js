import React from 'react';

const Task = ({task}) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
      <label className="form-check-label" for="defaultCheck1">
        {task.task}
      </label>
    </div>
  );
}

export default Task;