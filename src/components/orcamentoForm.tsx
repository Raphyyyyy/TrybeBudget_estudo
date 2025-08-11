import React from 'react';
import Vazio from './orcamentoVazio';
import Lista from './orcamentoLista';
import '../styles/orcamentoForm.css';
import DBProvider from '../context/DBProvider';

function OrcamentoForm() {
  const { expense } = DBProvider();

  return (
    <div className="orcamentoFormPai">
      {/* {console.log(expense)} */}
      {expense.length === 0 ? (
        <Vazio />
      ) : (
        <Lista />
      )}
    </div>
  );
}

export default OrcamentoForm;
