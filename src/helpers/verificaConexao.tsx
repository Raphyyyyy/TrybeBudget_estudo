import React from 'react';
import { Navigate } from 'react-router-dom';

function VerificaConexao({ children }) {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default VerificaConexao;
