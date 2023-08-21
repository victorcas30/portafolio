import React from 'react';
import './terminal.css'; // Importar el archivo CSS
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const { text } = props;

   return (
      <Box className="terminal shadowed equal-width-terminal"
           style={{ width: { xs: '80%', md: '50%' }, borderRadius: '0.5rem', marginBottom: '4rem' }}>
         <Box style={{ backgroundColor: '#8c8c8c', padding: '0.5rem', borderRadius: '0.5rem 0.5rem 0 0', fontSize: '1rem' }}>
            <i className={classNames(iconClass, 'red')} />
            <i className={classNames(iconClass, 'amber')} />
            <i className={classNames(iconClass, 'green')} />
         </Box>

         <Box
          py={{ xs: '1rem', md: '2rem' }}
          px={{ xs: '2rem', md: '3rem' }}
          borderRadius={'0 0 0.5rem 0.5rem'}
          style={{ backgroundColor: '#27242f', fontSize: '1.2rem', fontFamily: 'Courier New, Courier, monospace' }}
        >
          {text}
        </Box>

      </Box>
   );

   
}

export default Terminal;
