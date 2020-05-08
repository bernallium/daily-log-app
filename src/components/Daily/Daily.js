import React from 'react';
import './Daily.css';
import Day from '../Day/Day';

const Daily = () => {

  const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const dd = String(today.getDate());
  const mm = String(today.getMonth() + 1); //January is 0!
  let dayOfWeek = DAYS_OF_WEEK[today.getDay()];
  let month = MONTHS[today.getMonth()];
  const currentWeek = getCurrentWeek();
  
  // Returns the string representation of a Date object as 'YYYYMMDD'
  function formatDate(dateObj) {
    let month = '' + (dateObj.getMonth() + 1);
    let day = '' + dateObj.getDate();
    const year = dateObj.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join(''); // Pass any character in join as as separator
  }

  // Retrurns an array of strings representing days of the current week (Mon-Fri) as 'YYYYMMDD'
  function getCurrentWeek() {
    const curr = new Date();
    const first = curr.getDate() - curr.getDay();
    const week = [];
  
    for (let i = 1; i < 7; i++) {
      let next = new Date(curr.getTime());
      next.setDate(first + i);
      next = formatDate(next);
      week.push(next);
    }
    return week;
  }

  return (
    <div className='daily'>
      {currentWeek.map(day => 
        <Day 
          day={day} 
        />
        )
      }
    </div>
  );
}

export default Daily;