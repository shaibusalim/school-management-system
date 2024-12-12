// controllers/dashboardController.js
const Students = require('../models/studentModel');
const Teachers = require('../models/teacherModel');

const getDashboardSummary = async (req, res) => {
  try {
    const totalStudents = await Students.count();
    const totalTeachers = await Teachers.count();
    
    res.json({
      totalStudents,
      totalTeachers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching dashboard summary' });
  }
};

module.exports = { getDashboardSummary };
