const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports.auth = (req,res,next) => {
    const token = req.cookies.access_token;
    if(token) {
        jwt.verify(token,'anhkiet', (err,decode) => {
            if(err) {
                res.status('403').json({
                message: 'Token invalid!'
                })
            } else {
                return next();
            }
        })
    } else {
        return res.json({
        message: 'Unauthorized!'
        })
    }
}