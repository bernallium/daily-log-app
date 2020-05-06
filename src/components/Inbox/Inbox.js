import React, { useState, useEffect } from 'react';
import './Inbox.css';
import taskAPI from '../../services/taskAPI'
// import userService from '../../services/userService';

function Inbox() {
  const [tasks, setTasks] = useState([]);
  
  // const [tasks, setTasks] = useState(taskAPI.index());
  // console.log(tasks);

  // useEffect(async () => {
  //   const tasks = await taskAPI.index();
  //   console.log(tasks);
  // }, []);


  // useEffect(() => {
  //   async function fetchData() {
  //     const tasks = await taskAPI.index();
  //     setTasks(tasks.tasks);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await taskAPI.index();
      setTasks(result);
      // console.log(tasks);
    };
    fetchData();
  }, []);

  // console.log(tasks);

  return (
    // <div>
    //   <h2>Inbox</h2>
    //   {/* <ul>
    //     {tasks.taskArray.map(task =>
    //       <li>{task}</li>
    //       )
    //     }
    //   </ul> */}
    // </div>
    <div className='inbox'>
      <h2>Inbox <span role="img" aria-label="inbox">📥</span></h2>
      <div> + Add a task</div>
      <br></br>
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