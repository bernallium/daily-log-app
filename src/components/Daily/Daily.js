import React from 'react';
import './Daily.css';
import Day from '../Day/Day';
import dateService from '../../services/dateService'

const Daily = () => {
  return (
    <div className='daily'>
      {dateService.getCurrentWeek().map(dayObj => 
        <Day
          {...dayObj}
          key={dayObj.YYYYMMDD}
          // dayName={dayObj.dayName} 
          // YYYYMMDD={dayObj.YYYYMMDD}
        />
        )
      }
    </div>
  );
}

export default Daily;