const Attendance = require('../models/attendanceModel');
const User = require('../models/userModel');



const getAllAttendanceRecords = async (req, res) => {
    try{
        const attendance = await Attendance.findAll();
        res.json(attendance);
    }catch(error) {
        console.error(error.message);
        res.status(500).json({message: 'Server Error'});
    }
};


const getAttendanceByStudent = async (req, res) => {
    const {userId} = req.params;
    try{

        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }

        
        const attendance = await Attendance.findAll({
            where: {
                studentId: userId
            }
        })
        if (attendance.length === 0) {
            return res.status(404).json({ message: 'No attendance records found for this student' });
        }
        res.json({attendance});
    }catch (error){
            console.error(error.message);
            res.status(500).json({message: 'Server Error'});
    }
};

// Mark attendance for a student
const markAttendance = async (req, res) => {
    const { studentId, status, date } = req.body;

    if (!studentId || !status || !date) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Check if attendance already exists for the student on that date
        const existingRecord = await Attendance.findOne({
            where: {
                studentId,
                date,
            },
        });

        if (existingRecord) {
            // Update existing record
            existingRecord.status = status;
            await existingRecord.save();
            return res.json({ message: 'Attendance updated successfully' });
        }

        // Create new record
        const newAttendance = await Attendance.create({
            studentId,
            status,
            date,
        });

        res.status(201).json({ message: 'Attendance marked successfully', newAttendance });
    } catch (error) {
        console.error('Error marking attendance:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {
    getAllAttendanceRecords,
    getAttendanceByStudent,
    markAttendance
};
