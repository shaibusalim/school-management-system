// routers/dashboardRouter.js
const express = require('express');
const { getDashboardSummary } = require('../controllers/dashboardController');  // Import the controller

const router = express.Router();

// Define the route to get the dashboard summary
router.get('/summary', getDashboardSummary);

module.exports = router;
