// src/components/AddEventForm.js
import React, { useState } from 'react';
import './Events.css';


const TeacherEvents = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  /*const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventData = {
      title,
      description,
      date
    };

    axios.post('/api/events', eventData)
      .then(response => {
        alert('Event added successfully!');
      })
      .catch(error => {
        console.error("There was an error adding the event!", error);
      });
  };
  */

  return (
    <form className='events-form' >
      <h3>Add Event</h3>
      
      <div className='events-title'>
        <label>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>

      <div className='events-description'>
        <label>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>

      <div className='events-date'>
        <label>Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
      </div>

      <button type="submit">Submit Event</button>
    </form>
  );
};

export default TeacherEvents;
