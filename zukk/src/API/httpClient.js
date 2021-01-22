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

const myInitNoCORS = () => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
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
const myInitDelete = () => ({
  mode: 'cors',
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchLogin = (data) => fetch(`${localhostURL}/`, myInitWithBody(data, null, 'POST')).then((response) => response
  .json()
  .then((json) => Promise.resolve(json))
  .catch((err) => Promise.reject(err)));

const Auth = () => fetch(`${localhostURL}/auth`, myInit(getToken()))
.catch((err) => Promise.reject(err));

const fetchClients = () => fetch(`${localhostURL}/clients`, myInit()).then((response) => response
  .json()
  .then((json) => Promise.resolve(json))
  .catch((err) => Promise.reject(err)));

const fetchClientById = (id) => fetch(`${localhostURL}/clients/${id}`, myInit()).then((response) => response
.json()
.then((json) => Promise.resolve(json))
.catch((err) => Promise.reject(err)));

const fetchUpdateClient = (data, id) => fetch(`${localhostURL}/clients/${id}`, myInitWithBody(data, null, 'PUT')).then((response) => response
.json()
.then((json) => Promise.resolve(json))
.catch((err) => Promise.reject(err)));

const fetchDeleteClient = (id) => fetch(`${localhostURL}/clients/${id}`, myInitDelete()).then((response) => response
.json()
.then((json) => Promise.resolve(json))
.catch((err) => Promise.reject(err)));

const fetchCreateClient = (data) => fetch(`${localhostURL}/clients`, myInitWithBody(data, null, 'POST')).then((response) => response
.json()
.then((json) => Promise.resolve(json))
.catch((err) => Promise.reject(err)));

const fetchCepAPI = (cep) => fetch(`https://viacep.com.br/ws/${cep}/json/`, myInitNoCORS()).then((response) => response.json())
.then((json) => Promise.resolve(json))
.catch((err) => Promise.reject(err));

module.exports = {
  fetchCepAPI,
  fetchCreateClient,
  fetchClients,
  fetchUpdateClient,
  fetchDeleteClient,
  fetchClientById,
  fetchLogin,
  Auth,
};
