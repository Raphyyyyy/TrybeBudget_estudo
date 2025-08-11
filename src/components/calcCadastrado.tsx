import React, { useState } from 'react';
import '../styles/calcCadastrado.css';
import cifrao from '../../public/cifrao.svg';
import tresPontos from '../../public/3pontos.svg';
import DBProvider from '../context/DBProvider';
import CalcCadastradoSaldos from './calcCadastradoSaldos';
import Lixo from '../../public/lixo.svg';

function CalcCadastrado({ mostrarFormulario }) {
  const { income, deleteRecord } = DBProvider();
  const [indiceVisivel, setIndiceVisivel] = useState(null);

  const alternarExibicaoDeletar = (indice) => {
    if (indiceVisivel === indice) { // se o indice do botão for igual ao da tabela
      setIndiceVisivel(null);
      // faz o indice deixar de ser igual, logo não exibindo o item
    } else {
      setIndiceVisivel(indice);
      // faz o item ser igual ao indice, logo exibindo o item
    }// ele testa se o indiceVisivel é igual ao index do item da tabela, assim ele exibe o botão em cima do registro certo
  };

  const handleDelete = (id, table) => {
    deleteRecord(id, table);
    setIndiceVisivel(null);
  };

  return (
    <div className="calcCadastradoPai">
      <div className="saldosHeader">
        <h1>Histórico de salários</h1>
        <button className="addSalario" onClick={ mostrarFormulario }>+ Adicionar salário</button>
      </div>

      {income.map((salario, index) => (
        <div className="saldos" key={ index }>
          <div className="saldosHeader">
            <div className="salLiqTitulo">
              <img src={ cifrao } alt="cifrão" />
              &nbsp; Salário líquido
            </div>
            <img
              src={ tresPontos }
              alt="três pontos"
              onClick={ () => alternarExibicaoDeletar(index) }
              style={ { cursor: 'pointer' } }
            />

            <div
              className="deletaSal"
              style={ { display: indiceVisivel === index ? 'flex' : 'none' } }
              onClick={ () => handleDelete(salario.id, 'incomes') }
            >
              <img src={ Lixo } alt="deletar" />
              &nbsp;
              Excluir salário
            </div>
          </div>

          <CalcCadastradoSaldos
            salarioLiquido={ salario.salarioLiquido }
            salarioBruto={ salario.salarioBruto }
            data={ salario.data }
          />
        </div>
      ))}
    </div>
  );
}

export default CalcCadastrado;
