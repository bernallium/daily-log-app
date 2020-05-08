import React from 'react';
import './Day.css'

const Day = ({dayName, YYYYMMDD}) => {

  const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // const today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // const dd = String(today.getDate());
  // const mm = String(today.getMonth() + 1); //January is 0!
  // let dayOfWeek = DAYS_OF_WEEK[today.getDay()];
  // let month = MONTHS[today.getMonth()];

  const getDD = () => {
    return YYYYMMDD.slice(-2);
  };

  const getMonth = () => {
    const monthNum = YYYYMMDD.slice(-4, -2);
    return MONTHS[parseInt(monthNum) - 1];
  }

  return (
    <div className='day'>
      <div className='day-header'>
        <h2 className='dd'>{getDD()}</h2>
        <div className='day-month-container'>
          <h3 className='day-of-week'>{dayName}</h3>
          <h3 className='month'>{getMonth()}</h3>
        </div>
      </div>
        <hr/>
        <p contentEditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sagittis nisl rhoncus mattis rhoncus urna neque. Nisl purus in mollis nunc. Quam pellentesque nec nam aliquam sem et tortor consequat. Hendrerit gravida rutrum quisque non tellus orci. Platea dictumst quisque sagittis purus sit amet volutpat consequat.</p>
        <div className='add-content'>+ Add content</div>
    </div>
  );
}

export default Day;