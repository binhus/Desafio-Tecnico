import React from 'react';
import Restrict from './Restrict';


const Clients = () => {
  const A = 'a';
  console.log(A);
  return (
    <Restrict>
      <div>
        <p>Você está em página privada</p>
      </div>
    </Restrict>
  );
};

export default Clients;
