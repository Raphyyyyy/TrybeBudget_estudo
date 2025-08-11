import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormatInput from '../helpers/FormatInput';
import CalcSucesso from './calcSucesso'; // Importar o componente CalcSucesso
import '../styles/orcamentoCadastro.css';

function OrcamentoCadastro({ setcadOrcVisivel }) {
  // cria a variavel do formulário
  const [dadosFormulario, setDadosFormulario] = useState({
    name: '',
    type: '',
    amount: '',
  });

  // atualiza os dados do formulário quando digita
  const atualizarDados = (e) => {
    const { name, value } = e.target;
    setDadosFormulario((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // habilita o botão de salvar se estiver tudo completado
  const [botaoHabilitado, setBotaoHabilitado] = useState(false);
  const [mostrarSucesso, setMostrarSucesso] = useState(false); // Estado para controlar a visibilidade do CalcSucesso

  useEffect(() => {
    const { name, type, amount } = dadosFormulario;
    const habilitarBotao = name.trim().length > 0
      && type.trim().length > 0
      && Number(amount.replace(/[^\d.-]/g, '')) > 0;

    setBotaoHabilitado(habilitarBotao);
  }, [dadosFormulario]);

  // salva o orçamento no banco de dados
  const salvarOrcamento = async () => {
    const novoOrcamento = {
      name: dadosFormulario.name,
      type: dadosFormulario.type,
      amount: Number(dadosFormulario.amount.replace(/[^\d.-]/g, '')),
    };

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:3050/expenses', novoOrcamento, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Orçamento salvo com sucesso:', response.data);
      setMostrarSucesso(true); // Mostrar o CalcSucesso ao salvar
    } catch (error) {
      console.error('Erro ao salvar o orçamento:', error);
    }
  };

  // envia o formulário e executa o salvamento
  const enviarFormulario = (e) => {
    e.preventDefault();
    salvarOrcamento();
  };

  return (
    <div>
      {mostrarSucesso ? ( // Condicional para exibir o CalcSucesso
        <CalcSucesso onCancel={ () => setcadOrcVisivel(false) } />

      ) : (

        <div className="addOrcForm">
          <div className="resForm">
            {/* ao apertar no submit(salvar) ele salva o form */}
            <form onSubmit={ enviarFormulario }>
              <h1>Adicionar novo gasto</h1>

              <h3>Gasto</h3>
              <p>Insira um título para o gasto</p>
              <input type="text" name="name" value={ dadosFormulario.name } onChange={ atualizarDados } />

              <h3>Tipo de gasto</h3>
              <p>Escolha uma das opções disponíveis</p>
              <select name="type" value={ dadosFormulario.type } onChange={ atualizarDados }>
                <option value="">Selecione...</option>
                <option value="needs">Gastos essenciais</option>
                <option value="wants">Lazer e desejos</option>
                <option value="savings">Investimentos</option>
              </select>

              <h3>Valor</h3>
              <p>Insira o valor total do gasto</p>
              <FormatInput name="amount" onChange={ atualizarDados } value={ dadosFormulario.amount } />

              <div className="botoes">
                <button type="button" className="cancelBot" onClick={ () => setcadOrcVisivel(false) }>
                  Cancelar
                </button>
                <button type="submit" className="salvarBot" disabled={ !botaoHabilitado }>
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="fundoEscuro" />
    </div>
  );
}

export default OrcamentoCadastro;
