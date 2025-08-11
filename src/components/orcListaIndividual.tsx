import React from 'react'
import '../styles/orcamentoListaInd.css'
import gastos from '../../public/gastos.svg'
import investimentos from '../../public/investimentos.svg'
import lazer from '../../public/lazer.svg'
import tresPontos from '../../public/3pontos.svg'
import Lixo from '../../public/lixo.svg'

const OrcListaIndividual = ({
  name,
  type,
  amount,
  id,
  index,
  indiceVisivel,
  alternarExibicaoDeletar,
  handleDelete
}) => {
  return (
    <div className='orcIndPai'>
      <div className='orcIndFilho'>
        <div className='orcIndIcone'>
          {type === "wants"
            ? <img src={lazer} alt="Lazer e desejos" />
            : type === "needs"
              ? <img src={gastos} alt="Necessário" />
              : <img src={investimentos} alt="Investimentos" />}
        </div>

        <div className='orcIndTexto'>
          <h3>{name}</h3>
          <p
            style={{
              backgroundColor: type === "wants"
                ? 'var(--roxo-lazer)'
                : type === "needs"
                  ? 'var(--verde-gastos)'
                  : 'var(--azul-investimento)'
            }}>
            {type === "wants"
              ? "Lazer e desejos"
              : type === "needs"
                ? "Gastos essenciais"
                : "Investimentos"}
          </p>
          
        </div>

        <div className='orcIndValor'>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(amount)}
          </p>

          <img
            src={tresPontos}
            alt="Opções"
            onClick={() => alternarExibicaoDeletar(index)}
            style={{ cursor: 'pointer', marginLeft: '1rem' }}
          />

          {indiceVisivel === index && (
            <div className="orcIndDeletar" onClick={() => handleDelete(id, 'expenses')}>
              <img src={Lixo} alt="Deletar" />
              &nbsp;Excluir
            </div>
          )}
        </div>

      </div>
      <hr />
    </div>
  )
}

export default OrcListaIndividual
