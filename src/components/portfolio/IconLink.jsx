import React from 'react';
import './IconLink.css'; // Asegúrate de importar los estilos locales


function IconLink(props) {
   const {link, title, icon} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer" className={props.theme === 'dark' ? 'dark' : ''}>
         <i className={icon}/> {title}
      </a>
   );
}

export default IconLink;