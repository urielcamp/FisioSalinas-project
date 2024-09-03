import React from 'react';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <p className='dev'>
            Desarrollado por: <a href="https://www.linkedin.com/in/urielcampa%C3%B1a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
        <div className='footer-section'>
          <p className='copy'>&copy; Desde 2024 Todos los derechos reservados.</p>
        </div>
        <div className='footer-section'>
          <ul className='contact-list'>
            <li><i className="fas fa-phone"></i> Tel: 091858010</li>
            <li><i className="fas fa-envelope"></i> Email: edufisio1@hotmail.com</li>
            <li><i className="fas fa-info-circle"></i> lalalala</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
