import React from 'react'

const WhatsAppButton = () => {
    const phoneNumber = "59894734954"; 
    const message = "Hola, quisiera reservar una sesión de fisioterapia"; 

return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Contactar por WhatsApp"
        >
        <img
            src="/img/wapp.png"
            alt="WhatsApp"
        />
        </a>
    );
};

export default WhatsAppButton;