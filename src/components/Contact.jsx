import React from 'react';

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <div className='form-container'>
        <h1 className='titleContact'>Contactanos</h1>
        <form action="/submit_contact_form" method="post">
          <label  htmlFor="nombre">Nombre completo:</label>
          <input type="text" id="nombre" name="nombre" required />
          
          
          <label htmlFor="telefono">Celular:</label>
          <input type="tel" id="telefono" name="telefono" required />
          
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="descripcion">Mensaje:</label>
          <textarea id="descripcion" name="descripcion" rows="4" required></textarea>
          
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
