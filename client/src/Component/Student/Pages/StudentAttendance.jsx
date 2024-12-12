import React, { useState, useEffect } from 'react';
import axios from 'axios';



const StudentAttendance = () => {
  const [students, setStudents] = useState([]); // List of all students
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

export default StudentAttendance;
