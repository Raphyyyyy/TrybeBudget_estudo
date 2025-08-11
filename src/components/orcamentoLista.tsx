import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import tresPontos from '../../public/3pontos.svg';
import Cadastro from './orcamentoCadastro';
import useDB from '../context/DBProvider'; // assumindo que isso é um hook
import OrcLista from './orcListaIndividual';

export function mostraCadOrc(setcadOrcVisivel) {
  setcadOrcVisivel(true);
  console.log('mostrarFormulario');
}

const OrcamentoLista = () => {
  const [cadOrcVisivel, setcadOrcVisivel] = useState(false);
  const { expense, deleteRecord } = useDB(); // assumindo que useDB é o hook certo
  const [indiceVisivel, setIndiceVisivel] = useState(null);

  const alternarExibicaoDeletar = (indice) => {
    setIndiceVisivel(indiceVisivel === indice ? null : indice);
  };

  const handleDelete = (id, table) => {
    deleteRecord(id, table);
    setIndiceVisivel(null);
  };

  return (
    <div className='orcamentoListaPai'>

      <div className="orcListaFilho">

        <div className="orcListaHead">
          <h1>Orçamento atual</h1>
          <button className="addOrc" onClick={() => mostraCadOrc(setcadOrcVisivel)}>
            <FontAwesomeIcon icon={faPlus} /> Cadastrar gasto
          </button>
        </div>

        {expense.map((item, index) => (
          <OrcLista
            key={item.id}
            id={item.id}
            name={item.name}
            type={item.type}
            amount={item.amount}
            index={index} 
            alternarExibicaoDeletar={alternarExibicaoDeletar}
            indiceVisivel={indiceVisivel}
            handleDelete={handleDelete}
          />
        ))}

        {cadOrcVisivel && <Cadastro setcadOrcVisivel={setcadOrcVisivel} />}
      </div>

    </div>
  );
};

export default OrcamentoLista;
