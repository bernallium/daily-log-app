import React, { useState, useEffect } from 'react';
import './Inbox.css';
import taskAPI from '../../services/taskAPI'

function Inbox() {
  let [tasks, setTasks] = useState([]);
  let [newTask, updateNewTask] = useState('');
  // const [showButton, setShow] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      const result = await taskAPI.index();
      setTasks(result);
    };
    fetchData();
  }, [tasks]);

  // const handleChange = e => {
  //   e.persist();
  //   let formInvalid = !this.formRef.current.checkValidity(); // <--
  //   this.setState(state => ({
  //     newSkill: {
  //       ...state.newSkill,
  //       [e.target.name]: e.target.value
  //     },
  //     formInvalid: formInvalid // Check validity of the entire form (need to use a form ref since it's not available within the event target in the handleChange method)
  //   }));
  // };

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
    <div className='inbox'>
      <h2>Inbox <span role="img" aria-label="inbox">📥</span></h2>
      {/* {showButton && <div className='btn btn-primary' onClick={() => setShow(false)}>+ Add a task</div>} */}
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

export default Inbox;