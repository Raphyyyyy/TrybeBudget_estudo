import React from 'react';
import '../styles/calcSucesso.css';
import relogioIMG from '../../public/clock.png';

function CalcSucesso({ onCancel }) {
  return (
    <div>
      <div className="calcSucessoHome">
        <p onClick={ onCancel }>x</p>
        {' '}
        {/* Adicione o onClick para fechar */}
        <img src={ relogioIMG } alt="Relógio" className="relogio" />
        <h1 className="tituloSucesso">
          Salário salvo com
          <br />
          sucesso!
        </h1>
      </div>
    </div>
  );
}

export default CalcSucesso;
