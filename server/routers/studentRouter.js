const express = require('express');
const {registerStudent,getAllStudents, updateStudent, deleteStudent} = require('../controllers/studentsController');

const router = express.Router();



router.post('/', registerStudent);
router.get('/', getAllStudents);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);



module.exports = router;