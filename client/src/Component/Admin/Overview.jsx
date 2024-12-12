import React, { useState, useEffect } from 'react';
import '../css/Overview.css';
import axios from 'axios';




const Overview = () => {
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
                      <div className='orange-items'>
                          <h3>Total Students</h3>
                          <p>{data.totalStudents}</p>
                          <div className="update">
                            <i className="fas fa-clock"></i>
                            <span>update : 2:15 am</span>
                          </div>
                      </div>
                      <div className='card-icon'>
                          <i className="fa fa-users" style={{ fontSize: '50px', marginRight: '10px', color:'white' }}></i>
                      </div>  
                </div>
                <div className="card green">
                    <div>
                      <h3>Total Teachers</h3>
                        <p>{data.totalTeachers}</p>
                        <div className="update">
                          <i className="fas fa-clock"></i>
                          <span>update : 2:15 am</span>
                        </div>
                    </div>
                    <div className=''>
                    <i className="fa fa-chalkboard-teacher" style={{ fontSize: '50px', marginRight: '10px', color:'white' }}></i> 
                    </div>
                    
                </div>
                <div className="card red">
                  <div>
                      <h3>Total Classes</h3>
                        <p>23</p>
                        <div className="update">
                          <i className="fas fa-clock"></i>
                          <span>update : 2:15 am</span>
                        </div>
                  </div>
                  <div>
                  <i className="fa fa-school" style={{ fontSize: '50px', marginRight: '10px', color:'white' }}></i> 
                  </div>
                    
                </div>
                <div className="card blue">
                  <div>
                      <h3>Subjects</h3>
                        <p>10</p>
                        <div className="update">
                          <i className="fas fa-clock"></i>
                          <span>update : 2:15 am</span>
                      </div>
                  </div>
                  <div>
                  <i className="fa fa-book-open" style={{ fontSize: '50px', marginRight: '10px', color:'white' }}></i>
                  </div>
                   
                </div>
           </div>

           <div className='overview-content'>
            <div className='students-overview-table'>
            <h3>Students List</h3>
            <table className='overview-students-list-table'>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                  <th>Class</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.studentId}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.gender}</td>
                    <td>{student.dob}</td>
                    <td>{student.class}</td>
                    <td>{student.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
           
          

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

export default Overview;
