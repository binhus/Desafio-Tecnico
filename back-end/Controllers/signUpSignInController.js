const { Router } = require('express');
const userServices = require('../Services/index');
const auth = require('../Middlewares/auth');
const bodyParser = require('body-parser');

const signUpSignIn = Router();


// endpoint de registro
//signUpSignIn.post('/register', userServices.register, (req, res) => {
//  res.status(201).json(req.data);
//});

// endpoint de login
signUpSignIn.post('/', userServices.login, (req, res) => {
  res.status(200).json(req.data);
});

signUpSignIn.get('/auth', auth, (req, res) => {
  res.status(200).json(req.data)
})

module.exports = signUpSignIn;
