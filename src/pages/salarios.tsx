import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CalcForm from '../components/calcForm';
import Header from '../components/Header';
import GlobalLoader from '../components/globalLoader'; // importe seu loader
import '../styles/salarios.css';

const Salarios = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="calcHome">
      <Header />
      <a
        onClick={() => window.history.back()} // evite usar javascript: no href
        className="voltar"
        style={{ cursor: 'pointer' }} // para indicar que é clicável
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Voltar
      </a>

      <GlobalLoader isLoading={isLoading} />

      <div className="fundoCalc" />
      <h2>Calculadora de salário liquido</h2>
      <div className="formulario">
        <CalcForm setLoading={setLoading} />
      </div>
    </div>
  );
};

export default Salarios;
