const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');

const route = express.Router();

route.post('/',async function(req, res, next) {
    var newUser = new User({
        name: req.body.username,
        password: req.body.password,
    })
    newUser.save((err) => {
    if(err) {
        res.json({message: 'error'})
    } else {
        const token = jwt.sign({ten: 'anhkiet'},'anhkiet',{algorithm: 'HS256',expiresIn: '3H'});
        res.cookie('access_token',token);
        res.json({
            message: 'create success!',
            access_token: token
        });
    }
    })
})

module.exports = route;