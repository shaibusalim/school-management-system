const studentRouter = require('./studentRouter');
const teacherRouter = require('./teacherRouter');
const dashboardRouter = require('./dashboardRouter');
const notificationRouter = require('./notificationRouter');
const attendanceRouter = require('./attendanceRouter');
const authRouter = require('./authRouter');
const eventRouter = require('./eventRouter');




module.exports = {
    studentRouter,
    teacherRouter,
    dashboardRouter,
    notificationRouter,
    attendanceRouter,
    authRouter,
    eventRouter
};