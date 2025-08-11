import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastrar } from '../helpers/conexao';
import '../styles/login.css';
import '../styles/signup.css';

function signupForm({ onVoltarLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [emailValido, setEmailValido] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validaEmail = (emailVal: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailVal);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorEmail = e.target.value;
    setEmail(valorEmail);
    setEmailValido(validaEmail(valorEmail));
  };

  const handleCadastrar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const result = await cadastrar(name, email, password);
      localStorage.setItem('user', JSON.stringify(result.user.name));
      localStorage.setItem('token', result.accessToken);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Erro na conexão com o servidor');
    }
  };

  return (
    <div className="login">
      <h2 className='criarConta'>Criar conta</h2>
      <form className="signForm" onSubmit={handleCadastrar}>
        <div className="form_group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </div>

        <div className="form_group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={handleEmailChange}
            name="email"
          />
          {!emailValido && email && (
            <p style={{ color: 'red' }}>E-mail inválido</p>
          )}
        </div>

        <div className="form_group">
          <label htmlFor="password">Senha</label>
          <div className="password_container">
            <input
              type={mostrarSenha ? 'text' : 'password'}
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
        </div>

        <div className="form_group">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <div className="password_container">
            <input
              type={mostrarSenha ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
            />
            <button
              type="button"
              className="ativa_senha_signup"
              onClick={() => setMostrarSenha((prev) => !prev)}
              name="mostrarSenha"
            >
              {mostrarSenha ? (
                <i className="bi bi-eye-fill" />
              ) : (
                <i className="bi bi-eye" />
              )}
            </button>
          </div>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}


          <div className="botao_entrar botoesSignup">

            <div className="botao_entrar">
              <button type="button" onClick={onVoltarLogin} className="botao_ativo botao_voltar">
                Voltar
              </button>

              <button type="submit" disabled={!emailValido} className="botao_ativo">
                Cadastrar
              </button>
            </div>


        </div>

      </form>
    </div>
  );
}

export default signupForm;
