require('dotenv').config();
const express = require('express');
const cors = require("cors");
const {studentRouter, teacherRouter, dashboardRouter, notificationRouter, attendanceRouter, authRouter, eventRouter} = require('./routers/index');
const sequelize  = require('./config/database');



const app = express();


app.use(cors());

// Add this middleware
app.use(express.json());

app.use('/api/students', studentRouter);
app.use('/api/teachers', teacherRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/attendance', attendanceRouter)
app.use('/api/auth', authRouter);
app.use('/api/events', eventRouter);




// Sync database and start server
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized');
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch((err) => console.error('Error synchronizing database:', err));