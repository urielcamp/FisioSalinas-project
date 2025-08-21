import React from 'react'

const Clinics = () => {

    const clinics = [
        {
            name: "Clinica Salinas",
            address: "Salinas sur esq tu madre",
            mapsUrl:"https://www.google.com/maps/place/Universidad+Tecnol%C3%B3gica+del+Uruguay+%7C+Instituto+T%C3%A9cnico+Regional+Sur+Oeste/@-33.1178686,-58.3373493,16z/data=!4m9!1m2!2m1!1sutec!3m5!1s0x95a54d7e16136ab7:0x4231d8a7fc167090!8m2!3d-33.1178681!4d-58.3304202!16s%2Fg%2F11cs194c4p?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            name: "Clinica carrasco",
            address: "Carrasco sur esq tu madre",
            mapsUrl: "https://www.google.com/maps/place/Universidad+Tecnol%C3%B3gica+-+UTEC/@-32.3068667,-58.3277924,11z/data=!4m10!1m2!2m1!1sutec!3m6!1s0x95afcb45956632c5:0x7bbed42c8f9e491f!8m2!3d-32.3068681!4d-58.08602!15sCgR1dGVjkgERcHVibGljX3VuaXZlcnNpdHmqAUIKCi9tLzBfd2g2bjUQASoIIgR1dGVjKAAyHhABIhrfK3SWfD890OZzAmJykJFNbF8dO4axY3Rr7zIIEAIiBHV0ZWPgAQA!16s%2Fg%2F11ss4p2zc5?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D",
        }
    ];

    return (
        <section className='clinics'>

            <h2>Nuestras clinicas</h2>

            <div className='clinics-lists'>
                {clinics.map((clinic, index) => (
            <a
                key={index}
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="clinic"
            >
                <img src={clinic.image} alt={clinic.name} />
                <div className="clinic__overlay">
                <h3>{clinic.name}</h3>
                </div>
            </a>
            ))}
            </div>
            
        </section>
    )
}

export default Clinics