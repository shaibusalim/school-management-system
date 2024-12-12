const express = require('express');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const { studentDashboard, teacherDashboard, adminDashboard } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/student', authenticateToken, authorizeRole('student'), studentDashboard);
router.get('/teacher', authenticateToken, authorizeRole('teacher'), teacherDashboard);
router.get('/admin', authenticateToken, authorizeRole('admin'), adminDashboard);

module.exports = router;