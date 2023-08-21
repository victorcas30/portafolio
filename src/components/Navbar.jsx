import React, { useState } from 'react';
import './navbar.css'; // Importar el archivo CSS en lugar de .module.scss
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
        {
            name: 'Home',
            to: '/',
            active: 'Home'
        },
        {
            name: 'About Me',
            to: '/about',
            active: 'About'
        },
        {
            name: info.initials,
            type: 'initials',
            to: '/',
            active: 'Home'
        },
        {
            name: 'Portfolio',
            to: '/portfolio',
            active: 'Portfolio'
        }
];

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{ xs: '2rem', md: '8rem' }}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && 'active navbar-item'}
                         sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className="link navbar-link"> {/* Usar clase "link" en lugar de Style.link */}
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))} 
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    );
}
