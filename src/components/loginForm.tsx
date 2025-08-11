import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logar } from '../helpers/conexao';

function LoginForm({ onMostrarSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [emailValido, setEmailValido] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const validaEmail = (emailVal) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailVal);
  };

  const handleEmailChange = (e) => {
    const valorEmail = e.target.value;
    setEmail(valorEmail);
    setEmailValido(validaEmail(valorEmail));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const ativaMostraSenha = () => {
    setMostrarSenha((prevState) => !prevState);
  };

  const handleLogar = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const result = await logar(email, password);
      localStorage.setItem('user', JSON.stringify(result.user.name));
      localStorage.setItem('token', result.accessToken);
      navigate('/');
      console.log(result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className="login">
      <h2>Entrar</h2>
      <form onSubmit={handleLogar}>
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
              onChange={handlePasswordChange}
              name="password"
            />
            <button
              type="button"
              className="ativa_senha"
              onClick={ativaMostraSenha}
              name="mostrarSenha"
            >
              {mostrarSenha ? (
                <i className="bi bi-eye-fill" />
              ) : (
                <i className="bi bi-eye" />
              )}
            </button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="botao_entrar">
          <button type="submit" disabled={!emailValido} className="botao_ativo">
            Entrar
          </button>
        </div>
        <div className="login_nova_conta">
          Novo no TrybeBudget?
          {' '}
          <button type="button" onClick={onMostrarSignup} className="link_CriarConta">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
