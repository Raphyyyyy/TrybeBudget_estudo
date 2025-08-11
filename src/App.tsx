import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Orcamento from './pages/orcamento';
import Salarios from './pages/salarios';
import VerificaConexao from './helpers/verificaConexao';
import GlobalLoader from './components/globalLoader';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <GlobalLoader isLoading={loading} />
      {/* barra de carregamento global */}

      <Routes>
        <Route path="/" element={<VerificaConexao><Home /></VerificaConexao>} />
        <Route path="/login" element={<Login />} />
        <Route path="/orcamento" element={<VerificaConexao><Orcamento setLoading={setLoading} /></VerificaConexao>} />
        <Route path="/salarios" element={<VerificaConexao><Salarios setLoading={setLoading} /></VerificaConexao>} />
      </Routes>
    </>
  );
}

export default App;
