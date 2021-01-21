const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const signUpSignIn = require('./Controllers/signUpSignInController');
const middlewares = require('./Middlewares/auth');

const PORT = process.env.PORT || 3001
const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', signUpSignIn);

const errorMiddleware = (err, _req, res, _next) => {
  console.error(err);
  if (err.message === 'jwt-malformed') {
    return res.status(401).send();
  }
  const { message } = err;
  return res.status(500).json({ message });
};

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`O pai tá ON na porta: ${PORT}`);
});
