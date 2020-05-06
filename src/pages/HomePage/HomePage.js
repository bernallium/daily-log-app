import React from 'react';
import './HomePage.css'
import Inbox from '../../components/Inbox/Inbox'
import Daily from '../../components/Daily/Daily'

const HomePage = () => {
  return (
    <div className='home'>
      <Inbox />
      <Daily />
    </div>
  ); 
}

export default HomePage;