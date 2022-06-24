const jwt = require("jsonwebtoken");
require('dotenv').config({path: '.env'})
const {env} = process;

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    try {
        const payload = jwt.verify(token, env.SECRET);
        req.payload = payload;
        next();
    } catch (err) {
        res.status(401).json({success: false, message: 'Bandits!!'})
    }
}