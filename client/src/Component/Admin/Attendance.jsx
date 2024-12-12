import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Attendance.css';

const Attendance = () => {
  const [students, setStudents] = useState([]); // List of all students
  const [searchTerm, setSearchTerm] = useState(''); // Search input value
  const [filteredStudents, setFilteredStudents] = useState([]); // Filtered students based on search term
  const [attendance, setAttendance] = useState([]); // Attendance data for submission
  const [listAttendance, setListAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isColor, setIsColor] = useState(true);

  useEffect(() => {
    // Fetch all students when the component mounts
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Failed to fetch students:', error);
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = students.filter((student) =>
        student.studentId.toString().includes(searchTerm)
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents([]);
    }
  }, [searchTerm, students]);

  // Handle attendance selection
  const handleAttendanceChange = (studentId, status) => {
    setAttendance((prev) => {
      const updatedAttendance = prev.filter((record) => record.studentId !== studentId);
      updatedAttendance.push({ studentId, status });
      return updatedAttendance;
    });
  };

  // Submit attendance data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        for (const record of attendance) {
            await axios.post('http://localhost:5000/api/attendance', {
                studentId: record.studentId,
                status: record.status,
                date: new Date().toISOString().split('T')[0],
            });
        }
        alert('Attendance marked successfully!');
    } catch (error) {
        console.error('Failed to submit attendance:', error);
        alert('Failed to mark attendance.');
    }
};

useEffect(() => {
  const fetchAllAttendance = async () => {

    try{
      const response = await axios.get('http://localhost:5000/api/attendance');
      setListAttendance(response.data);
      setLoading(false);
    }catch(error){
      console.error(error);
      alert('Failed to fetch attendance');
    }
  }
  fetchAllAttendance();
}, [])

 useEffect(() => {
     const changeColor = () => {
        if(listAttendance.status === "Absent"){
          setIsColor(false);
        }else{
           setIsColor(true);
         }
    }
    changeColor();
 }, [listAttendance.status])




  return (
    <div className='attendance-container'>
     <div className="attendance">
      <h1>Mark Attendance</h1>
      <form onSubmit={handleSubmit}>
        <div className='attendance-form-content'>
          <label htmlFor="student-search">Search Student ID</label>
          <input
            type="text"
            id="student-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter Student ID"
          />
          {filteredStudents.length > 0 && (
            <ul className="student-dropdown">
              {filteredStudents.map((student) => (
                <li
                  key={student.studentId}
                  onClick={() => setSearchTerm(student.studentId)}
                >
                  {student.studentId} - {student.firstName} {student.lastName}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='attendance-select'>
          <label>Attendance Status</label>
          <select
            onChange={(e) =>
              handleAttendanceChange(searchTerm, e.target.value)
            }
          >
            <option value="">Select Status</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <button type="submit">Mark Attendance</button>
      </form>
    </div>
      
    <div className='attendance-list'>
            <h1>Attendance List</h1>
            <table className='attendance-list-table'>
              <thead>
                <tr>
                  <th>StudentID</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Time Created</th>
                  <th>Time Updated</th>
                </tr>
              </thead>
             <tbody>
                {
                  listAttendance.map((list) => (
                    <tr key={list.id}>
                    <td>{list.studentId}</td>
                    <td  className={isColor? 'red' : 'green'}>{list.status}</td>
                    <td>{list.date}</td>
                    <td>{list.createdAt}</td>
                    <td>{list.updatedAt}</td>
                  </tr>
                  ))
                }
             </tbody>
             
          </table>      
    </div>
    </div>
   
  );
};

export default Attendance;
