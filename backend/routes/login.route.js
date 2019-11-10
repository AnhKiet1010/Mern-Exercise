require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/user.model');

router.post('/', async (req,res,next) => {
    const name = req.body.username;
    const password = req.body.password;
    console.log(name,password);

    const user = await User.find({name: name});
    if(user.length === 0) {
        res.json({message: 'user not exits'})
        return;
    }

    if(user[0].password != password) {
        res.json({message: 'pass wrong!'});
        return;
    }
    const token = jwt.sign(user,process.env.SECRET_TOKEN,{algorithm: 'HS256',expiresIn: '3H'});
    res.cookie('access_token', token, { httpOnly: true });
    res.json({
        access_token: token
    });
    next();
})

module.exports = router;