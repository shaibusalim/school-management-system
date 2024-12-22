const User = require('./models/userModel');
const bcrypt = require('bcrypt');

const createDefaultAdmin = async () => {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        console.error('Admin credentials are not set in environment variables.');
        return;
    }

    const existingAdmin = await User.findOne({ where: { email: adminEmail } });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash(adminPassword, 10);
        await User.create({
            email: adminEmail,
            password: hashedPassword,
            role: 'Admin', // Set the role to Admin
        });
        console.log('Default admin user created.');
    } else {
        console.log('Admin user already exists.');
    }
};

module.exports = createDefaultAdmin;