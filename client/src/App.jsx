import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './Component/Admin/Layouts/DashboardLayout';
 import Results from './Component/Admin/Results'
 import Overview from './Component/Admin/Overview';
 import Attendance from './Component/Admin/Attendance';
 import RegisterStudent from './Component/Admin/Pages/RegisterStudent';
import ListStudent from './Component/Admin/Pages/ListStudent';
 import RegisterTeacher from './Component/Admin/Pages/RegisterTeacher';
  import ListTeacher from './Component/Admin/Pages/ListTeacher';
 import Events from './Component/Admin/Events';
 import Notification from './Component/Admin/Notifications';
import StudentDashboard from './Component/Student/Layouts/StudentDashboard';
 import StudentOverview from './Component/Student/Pages/StudentOverview';
 import StudentNotifications from './Component/Student/Pages/StudentNotifications';
import StudentEvents from './Component/Student/Pages/StudentEvents';
import StudentAttendance from './Component/Student/Pages/StudentAttendance';
import StudentResults from './Component/Student/Pages/StudentResults';
import TeacheDashboard from './Component/Teacher/Layouts/teacherDashboard';
import TeacherOverview from './Component/Teacher/Pages/TeacherOverview';
import TeacherEvents from './Component/Teacher/Pages/TeacherEvents';
import TeacherSubject from './Component/Teacher/Pages/TeacherSubject';
import TeacherNotification from './Component/Teacher/Pages/TeacherNotifications';
import TeacherExams from './Component/Teacher/Pages/TeacherExams';
import Home from './Component/Landing-page/Home'; 
import Login from './Component/Login/Login';




const App = () => {
  return (
    <div className="app">
        <Router>
            <Routes>


                  <Route path='/' element={<Home/>}/>
                  <Route path='login' element={<Login />}/>
                      <Route
                      path="/admin/*"
                      element={
                        <DashboardLayout>
                            <Routes>
                              <Route path="/" element={<Overview />} />
                              <Route path="/notification" element={<Notification />} />
                                <Route path="/results" element={<Results />} />
                                <Route path="/attendance" element={<Attendance />} />
                                <Route path="/events" element={<Events/>} />
                                <Route path="/students/register" element={<RegisterStudent />} />
                                <Route path="/students/list" element={<ListStudent />} />
                                <Route path="/teachers/register" element={<RegisterTeacher />} />
                                <Route path="/teachers/list" element={<ListTeacher />} />
                            </Routes>
                     </DashboardLayout>
                      }
                  />

                   <Route
                    path="/student/*"
                    element={
                      <StudentDashboard>
                            <Routes>
                                   <Route path='/' element={<StudentOverview />}/>  
                                <Route path='attendance' element={<StudentAttendance />}/>
                                <Route path='results' element={<StudentResults />}/>
                                <Route path='events' element={<StudentEvents />}/>
                                <Route path='notification' element={<StudentNotifications/>}/>
                            </Routes>
                      </StudentDashboard>
                    }
                  
                  /> 

                   <Route
                    path="/teacher/*"
                    element= {
                      <TeacheDashboard>
                          <Routes>
                               <Route path='/' element={<TeacherOverview/>}/> 
                              <Route path='events' element={<TeacherEvents/>}/>
                              <Route path='subjects' element={<TeacherSubject/>}/>
                              <Route path='notifications' element={<TeacherNotification/>}/>
                              <Route path='exams' element={<TeacherExams/>}/>
                          </Routes>
                      </TeacheDashboard>
                    }
                  
                  />    
              
            </Routes>
       </Router>
     </div>
   
  );
}

export default App;
