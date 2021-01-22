import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import httpClient from '../API/httpClient';

const Restrict = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);


  const authentication = async () => {
    try {
      const confirmation = await httpClient.Auth();
    if (confirmation.status === 401) {
      setIsLogged(false);
    }
    } catch (error) {
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
