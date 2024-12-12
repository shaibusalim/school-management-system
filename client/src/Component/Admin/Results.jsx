import React from 'react'
import { PieChart, Pie, Sector, Cell, Label } from 'recharts';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


function Results() {

    const events = [
        { title: 'Assignment Due', start: '2023-10-10' },
        { title: 'Exam', start: '2024-12-12' },
        { title: 'Project Presentation', start: '2023-10-20' }
      ];

      const data = [
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
    
  return (
    <>

    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />

    
<PieChart width={600} height={600}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={100}
        outerRadius={200}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={renderLabel}
        
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>

    
    {/* <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.value}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    
    
    </>
  )
}

export default Results