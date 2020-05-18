import React from 'react';
import './Inbox.css';
import Task from '../Task/Task'

const Inbox = ({inboxTasks, newInboxTask, handleInboxChange, addInboxTask, deleteTask, migrateForward}) => {
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
          key={task._id}
          task={task} 
          deleteTask={deleteTask}
          migrateForward={migrateForward}
        />
      )}
    </div>
  );
}

export default Inbox;