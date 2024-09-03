import React from 'react'
import dt from '../img/dt.jpeg';
import vd from '../img/instalaciones.mp4';

const About = () => {
  return (
    <section id='about' className='about-Container'>

      <article className='about-dt'>

        <div className='container-img'>

          <img className='img-about' src={dt} alt="img dt" />

        </div>

        <div className='container-textAbout'>
          
          <h3 className='title-about'>
            DT. Richard Ferreira
          </h3>

          <p className='text-about'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero nihil quasi aspernatur soluta,
            porro voluptatum aliquam natus consequatur culpa,
            molestiae voluptates ab incidunt nulla at tenetur, reprehenderit nesciunt nisi!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, magni dolorem consequatur velit
            beatae recusandae magnam culpa quisquam dolores eveniet laborum ea vitae quidem?
            Id laborum quas aperiam praesentium. Labore.
          </p>

        </div>

      </article>

    </section>
  )
}

export default About

