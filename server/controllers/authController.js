const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({where: {email}});
        if(!user){
            return res.status(404).json({message: 'User cannot be found'});
        };

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid credentials'});
        };

        const SECRET_KEY = process.env.SECRET_KEY;
        if (!SECRET_KEY) {
            throw new Error('SECRET_KEY is not defined. Please check your .env file.');
        }

        const token = jwt.sign({id: user.id, role: user.role}, SECRET_KEY, {expiresIn: '1h'});
        res.json({message: 'Login successful', token, role: user.role});

    }catch(error){
        res.status(500).json({message: 'server error', error: error.message});
    }
};

module.exports = loginUser;