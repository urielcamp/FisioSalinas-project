import React from 'react';


const Header = () => {
  return (
    <header>

      <h1 className='logo'>

        <div>
          <img src="../assets/logo.jpg" alt="Logo Fisioterapeuta Salinas" />
        </div>

      </h1>

      <nav>

        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>

      </nav>

    </header>
  );
}

export default Header;
