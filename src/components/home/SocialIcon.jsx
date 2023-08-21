import React from 'react';


function SocialIcon(props) {
    const { link, icon, label, isNegative  } = props;
     // Si el icon comienza con "fa fa-", asumimos que es un ícono de FontAwesome
     if (icon.startsWith('fa fa-')) {
        return (
            <a target="_blank" aria-label={label}
               rel="noopener noreferrer" href={link} className="dark-icon" >
                <i className={icon} aria-hidden="true" />
            </a>
        );
    }
    
    // Si no, asumimos que es una ruta de imagen
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link} className={`dark-icon ${isNegative ? 'negative-image' : ''} social-icon`} > 
            <img src={icon} alt={label} className={'negative-image'} />
        </a>
    );
}

export default SocialIcon;
