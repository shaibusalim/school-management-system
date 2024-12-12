const Notification = require('../models/notificationModel');


const createNotification = async (req, res) => {
  const { message, targetRole, isRead } = req.body;

  try {
    const notification = await Notification.create({
      message,
      targetRole,
      isRead,
    });

    res.status(201).json({ message: 'Notification created successfully', notification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create notification' });
  }
};

// Get all notifications
const getNotifications = async (req, res) => {
  const { role, readStatus } = req.query; // Optional filters: role and readStatus

  try {
    const filters = {};
    if (role) filters.targetRole = role;
    if (readStatus !== undefined) filters.isRead = readStatus === 'true';

    const notifications = await Notification.findAll({ where: filters });
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

module.exports = { createNotification, getNotifications };
