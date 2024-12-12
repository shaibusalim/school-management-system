const express = require('express');
const {getAllAttendanceRecords, getAttendanceByStudent, markAttendance} = require('../controllers/attendanceController');


const router = express.Router();

router.get('/', getAllAttendanceRecords);
router.get('/:id', getAttendanceByStudent);
router.post('/', markAttendance);

module.exports = router;