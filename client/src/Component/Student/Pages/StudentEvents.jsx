// src/components/AddEventForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css'

const StudentEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/events');
        if (response.data.length === 0) {
          console.log('No events found');
        } else {
          setEvents(response.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllEvents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='student-events'>
      <div>
        <h2>Event List</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Location: {event.location}</p>
              <p>Target Audience: {event.targetAudience}</p>
              <p>Date: {event.start}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentEvents;