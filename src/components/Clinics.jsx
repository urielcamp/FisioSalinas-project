import React from 'react';
import clinicsData from '../data/clinicsData.json';
//import './clinics.scss';

const Clinics = () => (
    <section className='clinics'>
        <h2>Nuestras clínicas</h2>
        <div className='clinics-lists'>
        {clinicsData.map((clinic, index) => (
            <a
            key={index}
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clinic"
            >
            <img src={clinic.image} alt={clinic.name} loading="lazy" />
            <div className="clinic__overlay">
                <h3>{clinic.name}</h3>
                <p>{clinic.address}</p>
            </div>
            </a>
        ))}
        </div>
    </section>
);

export default Clinics;
