import React from 'react';
import './Daily.css';
import Day from '../Day/Day';

const Daily = () => {
  const DAYS_OF_WEEK = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
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

  // Retrurns an array of objects representing days of the current week (Mon-Fri) as 'YYYYMMDD'
  function getCurrentWeek() {
    const curr = new Date();
    const first = curr.getDate() - curr.getDay();
    const week = [];
  
    for (let i = 1; i < 8; i++) {
      let next = new Date(curr.getTime());
      next.setDate(first + i);
      next = formatDate(next);
      const dayName = DAYS_OF_WEEK[i - 1];
      week.push({
        dayName: dayName,
        YYYYMMDD: next
      });
    }
    return week;
  }

  return (
    <div className='daily'>
      {currentWeek.map(dayObj => 
        <Day 
          dayName={dayObj.dayName} 
          YYYYMMDD={dayObj.YYYYMMDD}
        />
        )
      }
    </div>
  );
}

export default Daily;