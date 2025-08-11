import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import '../styles/orcamento.css';
import OrcamentoForm from '../components/orcamentoForm';
import Graficos from '../components/graficosForm';
import Footer from '../components/Footer';

const orcamento = ({ setLoading }) => {
  return (
    <div className="orcamentoHome">
      <Header />
      <a href="javascript:history.back()" className="voltar">
        <FontAwesomeIcon icon={ faArrowLeft } />
        Voltar
      </a>
      <div className="fundoOrcamento" />
      <h2>Orçamento mensal detalhado</h2>
      <div className="formulario2">
        <Graficos  setLoading={setLoading} />
      </div>
      <div className="formulario1">
        <OrcamentoForm  setLoading={setLoading} />
      </div>
      <div className="rodape" />
      <Footer />
    </div>
  );
};

export default orcamento;
