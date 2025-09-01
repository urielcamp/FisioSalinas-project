import React from 'react';
import tA from '/img/TratA.jpeg';
import tB from '/img/TratB.jpeg';
import tC from '/img/TratC.jpeg';

const Service = () => {
    return (
      
    <section className='service-section'>
        <h2 className='service-title'>Ofrecemos</h2>

        <div className='service-container'>

            <div className='service'>
                
                <div className="img-container">
                    <img src={tA} alt="Imagen-Tratamiento-1"/>
                </div>
                
                <div className='textService-container'>
                    <h3 className="service-SubTitle">Tratamiento 1</h3>
                    <p className="text-service">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam, unde placeat non perferendis excepturi rerum voluptate, at nostrum vitae quo facere nihil quibusdam eligendi incidunt cupiditate animi sit odit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic tenetur exercitationem amet, officiis alias quisquam, voluptas quae architecto molestiae eaque suscipit magnam non expedita dolores. Ab praesentium saepe eum alias?</p>
                </div>
            </div>

                <div className='card-background'>
                    <div className="card-container">
                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>

                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>
                                
                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>
                    </div>
                </div>




            <div className='service izquierda'>
                
                <div className='textService-container'>
                    <h3 className="service-SubTitle">Tratamiento 2</h3>
                    <p className="text-service">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam, unde placeat non perferendis excepturi rerum voluptate, at nostrum vitae quo facere nihil quibusdam eligendi incidunt cupiditate animi sit odit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic tenetur exercitationem amet, officiis alias quisquam, voluptas quae architecto molestiae eaque suscipit magnam non expedita dolores. Ab praesentium saepe eum alias?</p>
                </div>
                
                <div className="img-container img-izquierda">
                    <img src={tB} alt="Imagen-Tratamiento-2"/>
                </div>
            </div>

            <div className='card-background'>
                    <div className="card-container">
                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>

                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>
                                
                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>
                    </div>
                </div>


      <div className='service'>
                
                <div className="img-container">
                    <img src={tC} alt="Imagen-Tratamiento-3"/>
                </div>
                
                <div className='textService-container'>
                    <h3 className="service-SubTitle">Tratamiento 1</h3>
                    <p className="text-service">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam, unde placeat non perferendis excepturi rerum voluptate, at nostrum vitae quo facere nihil quibusdam eligendi incidunt cupiditate animi sit odit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic tenetur exercitationem amet, officiis alias quisquam, voluptas quae architecto molestiae eaque suscipit magnam non expedita dolores. Ab praesentium saepe eum alias?</p>
                </div>
            </div>

                <div className='card-background'>
                    <div className="card-container">
                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>

                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>
                                
                        <div className='card-body'>
                            <h2 className='card-title'>Alivio del dolor</h2>
                            <p className='card-text'>Utilizo técnicas avanzadas de terapia manual y ejercicios específicos para aliviar tu dolor,restaurando tu confort y movilidad.</p>
                        </div>
                    </div>
                </div>
                

                
        </div>
     </section>

        
    );
};

export default Service;

