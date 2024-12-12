import React, { useState } from "react";
import axios from "axios";
import '../../css/Register.css';

const RegisterStudent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({
    studentId: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    class: "",
    fees: "",
    role: "",
  });

  const validateStep = () => {
    const requiredFields = {
      1: ["studentId", "email", "password", "confirmPassword"],
      2: ["firstName", "lastName", "gender", "dob"],
      3: ["class", "fees"],
      4: ["role"],
    };

    const currentFields = requiredFields[currentStep];
    for (let field of currentFields) {
      if (!formValues[field]) {
        alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1')} field`);
        return false;
      }
    }

    if (currentStep === 1 && formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }

    return true;
  };
  const url= "http://localhost:5000/api/students";

  const steps = [
    {
      step: 1,
      title: "Registration",
      content: (
        <>
          

          <div className="form-group">
            <label htmlFor="studentId">Student ID *</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              className="form-control"
              value={formValues.studentId}
              onChange={(e) =>
                setFormValues({ ...formValues, studentId: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              value={formValues.confirmPassword}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
        </>
      ),
    },
    {
      step: 2,
      title: "General Information",
      content: (
        <>
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={formValues.firstName}
              onChange={(e) =>
                setFormValues({ ...formValues, firstName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              value={formValues.lastName}
              onChange={(e) =>
                setFormValues({ ...formValues, lastName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <select
              id="gender"
              className="form-control"
              value={formValues.gender}
              onChange={(e) =>
                setFormValues({ ...formValues, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth *</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              value={formValues.dob}
              onChange={(e) =>
                setFormValues({ ...formValues, dob: e.target.value })
              }
            />
          </div>
        </>
      ),
    },
    {
      step: 3,
      title: "Education",
      content: (
        <>
          <div className="form-group">
            <label htmlFor="class">Class *</label>
            <select
              id="class"
              className="form-control"
              value={formValues.class}
              onChange={(e) =>
                setFormValues({ ...formValues, class: e.target.value })
              }
            >
              <option value="">Select Class</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
              <option value="Class 4">Class 4</option>
              <option value="Class 5">Class 5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fees">Fees *</label>
            <input
              type="text"
              id="fees"
              name="fees"
              className="form-control"
              value={formValues.fees}
              onChange={(e) =>
                setFormValues({ ...formValues, fees: e.target.value })
              }
            />
          </div>
        </>
      ),
    },
    {
      step: 4,
      title: "Role",
      content: (
        <>
          <div className="form-group">
            <label htmlFor="role">Role *</label>
            <select
              id="role"
              className="form-control"
              value={formValues.role}
              onChange={(e) =>
                setFormValues({ ...formValues, role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
        </>
      ),
    },
  ];

  const nextStep = async () => {
    if (!validateStep()) return;

    if (currentStep === steps.length) {
      try {
        const response = await axios.post(url, formValues);
        alert(response.data.message);
      } catch (error) {
        console.error(error);
        alert("Failed to register student");
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="register">
      <h2>Student Registration</h2>
      <div className="container">
        <div className="sidebar1">
          <ul>
            {steps.map((item) => (
              <li
                key={item.step}
                className={item.step === currentStep ? "active" : ""}
                onClick={() => setCurrentStep(item.step)}
              >
                {item.step}. {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <div className="step">
            <h2>{steps[currentStep - 1].title}</h2>
            {steps[currentStep - 1].content}
          </div>
          <div className="buttons">
            <button
              className="button1"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button className="button2" onClick={nextStep}>
              {currentStep === steps.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStudent;
