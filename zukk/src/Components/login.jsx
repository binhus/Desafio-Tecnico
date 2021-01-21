import React, { useState, useEffect } from 'react';
// import { login } from '../Services/auth';
import { fetchLogin } from '../API/httpClient';
import logo from '../logo.svg';
import { login } from '../Services/auth';

const Login = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Preencha e-mail e senha para continuar!');
    } else {
      const response = await fetchLogin({ email, password });
      console.log(response);
      if (response.token) {
        login(response.token);
        setError('Aguarde o login');
        history.push('/app')
      }
      if (response.message) {
        setError('Você não conseguiu fazer o login, verifique seus dados');
      }
    }
  };

  function validInput(emailParam, passwordParam) {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const regexPassword = /^[^d_]{4,25}$/;
    if (regexEmail.test(emailParam) && regexPassword.test(passwordParam)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  useEffect(() => {
    validInput(email, password);
  }, [email, password]);

  return (
    <div>
      <img src={ logo } className="App-logo" alt="logo" />
      <form onSubmit={ handleLogin }>
        <input
          type="text"
          placeholder="Endereço de e-mail"
          onChange={ (event) => setEmail(event.target.value) }
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={ (event) => setPassword(event.target.value) }
        />
        <button disabled={ isDisabled } type="submit">
          Entrar
        </button>
      </form>
      {error && (<p>{error}</p>) }
    </div>
  );
};

export default Login;
