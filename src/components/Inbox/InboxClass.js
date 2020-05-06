import React, { Component } from 'react';
import './Inbox.css';
import taskAPI from '../../services/taskAPI'

class Inbox extends Component {
  state = {
    tasks: []
  }

  async componentDidMount() {
    const tasks = await taskAPI.index();
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div className='inbox'>
        <h2>Inbox <span role="img" aria-label="inbox">📥</span></h2>
        {this.state.tasks.map(task =>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
              {task.task}
            </label>
          </div>
          )
        }
      </div>
    );
  }
}

export default Inbox;