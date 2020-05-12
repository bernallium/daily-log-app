import React from 'react';
import './HomePage.css'
import Inbox from '../../components/Inbox/Inbox'
import Daily from '../../components/Daily/Daily'
import WeeklyTasks from '../../components/WeeklyTasks/WeeklyTasks'

const HomePage = () => {
  return (
    <div className='home'>
      <Inbox />
      <WeeklyTasks />
      <Daily />

    </div>
  ); 
}

export default HomePage;