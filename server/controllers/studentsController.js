const bcrypt = require('bcrypt');
const User  = require('../models/userModel');
const Student  = require('../models/studentModel');


const getAllStudents = async(req, res) => {
    try{
        const students = await Student.findAll();
        res.status(200).json(students);
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: "Failed to fetch all students!"});
    };
    
}
const registerStudent = async (req, res) => {
  const { email, password, studentId, firstName, lastName, gender, dob, class: className, fees } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user record in the User table
    const user = await User.create({
      
      email,
      password: hashedPassword,
      role: 'Student',
    });

    // Create the student record in the Student table
    await Student.create({
      studentId,
      firstName,
      lastName,
      gender,
      dob,
      class: className,
      fees,
      userId: user.id, // Associate with the user
    });

    res.status(201).json({ message: 'Student registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register student' });
  }
};

// Update an existing student
const updateStudent = async (req, res) => {
  const { id } = req.params; // The ID of the student to update
  const { firstName, lastName, gender, dob, class: className, fees } = req.body;

  try {
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found!' });
    }

    await student.update({
      firstName,
      lastName,
      gender,
      dob,
      class: className,
      fees,
    });

    res.status(200).json({ message: 'Student updated successfully!', student });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to update student!' });
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  const { id } = req.params; 

  try {
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found!' });
    }

    // Delete the user associated with the student
    await User.destroy({ where: { id: student.userId } });

    // Delete the student record
    await student.destroy();

    res.status(200).json({ message: 'Student deleted successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to delete student!' });
  }
};

module.exports = {
    registerStudent,
    getAllStudents,
    updateStudent,
    deleteStudent

}
