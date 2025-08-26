import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="group-1">
        <div className="box">
          <figure>
            <a href="#"><img src="/img/logo.jpg" alt="Logo" /></a>
          </figure>
        </div>

        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsa, sint in dicta ipsam provident vitae ducimus minus, id assumenda cum expedita obcaecati? Dolorem, sequi libero vero fu</p>
        </div>

        <div className="box">
          <h2>Nuestras Redes</h2>
          <div className="social-networks">
            <a href="#" className='fa-brands fa-facebook'></a>
            <a href="#" className='fa-brands fa-instagram'></a>
            <a href="#" className='fa-brands fa-whatsapp'></a>
            <a href="#" className='fa-solid fa-envelope'></a>
          </div>
        </div>
      </div>

      <div className="group-2">
        <small>&copy; 2025 <b>FisioSalinas</b> - Todos los Derechos Reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
