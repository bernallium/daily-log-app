import React, { useState, useEffect } from 'react';
import './Day.css'
import noteAPI from '../../services/noteAPI.js'

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

  let [notes, setNotes] = useState([]);
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

  const addNote = (e) => {
    // Need to prevent the browser from submitting the form when you click the button or hit
    e.preventDefault();
    console.log('addNote');
    setNotesLength(notes.length + 1);
    noteAPI.create({
      note: newNote,
      date: YYYYMMDD
    });
    updateNewNote('');
  };

  const deleteNote = (noteToDelete) => {
    setNotesLength(notes.length - 1);
    noteAPI.delete(noteToDelete);
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
          <input type="text" className="form-control" name="task" placeholder="+ Add a content"
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