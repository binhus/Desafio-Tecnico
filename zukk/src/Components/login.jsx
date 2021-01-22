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
  const [btnStyle, setBtnStyle] = useState("btn btn-block btn-secondary");


  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Preencha e-mail e senha para continuar!');
    } else {
      const response = await fetchLogin({ email, password });
      if (response.token) {
        login(response.token);
        setError('Aguarde o login');
        history.push('/clients')
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
      setBtnStyle("btn btn-success btn-block")
    } else {
      setIsDisabled(true);
    }
  }

  useEffect(() => {
    validInput(email, password);
  }, [email, password]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100">
      <img src={ logo } className="App-logo" alt="logo" />
      <form onSubmit={ handleLogin }>
        <div className="form-group">
          <input
            type="text"
            placeholder="Endereço de e-mail"
            onChange={ (event) => setEmail(event.target.value) }
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            placeholder="Senha"
            onChange={ (event) => setPassword(event.target.value) }
          />
        </div>
        <br />
        <div className="">
          <button className={btnStyle} disabled={ isDisabled } type="submit">
            Entrar
          </button>
        </div>
      </form>
      {error && (<p>{error}</p>) }
    </div>
  );
};

export default Login;
