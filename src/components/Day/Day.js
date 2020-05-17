import React, { useState, useEffect } from 'react';
import './Day.css'
import noteAPI from '../../services/noteAPI.js'
import dateService from '../../services/dateService.js'

const Day = ({dayName, YYYYMMDD}) => {

  // const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // const today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // const dd = String(today.getDate());
  // const mm = String(today.getMonth() + 1); //January is 0!
  // let dayOfWeek = DAYS_OF_WEEK[today.getDay()];
  // let month = MONTHS[today.getMonth()];

  const [notes, setNotes] = useState([]);
  let [notesLength, setNotesLength] = useState(0);
  let [newNote, updateNewNote] = useState('');
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await noteAPI.showDay(YYYYMMDD);
      setNotes(result);
    };
    fetchData();
  }, [notesLength]);

  const handleChange = (e) => {
    updateNewNote(e.target.value);
  }

  const addNote = async (e) => {
    // Need to prevent the browser from submitting the form when you click the button or hit
    e.preventDefault();
    console.log('addNote');
    await noteAPI.create({
      note: newNote,
      date: YYYYMMDD
    });
    setNotesLength(notesLength + 1);
    updateNewNote('');
  };

  const deleteNote = async (noteToDelete) => {
    await noteAPI.delete(noteToDelete);
    setNotesLength(notesLength - 1);
  }

  return (
    <div className='day' id={`${YYYYMMDD === dateService.getToday() ? 'today-day' : `${dayName}-day`}`}>
      <div className='day-header'>
        <h2 className='dd' id={`${YYYYMMDD === dateService.getToday() ? 'today-dd' : `${dayName}-dd`}`}>{dateService.getDD(YYYYMMDD)}</h2>
        <div className='day-month-container'>
          <h3 className='day-name' id={`${YYYYMMDD === dateService.getToday() ? 'today-day-name' : `${dayName}-day-name`}`}>{dayName}</h3>
          <h3 className='month' id={`${YYYYMMDD === dateService.getToday() ? 'today-month' : `${dayName}-month`}`}>{dateService.getMonth(YYYYMMDD)}</h3>
        </div>
      </div>
      <div className='notes-container'>
        <ul>
          {notes.map(note=>
            <div className='note'>
              <li>{note.note}</li>
              <i className="far fa-trash-alt delete" onClick={() => deleteNote(note)}></i>
            </div>
            )
          }
        </ul>
        <form className="form-group" onSubmit={addNote}>
          <div className='plus-symbol'>+</div>
          <input type="text" className="form-control" placeholder="Add a note"
            value={newNote}
            onChange={handleChange}
            required
          />
        </form>
      </div>
    </div>
  );
}

export default Day;