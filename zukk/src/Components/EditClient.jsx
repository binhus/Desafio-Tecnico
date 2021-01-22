import React, { useEffect, useState } from 'react';
import Restrict from './Restrict';
import httpRequest from '../API/httpClient';

const EditClient = ({ history, match }) => {
  const fetchClient = async () => {
    const { id } = match.params;
    const clientFetched = await httpRequest.fetchClientById(id);
    setClient(clientFetched);
    setName(clientFetched[0].name);
    setAddress(clientFetched[0].address);
    setNeighborhood(clientFetched[0].neighborhood);
    setEmail(clientFetched[0].email);
    setState(clientFetched[0].state);
    setPhone(clientFetched[0].phone);
    setCep(clientFetched[0].cep);
  };
  const [client, setClient] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [neighborhood, setNeighborhood] = useState(null);
  const [email, setEmail] = useState(null);
  const [state, setState] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cep, setCep] = useState(null);
  const [message, setMessage] = useState(null);

  const style = {
    "min-height": "70%",
  };

  const handleDeleteButton = async () => {
    const exclude = await httpRequest.fetchDeleteClient(match.params.id);
    setMessage(exclude.message);
  }

  const updateHandleButtonEdit = async () => {
    const update = await httpRequest.fetchUpdateClient(
      { name, address, neighborhood, email, state, phone, cep },
      match.params.id,
    );
    setMessage(update.message);
  };
  useEffect(() => {
    if (!client) {
      fetchClient();
    }
  });
  return (
    <Restrict>
      <div>
        <h1>Editar Usuário</h1>
        {client ? (
          <div className="d-flex flex-column align-items-center justify-content-center w-100" style={style}>
            <input
              className="input"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="input"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <input
              className="input"
              value={neighborhood}
              onChange={(event) => setNeighborhood(event.target.value)}
            />
            <input
              className="input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="input"
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
            <input
              className="input"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              className="input"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            />
          </div>
        ) : (
          <p>carregando clientes</p>
        )}
        <div className="d-flex flex-column ">
          <button
            type="button"
            className="btn btn-success btn-block"
            onClick={() => updateHandleButtonEdit()}
          >
            Salvar
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
        <div className="d-flex flex-end">
          <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={() => handleDeleteButton()}
            >
              Excluir
            </button>
        </div>
      </div>
    </Restrict>
  );
};

export default EditClient;
