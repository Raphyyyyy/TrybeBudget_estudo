import React from 'react';
import '../styles/header.css';
import Logout from './logout';

import trybeLogo1 from '../../public/trybe_logo.png';

function Header() {
  return (
    <div className="headerPai">
      <img src={ trybeLogo1 } alt="Trybe" className="logoTrybe" />

      <Logout />
    </div>
  );
}

export default Header;
