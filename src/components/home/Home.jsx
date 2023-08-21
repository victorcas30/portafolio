import React from 'react';
import './home.css'; // Importar el archivo CSS
import me from '../../img/alex.png';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box } from '@mui/material';
import { info } from '../../info/Info';

export default function Home() {
   return (
      <Box
         component={'main'}
         display={'flex'}
         flexDirection={{ xs: 'column', md: 'row' }}
         alignItems={'center'}
         justifyContent={'center'}
         minHeight={'calc(100vh - 175px)'}
      >
         <Box
            className="avatar shadowed" // Usar la clase "avatar" directamente
            alt={'image of developer'}
            style={{ background: info.gradient }}
            component={'img'}
            src={me}
            width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'}
            p={'0.75rem'}
            mb={{ xs: '1rem', sm: 0 }}
            mr={{ xs: 0, md: '2rem' }}
         />
         <Box>
            <h1>
               Hola soy {' '}
               <span
                  style={{
                     background: info.gradient,
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                  }}
               >
                  {info.firstName}
               </span>
               <span className="hand">🤚</span>
            </h1>
            <h2>Soy {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} className="mini-bio-item" />
               ))}
            </Box>
            <Box
               display={'flex'}
               gap={'1.5rem'}
               justifyContent={'center'}
               fontSize={{ xs: '2rem', md: '2.5rem' }}
            >
               {info.socials.map((social, index) => (
                  <SocialIcon
                     className="social-icon"
                     key={index}
                     link={social.link}
                     icon={social.icon}
                     label={social.label}
                     isNegative={true}
                  />
               ))}
            </Box>
         </Box>
      </Box>
   );
}
