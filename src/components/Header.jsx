import React, { useState } from 'react';
import iT from '/img/iconTel.png';



const Header = () => {

const [menuActivo,setMenuActivo] = useState(false);

const toggleMenu = () => {
    setMenuActivo(!menuActivo);
};

  return (
    <header id='header'>

  <div className="back-header">
    <h1 className='logo'>

        <div className='titleContainer'>
          <a href="#"><h1>Fisio<span>Salinas</span></h1></a>
          
        </div>

     

      </h1>

      <div className="hamburgerContainer"  onClick={toggleMenu}>
        <i className="fa-solid fa-bars" ></i>
      </div>

  </div>
    
      <nav>
        <ul className={`ul-navbar ${menuActivo ? "activado" : "desactivado"}`}>
          <li className='li-navbar'><a href="#">Inicio</a></li>
          <li className='li-navbar'><a href="#about">Nosotros</a></li>
          <li className='li-navbar'><a href="#service">Tratamientos</a></li>
          <li className='li-navbar'><a href="#contact">Contacto</a></li>
        </ul>


      </nav>

    </header>
  );
}

export default Header;
