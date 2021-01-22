import React, { useEffect, useState } from 'react';
import Restrict from './Restrict';
import httpRequest from '../API/httpClient';

const CreateClient = ({ history, match }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [message, setMessage] = useState('');
  const fetchSubmitClient = async () => {
    const clientFetched = await httpRequest.fetchCreateClient({
      name,
      address,
      neighborhood,
      email,
      state,
      phone,
      cep,
    });
    setMessage(clientFetched.message);
  };
  const fetchCep = async () => {
    if (cep.length === 8 && address === '') {
      const cepData = await httpRequest.fetchCepAPI(cep);
      if (cepData.erro) {
        setMessage('CEP Inválido');
      }
      if (cepData) {
        setAddress(cepData.logradouro);
        setNeighborhood(cepData.bairro);
        setState(cepData.uf);
      }
    }
    return null;
  };
  useEffect(() => {
    fetchCep(cep);
  });

  return (
    <Restrict>
      <div className="card bg-light d-flex flex-row justify-content-center mb-3">
        <div className="w-75 p3">
          <h1 className="card-text text-center">Criar Cliente</h1>
          <div className="d-flex flex-column align-items-center justify-content-center w-100">
            <div className="input-group mb-3">
              <input
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nome"
              />
              <span className="input-group-text">Nome</span>
            </div>
            <div className="input-group mb-3">
              <input
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="E-mail"
              />
              <span className="input-group-text">E-mail</span>
            </div>
            <div className="input-group mb-3">
              <input
                className="form-control"
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                placeholder="CEP"
              />
              <span className="input-group-text">CEP</span>
            </div>
            <div className="input-group mb-3">
              <input
                className="form-control"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Endereço"
                readOnly
              />
              <span className="input-group-text">Endereço</span>
              <button className="btn btn-danger" onClick={() => setAddress('')}>
                X
              </button>
            </div>
            <div className="input-group mb-3">
              <input
                className="form-control"
                value={neighborhood}
                placeholder="Bairro"
                readOnly
              />
              <span className="input-group-text">Bairro</span>
              <button
                className="btn btn-danger"
                onClick={() => setNeighborhood('')}
              >
                X
              </button>
            </div>
            <div className="input-group mb-3">
              <input
                className="form-control"
                value={state}
                onChange={(event) => setState(event.target.value)}
                placeholder="Estado"
                readOnly
              />
              <div className="input-group-append">
                <span className="input-group-text">UF</span>
              </div>
              <button className="btn btn-danger" onClick={() => setState('')}>
                X
              </button>
            </div>
            <div className="input-group mb-3">
              <input
                className="form-control"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Telefone"
              />
              <span className="input-group-text">Telefone</span>
            </div>
          </div>
          <div className="d-flex flex-column ">
            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={() => fetchSubmitClient()}
            >
              Criar
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => history.push('/clients')}
            >
              Voltar
            </button>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </Restrict>
  );
};

export default CreateClient;
