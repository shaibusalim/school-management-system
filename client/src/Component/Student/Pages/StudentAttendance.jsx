import React, { useState, useEffect } from 'react';
import axios from 'axios';



const StudentAttendance = () => {

  const [listAttendance, setListAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId"); 


 

  useEffect(() => {
    const fetchStudentAttendance = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/attendance/${userId}`); // Fetch attendance for the specific user
        setListAttendance(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch attendance:', error);
        alert('Failed to fetch attendance');
      }
    };

    if (userId) {
      fetchStudentAttendance();
    }
  }, [userId]);

  




  return (
    <div className='attendance-container'>
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
                  <td className={list.status === "Absent" ? 'red' : 'green'}>{list.status}</td>
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

export default StudentAttendance;
