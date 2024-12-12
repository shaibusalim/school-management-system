const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({message: 'Unauthorized'});
        
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }catch(error){
        res.status(403).json({message: 'Forbidden'});
    }
};

const authorizeRole = (role) => (req, res, next) => {
    if(req.user.role !==role) {
        return res.status(403).json({message: 'Access denied'});
    }
    next();
};

module.exports = {
    authenticateToken,
    authorizeRole
}