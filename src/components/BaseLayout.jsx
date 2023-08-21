import React, { useEffect, useState } from 'react';
import './BaseLayout.css';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode);
      } else {
         localStorage.setItem('darkMode', 'false');
      }
   }, []);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode;
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
      setDarkMode(oppositeOfCurrentDarkMode);

      // Cambiar los colores de los iconos cuando cambias al modo oscuro
      const iconElements = document.querySelectorAll('.dark-icon');
      iconElements.forEach(icon => {
         icon.style.color = oppositeOfCurrentDarkMode ? 'var(--white)' : 'var(--dark)';
      });
   }

   return (
      <Box className={darkMode ? 'dark' : 'light'}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route path={'/portafolio'} element={<Home />} />
                  <Route path={'/about'} element={<About />} />
                  <Route path={'/portfolio'} element={<Portfolio />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'} className="footer-text">
                  <p>Frontend Developer - Victor Castillo 🎧</p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}
