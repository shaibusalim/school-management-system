// src/components/CreateEventForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';

const Events = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [date, setDate] = useState('');
const [editDate, setEditDate] = useState('');
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventId, setEventId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editLocation, setEditLocation] = useState('');
  const [editTargetAudience, setEditTargetAudience] = useState('');
  const [editStart, setEditStart] = useState('');
  const [editEnd, setEditEnd] = useState('');

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/events', {
        title,
        description,
        location,
        targetAudience,
        date,
      });
      console.log(response.data);
      setTitle('');
      setDescription('');
      setLocation('');
      setTargetAudience('');
      setDate('');
      setEvents([...events, response.data]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/events/${id}`);
      setEventId(response.data._id);
      setEditTitle(response.data.title);
      setEditDescription(response.data.description);
      setEditLocation(response.data.location);
      setEditTargetAudience(response.data.targetAudience);
      setEditDate(response.data.date)
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/events/${eventId}`, {
        title: editTitle,
        description: editDescription,
        location: editLocation,
        targetAudience: editTargetAudience,
        date: editDate,
      });
      setEvents(
        events.map((event) =>
          event._id === eventId
            ? {
                _id: eventId,
                title: editTitle,
                description: editDescription,
                location: editLocation,
                targetAudience: editTargetAudience,
                date:editDate,
              }
            : event
        )
      );
      setEventId(null);
      setEditTitle('');
      setEditDescription('');
      setEditLocation('');
      setEditTargetAudience('');
      setEditDate('')
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      setEvents(events.filter((event) => event._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
     <div className="create-event-form">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          
          <label htmlFor="targetAudience">Target Audience:</label>
          <input
            type="text"
            id="targetAudience"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="start">Date:</label>
          <input
            type="Date"
            id="start"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Create Event</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
     
     
    </div>

    <div className='events-table'>
      <h2>Events</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Target Audience</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.location}</td>
                <td>{event.targetAudience}</td>
                <td>{event.start}</td>
                <td>{event.end}</td>
                <td>
                  <button onClick={() => handleEdit(event._id)}>Edit</button>
                  <button onClick={() => handleDelete(event._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {eventId && (
        <form onSubmit={handleUpdate}>
          <h2>Edit Event</h2>
          <div className="form-group">
            <label htmlFor="editTitle">Title:</label>
            <input
              type="text"
              id="editTitle"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editDescription">Description:</label>
            <textarea
              id="editDescription"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editLocation">Location:</label>
            <input
              type="text"
              id="editLocation"
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editTargetAudience">Target Audience:</label>
            <input
              type="text"
              id="editTargetAudience"
              value={editTargetAudience}
              onChange={(e) => setEditTargetAudience(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editStart">Start Date:</label>
            <input
              type="datetime-local"
              id="editStart"
              value={editStart}
              onChange={(e) => setEditStart(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editEnd">End Date:</label>
            <input
              type="datetime-local"
              id="editEnd"
              value={editEnd}
              onChange={(e) => setEditEnd(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update Event</button>
        </form>
      )}
      </div>

    </div>
    
  );
};

export default Events;