import React from 'react';
import { logos } from './logo';
import './stack.css';

export const Stack = () => {
  const firstRowLogos = logos.slice(0, 5);
  const secondRowLogos = logos.slice(5, 10);

  return (
    <div className='iconos_container'>
      <div className='iconos_row'>
        {firstRowLogos.map((item) => (
          <div className='icono' key={item.name}>
            <span className='icono_img'>{React.createElement(item.logo)}</span>
            <h4 className='icono_name'>{item.name}</h4>
          </div>
        ))}
      </div>
      <div className='iconos_row'>
        {secondRowLogos.map((item) => (
          <div className='icono' key={item.name}>
            <span className='icono_img'>{React.createElement(item.logo)}</span>
            <h4 className='icono_name'>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
