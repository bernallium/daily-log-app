import React from 'react';
import './Inbox.css';
import Task from '../Task/Task'

const Inbox = ({inboxTasks, newInboxTask, handleInboxChange, addInboxTask, deleteTask, migrateTask}) => {
  return (
    <div className='inbox'>
      <h2>Inbox <span role="img" aria-label="inbox">📥</span></h2>
      {/* {showButton && <div className='btn btn-primary' onClick={() => setShow(false)}>+ Add a task</div>} */}
      <form className="form-group" autocomplete="off" onSubmit={addInboxTask}>
        <input type="text" className="form-control" name="task" placeholder="+ Add a task"
          value={newInboxTask}
          onChange={handleInboxChange}
          required
        />
      </form>
      {inboxTasks.map(task =>
        <Task 
          task={task} 
          deleteTask={deleteTask}
          migrateTask={migrateTask}
        />
        // <div className="form-check">
        //   <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        //   <label className="form-check-label" for="defaultCheck1">
        //     {task.task}
        //   </label>
        // </div>
        // <div class="custom-control custom-checkbox">
        //   <input type="checkbox" class="custom-control-input" id="customControlValidation1" required/>
        //   <label class="custom-control-label" for="customControlValidation1">{task.task}</label>
        // </div>
        )
      }
    </div>
  );
}

export default Inbox;