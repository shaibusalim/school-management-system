const express = require('express');
const {createTeacher, getAllTeachers, updateTeacher, deleteTeacher} = require('../controllers/teacherController');

const router = express.Router();


router.get('/', getAllTeachers);
router.post('/', createTeacher);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);


module.exports = router;