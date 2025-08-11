import React, { useState } from 'react';
import trybeLogo from '../../public/trybe_logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/login.css';
import LoginForm from '../components/loginForm';
import SignupForm from '../components/signupForm';


function Login() {
  const [mostrarSignup, setMostrarSignup] = useState(false);

  return (
    <div className="login_pai">
      <div className="login_esq">
        <img src={ trybeLogo } alt="Trybe" className="login_logo" />

        {mostrarSignup ? (
          <SignupForm onVoltarLogin={() => setMostrarSignup(false)} /> // Passa a função para voltar ao login
        ) : (
          <LoginForm onMostrarSignup={() => setMostrarSignup(true)} /> // Passa a função para mostrar o signup
        )}
      

      </div>
      <div className="login_dir">
        <h2>Organize suas finanças de forma simples e eficiente!</h2>
      </div>
    </div>
  );
}

export default Login;
