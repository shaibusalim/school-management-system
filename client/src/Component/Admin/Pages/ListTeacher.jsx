import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/List.css'
function ListTeacher() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
   const fetchAllTeachers = async () => {
    try{
      const response = await axios.get('http://localhost:5000/api/teachers');
        setTeachers(response.data);
        setLoading(false);
    }catch(error){
      console.error("Error fetching teachers:", error);
      setLoading(false);
    }
   };
   fetchAllTeachers();
 }, []);

 if (loading) {
  return <p>Loading teachers...</p>;
}

const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this Teacher?");
  if (confirmDelete) {
    try {
      await axios.delete(`http://localhost:5000/api/teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher.id !== id)); 
      alert("Teacher deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete Teacher.");
    }
  }
};
  return (
    <div className='stdnt-teach-list'>
      <h1>Teachers List</h1>
         <table className='stdnt-teach-list-table'>
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
            <th>Actions</th>
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

              <td className="stdnt-teach-buttons">
              <button
                className="edit-button"
                onClick={() => handleEdit(teacher.id)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(teacher.id)}
              >
                Delete
              </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ListTeacher