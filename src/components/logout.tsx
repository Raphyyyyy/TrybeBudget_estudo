import React, { useState } from 'react';
import '../styles/logout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; /* Importe o useNavigate */

function Logout() {
  const [menuAberto, setMenuAberto] = useState(false);
  const nomeUsuario = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate(); /* Inicialize useNavigate */

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="usuarioLogado" onClick={ toggleMenu }>
      <FontAwesomeIcon icon={ faCircleUser } className="logoUsuario" />
      {nomeUsuario}
      <FontAwesomeIcon icon={ faChevronDown } className="logoUsuario" />
      <ul className={ `dropdownMenu${menuAberto ? ' aberto' : ''}` }>
        <li>
          <a href="/login" onClick={ handleLogout }>Sair</a>
        </li>
      </ul>
    </div>
  );
}

export default Logout;
