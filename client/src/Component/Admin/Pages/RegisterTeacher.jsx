import React, { useState } from "react";
import '../../css/Register.css';
import axios from "axios";


const RegisterTeacher = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phone: "",
    highestDegree: "",
    subject: "",
    role: "",
  });

  const validateStep = () => {
    const requiredFields = {
      1: ["username", "email", "password", "confirmPassword"],
      2: ["firstName", "lastName", "phone", "gender","dateOfBirth"],
      3: ["highestDegree", "subject"],
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

  const url= "http://localhost:5000/api/teachers";

  const steps = [
    {
      step: 1,
      title: "Registration",
      content: (
        <>
          <div className="form-group">
            <label htmlFor="username">User name *</label>
            <input
             type="text" 
             id="username" 
             className="form-control"
              value={formValues.username}
              onChange={(e) =>
                setFormValues({...formValues, username: e.target.value})
              }
             />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input 
            type="email"
             id="email" 
             className="form-control"
             value={formValues.email}
             onChange={(e) =>
               setFormValues({...formValues, email: e.target.value})
             }
             />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input 
            type="password"
             id="password" 
             className="form-control" 
             value={formValues.password}
             onChange={(e) =>
               setFormValues({...formValues, password: e.target.value})
             }
             />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password *</label>
            <input
             type="password" 
             id="confirm-password" 
             className="form-control" 
             value={formValues.confirmPassword}
             onChange={(e) =>
               setFormValues({...formValues, confirmPassword: e.target.value})
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
            <label htmlFor="phone">Phone *</label>
            <input 
            type="text" 
            id="phone" 
            className="form-control" 
              value={formValues.phone}
              onChange={(e) => 
                setFormValues({...formValues, phone: e.target.value})
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
              value={formValues.dateOfBirth}
              onChange={(e) =>
                setFormValues({...formValues, dateOfBirth: e.target.value})
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
            <label htmlFor="highest-degree">Highest Degree *</label>
            <input
             type="text" 
             id="highest-degree"
              className="form-control" 
              value={formValues.highestDegree}
              onChange={(e) => 
                setFormValues({...formValues, highestDegree: e.target.value})
              }
              />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="class"
              className="form-control"
              value={formValues.subject}
              onChange={(e) => 
                setFormValues({...formValues, subject: e.target.value})
              }
            >
              <option value="">Select Subject</option>
              <option value="math">Mathematics</option>
              <option value="eng">English</option>
              <option value="sci">Science</option>
              <option value="ict">Information Technology</option>
             
            </select>
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

  const showStep = (step) => {
    setCurrentStep(step);
  };

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
            <h2>Teachers Registration</h2>
             <div className="container">
      <div className="sidebar1">
        <ul>
          {steps.map((item) => (
            <li
              key={item.step}
              className={item.step === currentStep ? "active" : ""}
              onClick={() => showStep(item.step)}
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
          <button className="button1"
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

export default RegisterTeacher;
