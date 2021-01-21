const { getToken } = require('../Services/auth');

const localhostURL = 'http://localhost:3001';

const myInit = (token) => ({
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    authorization: token || '',
  },
});

const myInitWithBody = (data, token, method) => ({
  mode: 'cors',
  method: method,
  headers: {
    'Content-Type': 'application/json',
    authorization: token || '',
  },
  body: JSON.stringify(data) || {},
});

const fetchLogin = (data) => fetch(`${localhostURL}/`, myInitWithBody(data, null, 'POST')).then((response) => response
  .json()
  .then((json) => Promise.resolve(json))
  .catch((err) => Promise.reject(err)));

const Auth = () => fetch(`${localhostURL}/auth`, myInit(getToken()))
.catch((err) => Promise.reject(err));

module.exports = {
  fetchLogin,
  Auth,
};
