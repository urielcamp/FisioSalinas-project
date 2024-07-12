import React from 'react';


const Header = () => {
  return (
    <header id='header'>

      <h1 className='logo'>

        <div className='titleContainer'>
          <a href="#"><h1>Fisio Salinas</h1></a>
          
        </div>

      </h1>

      <nav>

        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#service">Tratamientos</a></li>
          <li><a href="#proceeds">Beneficios</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

      </nav>

    </header>
  );
}

export default Header;
