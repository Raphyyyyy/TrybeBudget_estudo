import React from 'react';

// Função para formatar a data no formato dd/mm/yyyy
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function CalcCadastradoSaldos({ salarioLiquido, salarioBruto, data }) {
  return (
    <>
      <div className="salarios">
        <h3>{salarioLiquido}</h3>
        <p>
          Salário bruto &nbsp;
          {salarioBruto}
        </p>
      </div>

      <hr />

      <div className="saldosData">
        <p>{formatDate(data)}</p>
      </div>
    </>
  );
}

export default CalcCadastradoSaldos;
