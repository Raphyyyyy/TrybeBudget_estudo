import React, { useState } from 'react';
import '../styles/calcForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import dinheiro from '../../public/dinheiro.png';
import CalcFormAdd from './calcFormAdd';
import useDB from '../context/DBProvider';
import CalcCadastrado from './calcCadastrado';

// a função quando vai ser exportada tem que ser declarada antes da func principal
export function mostrarFormulario(setFormularioVisivel) {
  setFormularioVisivel(true);
  // console.log('mostrarFormulario');
}

function CalcForm({ setLoading }) {
  const [formularioVisivel, setFormularioVisivel] = useState(false);
  const { income } = useDB(setLoading);
  console.log('income:', income);

  return (
    <div className="calcFormPai">
      {!formularioVisivel && income.length === 0 && (
        <div className="formInicial">
          <img src={dinheiro} className="dinheiroIcone" />
          <h1>Nenhum salário adicionado</h1>
          <p>Adicione um salário bruto para fazer o cálculo</p>
          <button
            className="addSalario"
            onClick={() => mostrarFormulario(setFormularioVisivel)}
          >
            <FontAwesomeIcon icon={faPlus} /> Adicionar salário
          </button>
        </div>
      )}

      {income.length > 0 && (
        <CalcCadastrado mostrarFormulario={() => mostrarFormulario(setFormularioVisivel)} />
      )}

      {formularioVisivel && (
        <CalcFormAdd onCancel={() => setFormularioVisivel(false)} />
      )}
    </div>
  );
}

export default CalcForm;
