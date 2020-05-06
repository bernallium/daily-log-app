import React, { useState } from 'react';
import './Inbox.css';
import {Route, NavLink, Switch} from 'react-router-dom';

function Inbox() {
  const [user, setUser] = useState(userService.getUser());

  return (
    <H1>Tasks</H1>
  );
}

export default TaskList;