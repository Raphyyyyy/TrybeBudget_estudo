import React from 'react';
import '../styles/graficosForm.css';
import useDB from '../context/DBProvider'; 

const GraficosForm = ({ setLoading }) => {
  const { expense } = useDB(setLoading); 

  const { needs, wants, investments, total } = expense.reduce(
    (acc, item) => {
      if (item.type === 'needs') acc.needs += item.amount;
      else if (item.type === 'wants') acc.wants += item.amount;
      else acc.investments += item.amount;
      acc.total += item.amount;
      return acc;
    },
    { needs: 0, wants: 0, investments: 0, total: 0 }
  );

  const perc = (value) => (total ? ((value / total) * 100).toFixed(1) : 0);

  return (
    <div className="graficosPai">
      <div className="grafFilho">
        <p>Total</p>
        <div className="captions">
          <h1>R$ {total.toFixed(2)}</h1>
        </div>
      </div>
      <hr />

      <div className="grafFilho">
        <p>Gastos essenciais</p>
        <div className="captions">
          <h1>R$ {needs.toFixed(2)}</h1>
          <h3 className="perc1">({perc(needs)}%)</h3>
        </div>
        <div className="grafico">
          <div className="graficoBar barNeeds" style={{ width: `${perc(needs)}%` }} />
        </div>
      </div>
      <hr />

      <div className="grafFilho">
        <p>Lazer e desejos</p>
        <div className="captions">
          <h1>R$ {wants.toFixed(2)}</h1>
          <h3 className="perc2">({perc(wants)}%)</h3>
        </div>
        <div className="grafico">
          <div className="graficoBar barWants" style={{ width: `${perc(wants)}%` }} />
        </div>
      </div>
      <hr />

      <div className="grafFilho">
        <p>Investimentos</p>
        <div className="captions">
          <h1>R$ {investments.toFixed(2)}</h1>
          <h3 className="perc3">({perc(investments)}%)</h3>
        </div>
        <div className="grafico">
          <div className="graficoBar barInvest" style={{ width: `${perc(investments)}%` }} />
        </div>
      </div>
    </div>
  );
};

export default GraficosForm;
