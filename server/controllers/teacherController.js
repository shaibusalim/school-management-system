const Teachers = require('../models/teacherModel');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');

const getAllTeachers = async (req, res) => {
  try{
    const teacher = await Teachers.findAll();
    res.json(teacher);
  }catch(error){
    console.error(error.message);
    res.status(500).json({message: 'Failed to fetch all teachers'});
  }
};

const createTeacher = async (req, res) => {
    const {username,password,email,phone,firstName,lastName,subject,highestDegree,gender,dateOfBirth} = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user record in the User table
        const user = await Users.create({
          username,
          email,
          password: hashedPassword,
          role: 'teacher',
        });
    
        // Create the Teacher record in the Student table
        await Teachers.create({
          firstName,
          lastName,
          phone,
          gender,
          dateOfBirth,
          subject,
          highestDegree,
          userId: user.id, // Associate with the user
        });
    
        res.status(201).json({ message: 'Teacher registered successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register Teacher' });
      }
    };

    // Update an existing Teacher
const updateTeacher = async (req, res) => {
  const { id } = req.params; // 
  const { firstName, lastName, phone, gender, dateOfBirth, highestDegree, subject } = req.body;

  try {
    const teacher = await Teachers.findByPk(id);

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found!' });
    }

    await teacher.update({
      firstName,
      lastName,
      phone,
      gender,
      dateOfBirth,
      highestDegree,
      subject,
    });

    res.status(200).json({ message: 'Teacher updated successfully!', teacher });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to update teacher!' });
  }
};

// Delete a Teacher
const deleteTeacher = async (req, res) => {
  const { id } = req.params; 

  try {
    const teacher = await Teachers.findByPk(id);

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found!' });
    }

    // Delete the user associated with the Teacher
    await Users.destroy({ where: { id: teacher.userId } });

    // Delete the Teacher record
    await teacher.destroy();

    res.status(200).json({ message: 'Teacher deleted successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to delete Teacher!' });
  }
};

    module.exports = {
      getAllTeachers,
      createTeacher,
      updateTeacher,
      deleteTeacher
    } 