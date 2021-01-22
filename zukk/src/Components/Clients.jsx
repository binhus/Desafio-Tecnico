import React, { useEffect, useState } from 'react';
import Restrict from './Restrict';
import httpRequest from '../API/httpClient';

const Clients = ({ history }) => {
  const fetchClients = async () => {
    const clientsFetched = await httpRequest.fetchClients();
    setClientList(clientsFetched);
  };
  const [clientList, setClientList] = useState(null);
  useEffect(() => {
    fetchClients();
  }, []);
  return (
    <Restrict>
      <div>
        <table className="table w-100">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Bairro</th>
              <th>estado</th>
              <th>CEP</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>
                {' '}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => history.push('/client/create')}
                >
                  Adicionar Cliente
                </button>
              </th>
            </tr>
          </thead>
          {clientList && clientList.length >=1 ? (
            clientList.map((client) => (
              <tbody key={client.id}>
                <tr className="text-center">
                  <td className="text-center" >{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.address}</td>
                  <td>{client.neighborhood}</td>
                  <td>{client.state}</td>
                  <td>{client.cep}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => history.push(`client/${client.id}`)}
                      className="btn"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td>carregando clientes</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </Restrict>
  );
};

export default Clients;
