import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../css/List.css';


const ListStudent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data); // Assuming your API returns a JSON array of students
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p>Loading students...</p>;
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/students/${id}`);
        setStudents(students.filter((student) => student.id !== id)); // Remove the student from state
        alert("Student deleted successfully!");
      } catch (error) {
        console.error(error);
        alert("Failed to delete student.");
      }
    }
  };
  

  return (
    <div className="stdnt-teach-list">
    <h1>Students List</h1>
    <table className="stdnt-teach-list-table">
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
          <th>Actions</th>
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
            <td className="stdnt-teach-buttons">
              <button
                className="edit-button"
                onClick={() => handleEdit(student.id)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(student.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default ListStudent;
