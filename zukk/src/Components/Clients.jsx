import React, { useEffect, useState } from 'react';
import Restrict from './Restrict';
import httpRequest from '../API/httpClient';


const Clients = ({history}) => {
  const fetchClients = async () => {
    const clientsFetched = await httpRequest.fetchClients();
    setClientList(clientsFetched);
  }
  const [clientList, setClientList] = useState(null);
  useEffect(() => {
    fetchClients();
  }, [])
  console.log(clientList);
  return (
    <Restrict>
      <div>
        <table className="table w-100">
          <thead>
            <th scope="col">Id</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>estado</th>
            <th>CEP</th>
            <th>E-mail</th>
            <th>Telefone</th>
          </thead>
        {clientList ?  clientList.map((client) => (
          <tr>
            <td>{client.id}</td>
            <td >{client.name}</td>
            <td>{client.address}</td>
            <td>{client.neighborhood}</td>
            <td>{client.state}</td>
            <td>{client.cep}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <button type='submit' onClick={() => history.push(`client/${client.id}`)} className="btn">Editar</button>
          </tr>
          )) : <p>carregando clientes</p>}
        
        </table>

      </div>
    </Restrict>
  );
};

export default Clients;
