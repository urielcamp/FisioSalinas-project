import React from 'react'

const Hero = () => {
  return (
    <section className="hero-container" id='hero'>
    <div className="textHero-container">
        <h1><span>Bienvenido a Fisio Salinas </span>Recupera tu bienestar y calidad de vida</h1>
        <p className="textHero">
            Nos dedicamos a ayudarte a alcanzar tu máximo potencial físico.
            ¡Descubre cómo podemos ayudarte a sentirte mejor y vivir sin limitaciones!
        </p>
        <a href='#contact' className='buttonHero'>Contactanos</a>
    </div>

    <div className="imgHero-container">
      <div className='imgHero'>
      </div>
    </div>
</section>

  )
}

export default Hero


