import React from 'react';
import iT from '../img/iconTel.png';



const Header = () => {
  return (
    <header id='header'>

      <h1 className='logo'>

        <div className='titleContainer'>
          <a href="#"><h1>Fisio<span>Salinas</span></h1></a>
          
        </div>

      </h1>

      <nav>

        <ul className='ul-navbar'>
          <li className='li-navbar'><a href="#">Inicio</a></li>
          <li className='li-navbar'><a href="#about">Nosotros</a></li>
          <li className='li-navbar'><a href="#service">Tratamientos</a></li>
          <li className='li-navbar'><a href="#proceeds">Beneficios</a></li>
          <li className='li-navbar'><a href="#contact">Contacto</a></li>
        </ul>


      </nav>

    </header>
  );
}

export default Header;
