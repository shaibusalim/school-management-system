import React, { useState, useEffect } from 'react';
import '../../css/Overview.css';
import axios from 'axios';
import { PieChart, Pie, Sector, Cell, Label } from 'recharts';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';




const StudentOverview = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState("");
  const [data, setData] = useState({
    totalStudents: 0,
    totalTeachers: 0,
  });
  const [events, setEvents] = useState([]);
  


  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/events');
        if (response.data.length === 0) {
          console.log('No events found');
        } else {
          setEvents(response.data);
        }
      } catch (error) {
        console.error(`Error fetching events: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchAllEvents();
  }, []);

  
  const datas = [
    { name: 'A', value: 12 },
    { name: 'B', value: 19 },
    { name: 'C', value: 3 },
    { name: 'D', value: 5 },
    { name: 'F', value: 2 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const renderLabel = (entry) => {
    return `${entry.name}: ${entry.value}`;
  };

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

  useEffect(() => {
    const fetchAllAttendance = async () => {
      try{
        const response = await axios.get(`http://localhost:5000/api/notifications?role=${targetRole}`);
        setNotifications(response.data);
        setLoading(false); 
      }catch(error){
        console.error("Error fetching attendance", error);
        setLoading(false);
      }
    }
    fetchAllAttendance();
  })

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
                 <h3>Calender</h3>
            <div className='students-overview-calender'>
    
            <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventDisplay="block"
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
          }}
        />

            <PieChart width={500} height={500}>
                  <Pie
                    data={datas}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={170}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={renderLabel}
                    
                  >
                    {datas.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
            </div>  
       </div>
     
    </div>
  );
}

export default StudentOverview;
