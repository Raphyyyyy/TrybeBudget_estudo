import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormatInput from '../helpers/FormatInput';
import { calculateNetSalary } from '../helpers/taxes';
import '../styles/calcFormAdd.css';
import CalcSucesso from './calcSucesso';

// Cria uma variável para receber os valores dos inputs (parte 1)
function CalcFormAdd({ onCancel }) {
  const [dadosFormulario, setDadosFormulario] = useState({
    salarioBruto: '',
    descontos: '',
    data: '',
    dependentes: '',
  });

  const [botaoHabilitado, setBotaoHabilitado] = useState(false);
  const [formularioResultadoVisivel, setFormularioResultadoVisivel] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [sucesso, setSucesso] = useState(false); // Adicione um estado para controlar o sucesso

  // Atualiza os valores da variável sempre que algo é digitado (parte 2)
  const atualizarDados = (e) => {
    const { name, value } = e.target;
    setDadosFormulario((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { salarioBruto, descontos, data, dependentes } = dadosFormulario;
    const habilitarBotao = Number(salarioBruto.replace(/[^\d.-]/g, '')) > 0
      && Number(descontos.replace(/[^\d.-]/g, '')) >= 0
      && data
      && Number(dependentes) >= 0;

    setBotaoHabilitado(habilitarBotao);
  }, [dadosFormulario]);

  // Verifica se todos os campos foram preenchidos (parte 3)
  const enviarFormulario = (e) => {
    e.preventDefault();
    if (Object.values(dadosFormulario).some((valor) => valor === '')) {
      alert('Por favor, preencha todos os campos.');
    } else {
      const resultado = calculateNetSalary(
        parseFloat(dadosFormulario.salarioBruto.replace(/[^\d.,-]/g, '').replace(',', '.')),
        Number(dadosFormulario.dependentes),
        parseFloat(dadosFormulario.descontos.replace(/[^\d.,-]/g, '').replace(',', '.')),
      );
      setResultado(resultado);
      setFormularioResultadoVisivel(true);
    }
  };

  // salva o salario no banco e fecha os forms
  const salvarSalario = async () => {
    const novoSalario = {
      salarioBruto: dadosFormulario.salarioBruto,
      descontos: dadosFormulario.descontos,
      data: dadosFormulario.data,
      dependentes: dadosFormulario.dependentes,
      salarioLiquido: resultado.netSalary,
    };

    const token = localStorage.getItem('token'); // Recupere o token do local storage

    try {
      const response = await axios.post('http://localhost:3050/incomes', novoSalario, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclua o token no cabeçalho
        },
      });
      console.log('Salário salvo com sucesso:', response.data);

      setFormularioResultadoVisivel(false);
      setSucesso(true); // Atualize o estado para mostrar a mensagem de sucesso
    } catch (error) {
      console.error('Erro ao salvar salário:', error);
      console.log('Token:', token);
    }
  };

  return (
    <div className="calcFormAddHome">
      <div className="fundoEscuro" />

      {sucesso ? (
        <CalcSucesso onCancel={ onCancel } /> // Passe a função onCancel para CalcSucesso
      ) : !formularioResultadoVisivel ? (
        <div className="addSalarioForm">
          <form onSubmit={ enviarFormulario }>
            <h1>Adicione um novo salário</h1>

            <h3>Salário mensal bruto</h3>
            <p>Insira o salário sem descontos</p>
            <FormatInput
              name="salarioBruto"
              value={ dadosFormulario.salarioBruto }
              onChange={ atualizarDados }
            />

            <h3>Descontos</h3>
            <p>Insira descontos no seu salário</p>
            <FormatInput
              name="descontos"
              value={ dadosFormulario.descontos }
              onChange={ atualizarDados }
            />

            <h3>Data</h3>
            <p>Insira a data que você passou a receber esse salário</p>
            <input
              type="date"
              name="data"
              onChange={ atualizarDados }
              value={ dadosFormulario.data }
            />

            <h3>Dependentes</h3>
            <p>Insira o número de dependentes que você possui</p>
            <input
              type="number"
              name="dependentes"
              onChange={ atualizarDados }
              value={ dadosFormulario.dependentes }
            />

            <div className="botoes">
              <button type="button" className="cancelBot" onClick={ onCancel }>
                Cancelar
              </button>
              <button
                type="submit"
                className="calculateBot"
                disabled={ !botaoHabilitado }
              >
                Calcular
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="resultadoForm">
          <div className="tituloRes">
            <h1>Seu salário líquido é:</h1>
            <h1 className="fecharX" onClick={ onCancel }>x</h1>
          </div>

          <div className="resultados">
            <div className="salario">
              <h3>{`R$ ${resultado.netSalary}`}</h3>
            </div>

            <div className="resultDetalhes">
              <hr />
              <div className="detalhesCalculadora">
                <p>Salário mensal bruto</p>
                <p>
                  R$
                  {' '}
                  {resultado.grossSalary}
                </p>
              </div>
              <div className="detalhesCalculadora">
                <p>INSS</p>
                <p>
                  R$
                  {' '}
                  {resultado.inssDeduction}
                </p>
              </div>
              <div className="detalhesCalculadora">
                <p>IRRF</p>
                <p>
                  R$
                  {' '}
                  {resultado.irrfDeduction}
                </p>
              </div>
              <div className="detalhesCalculadora">
                <p>Outros descontos</p>
                <p>
                  R$
                  {' '}
                  {resultado.otherDeductions}
                </p>
              </div>
            </div>
          </div>

          <div className="botoesSalvar">
            <button
              className="voltarBot"
              onClick={ () => setFormularioResultadoVisivel(false) }
            >
              Voltar
            </button>
            <button
              className="salvarSalarioBot"
              onClick={ salvarSalario }
            >
              Salvar salário
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalcFormAdd;
