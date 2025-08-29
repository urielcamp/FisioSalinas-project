import React, { useState } from 'react';




const Contact = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    descripcion: ''
  });

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Mensaje enviado correctamente');
    } else {
      alert('Error al enviar el mensaje');
    }
  };






  return (
        <section className="contact-container" id="contact">
      <div className="contact-content">
        <div className="form-container">
          <h1 className="titleContact">Agendate</h1>
          <form action="/submit_contact_form" method="post" onSubmit={handleSubmit}>
            <div className="name-row">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
                <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
              <input
                type="tel"
                name="telefono"
                placeholder="Celular"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="descripcion"
                rows="2"
                placeholder="Descripción"
                value={formData.descripcion}
                onChange={handleChange}
                required
              ></textarea>
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
