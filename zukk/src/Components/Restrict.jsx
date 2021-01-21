import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import httpClient from '../API/httpClient';

const Restrict = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);

  // coloquei uma condicional para '/products',
  // estava causando loop infinito entre '/products' e '/login';

  const authentication = async () => {
    try {
      const confirmation = await httpClient.Auth();
      console.log(confirmation);
    if (confirmation.status === 401) {
      setIsLogged(false);
    }
    } catch (error) {
      console.log(error);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    authentication();
  }, []);

  if (!isLogged) return <Redirect to="/login" />;

  return <div>{children}</div>;
};

Restrict.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Restrict;
