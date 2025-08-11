import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import fundo from '../../public/background.jpg';
import '../styles/home.css';
import calculadoraImg from '../../public/calculadora.png';
import orcamentoImg from '../../public/orcamento.png';

function Home() {
  return (
    <div>
      <Header />
      <img src={ fundo } className="fundoHome" />
      <h2 className="chegou">
        Chegou a hora de organizar
        <br />
        suas finanças pessoais!
      </h2>
      <div className="cards">
        <Link to="/salarios">
          <div className="calculadoraCard">
            <img src={ calculadoraImg } alt="calculadora" />
            <h2>Calculadora</h2>
            <p>de salário liquido</p>
          </div>
        </Link>
        <Link to="/orcamento">
          <div className="orcamentoCard">
            <img src={ orcamentoImg } alt="orçamento" />
            <h2>Orçamento</h2>
            <p>mensal detalhado</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;

// mesmo assim da erros de lint
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import fundo from '../../public/background.jpg';
// import '../styles/home.css';
// import calculadoraImg from '../../public/calculadora.png';
// import orcamentoImg from '../../public/orcamento.png';

// function Home() {
//   return (
//     <div>
//       <Header />
//       <img src={ fundo } className="fundoHome" />
//       <h2 className="chegou">
//         Chegou a hora de organizar suas finanças pessoais!
//       </h2>
//       <div className="cards">
//         <a href="/salarios">
//           <div className="calculadoraCard">
//             <img src={ calculadoraImg } alt="calculadora" />
//             <h2>Calculadora</h2>
//             <p>de salário liquido</p>
//           </div>
//         </a>
//         <a href="/orcamento">
//           <div className="orcamentoCard">
//             <img src={ orcamentoImg } alt="orçamento" />
//             <h2>Orçamento</h2>
//             <p>mensal detalhado</p>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Home;
