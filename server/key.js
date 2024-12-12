//const secretKey = require('crypto').randomBytes(64).toString('hex');
//console.log(secretKey);


require('dotenv').config(); // Load the .env file

console.log('SECRET_KEY:', process.env.SECRET_KEY); // Print the SECRET_KEY

if (!process.env.SECRET_KEY) {
    console.error('SECRET_KEY is missing!');
}



