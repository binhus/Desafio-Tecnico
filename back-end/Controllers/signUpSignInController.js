const { Router } = require('express');
const userServices = require('../Services/index');
const auth = require('../Middlewares/auth');

const signUpSignIn = Router();

// endpoint de login
signUpSignIn.post('/', userServices.login, (req, res) => {
  res.status(200).json(req.data);
});
// endpoint de autenticação
signUpSignIn.get('/auth', auth, (req, res) => {
  res.status(200).json(req.data)
})

module.exports = signUpSignIn;
