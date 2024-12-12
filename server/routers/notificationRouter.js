const express = require('express');
const { createNotification, getNotifications } = require('../controllers/notificationContoller');

const router = express.Router();


router.post('/', createNotification);
router.get('/', getNotifications);

module.exports = router;
