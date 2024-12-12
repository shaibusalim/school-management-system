const Event = require('../models/eventModel');


  const getAllEvents = async (req, res) => {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching events' });
    }
  }

  const createEvent = async (req, res) => {
    const { title, description, location, target_audience, date } = req.body;
  
    if (!title || !description || !location || !target_audience || !date ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      const event = await Event.create({
        title,
        description,
        location,
        target_audience,
        date
      });
      res.json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating event' });
    }
  };

 const  getEventById = async(req, res) => {
    try {
      const event = await Event.findByPk(req.params.id);
      if (!event) {
        res.status(404).json({ message: 'Event not found' });
      } else {
        res.json(event);
      }
    } catch (err) {
      res.status(500).json({ message: 'Error fetching event' });
    }
  }

 const updateEvent = async (req, res) => {
    try {
      const event = await Event.findByPk(req.params.id);
      if (!event) {
        res.status(404).json({ message: 'Event not found' });
      } else {
        await event.update(req.body);
        res.json(event);
      }
    } catch (err) {
      res.status(500).json({ message: 'Error updating event' });
    }
  }

  const deleteEvent =async (req, res) => {
    try {
      const event = await Event.findByPk(req.params.id);
      if (!event) {
        res.status(404).json({ message: 'Event not found' });
      } else {
        await event.destroy();
        res.json({ message: 'Event deleted' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error deleting event' });
    }
  }


module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
}