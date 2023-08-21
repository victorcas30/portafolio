import React from 'react'
import { logos } from './logo';
import './design.css'

export const Design = () => {
  return (
    <div className='iconos_container'>
      {logos.map((item) => (
        <div className='icono' key={item.name}>
          <span className='icono_img'>{React.createElement(item.logo)}</span>
          <h4 className='icono_name'>{item.name}</h4>
        </div>
      ))}
    </div>
  )
};