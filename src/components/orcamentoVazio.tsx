import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import dinheiro from '../../public/dinheiro.png';
import '../styles/orcamentoVazio.css';
import Cadastro from './orcamentoCadastro';

export function mostraCadOrc(setcadOrcVisivel) {
  setcadOrcVisivel(true);
  console.log('mostrarFormulario');
}

function OrcamentoVazio() {
  const [cadOrcVisivel, setcadOrcVisivel] = useState(false);

  return (
    <div className="formInicial">
      <img src={ dinheiro } className="dinheiroIcone" />
      <h1>Nenhum gasto adicionado</h1>
      <p>Cadastre um gasto no orçamento atual</p>
      <button className="addOrc" onClick={ () => mostraCadOrc(setcadOrcVisivel) }>
        <FontAwesomeIcon icon={ faPlus } />
        {' '}
        Cadastrar gasto
      </button>
      {cadOrcVisivel && <Cadastro setcadOrcVisivel={ setcadOrcVisivel } />}
    </div>
  );
}

export default OrcamentoVazio;
