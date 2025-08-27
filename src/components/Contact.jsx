import React from 'react';

const Contact = () => {
  return (
        <section className="contact-container" id="contact">
      <div className="contact-content">
        <div className="form-container">
          <h1 className="titleContact">Contáctanos</h1>
          <form action="/submit_contact_form" method="post">
            <div className="name-row">
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellido" required />
            </div>
            <input type="tel" id="telefono" name="telefono" placeholder="Celular" required />
            <input type="email" id="email" placeholder="Correo" required />
            <textarea id="descripcion" rows="2" placeholder="Descripción" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className="list-container">

          <div className="listContact-container">
            <h2>Datos de contacto</h2>
            <ul>
              <li><strong>Teléfono:</strong> +598 99 123 456</li>
              <li><strong>Email:</strong> contacto@fisioterapia.com</li>
            </ul>
          </div>
        

          <div className='redesContact-container'>
              <a href="#" className='fa-brands fa-facebook'></a>
              <a href="#" className='fa-brands fa-instagram'></a>
              <a href="#" className='fa-brands fa-whatsapp'></a>
              <a href="#" className='fa-solid fa-envelope'></a>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Contact;
