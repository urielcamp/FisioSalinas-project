import React from 'react';

const Contact = () => {
  return (
    <section className='contact-container'>
      <div className='form-container'>
        <form action="/submit_contact_form" method="post">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />
          
          <label htmlFor="telefono">Número de Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" rows="4" required></textarea>
          
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className='information-container'>
        <h2>Datos de contacto</h2>
        
      </div>
    </section>
  );
};

export default Contact;
