import React, { useState, useEffect } from 'react';
import './Overview.css'
import axios from 'axios';




const TeacherOverview = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState("");
  const [data, setData] = useState({
    totalStudents: 0,
    totalTeachers: 0,
  });

  useEffect(() => {
   
    const fetchSummaryData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard/summary');
       
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard summary:', error);
      }
    };

    fetchSummaryData();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
        const fetAllTeachers = async () => {
          try{
            const response = await axios.get("http://localhost:5000/api/teachers");
            setTeachers(response.data);
            setLoading(false);
          }catch(error){
            console.error("Error fetching students:", error);
            setLoading(false);
          }
        };
        fetAllTeachers();
  }, []);

  if (loading) {
    return <p>Loading students...</p>;
  }
  return (
    <div className="overview-container">
        <div className='cards'>
                 <div className="card orange">
                      <h3>Total Students</h3>
                      <p>{data.totalStudents}</p>
                      <div className="update">
                        <i className="fas fa-clock"></i>
                        <span>update : 2:15 am</span>
                     </div>
                </div>
                <div className="card green">
                    <h3>Total Teachers</h3>
                    <p>{data.totalTeachers}</p>
                    <div className="update">
                      <i className="fas fa-clock"></i>
                      <span>update : 2:15 am</span>
                    </div>
                </div>
                <div className="card red">
                    <h3>Total Classes</h3>
                    <p>23</p>
                    <div className="update">
                      <i className="fas fa-clock"></i>
                      <span>update : 2:15 am</span>
                    </div>
                </div>
                <div className="card blue">
                    <h3>Subjects</h3>
                    <p>10</p>
                    <div className="update">
                      <i className="fas fa-clock"></i>
                      <span>update : 2:15 am</span>
                  </div>
                </div>
           </div>

           <div className='overview-content'>

           <div className='teachers-table-overview'>
           <h3>Teachers List</h3>
         <table className='teachers-list-table'>
            <thead>
              <tr>
                <th>#ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Highest Degree</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.username}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.gender}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.highestDegree}</td>
                  <td>{teacher.subject}</td>
                </tr>
              ))}
            </tbody>
             </table>
           </div>
       </div>
    </div>
  );
}

export default TeacherOverview;
