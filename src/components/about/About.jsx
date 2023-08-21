import React from 'react';
import './about.css'; // Importar el archivo CSS
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { Stack } from '../stacks/Stack';
import { Design } from '../design/Design';

export default function About() {
    const firstName = info.firstName.toLowerCase();
    const iconSize = '100px'; // Tamaño deseado para los íconos


    function aboutMeText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                    about {firstName} </p>
                <p><span style={{ color: info.baseColor }}>about {firstName} <span className="green">(main)</span> $ </span>
                    {info.bio}
                </p>
            </>
        );
    }

    function skillsText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
                </p>
                <p><span style={{ color: info.baseColor }}> skills/tools <span className="green">(main)</span> $</span> ls</p>
                <p style={{ color: info.baseColor }}> stack tecnológico: </p>
                <ul className="skills">
                    {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
                </ul>
                <Stack />
                <p style={{ color: info.baseColor }}> stack diseño:</p>
                <ul className="skills">
                    {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
                <Design />
            </>
        );
    }

    function miscText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                    hobbies/interests</p>
                <p><span style={{ color: info.baseColor }}>hobbies/interests <span className="green">(main)</span> $</span> ls</p>
                <ul>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                    ))}
                </ul>
            </>
        );
    }


    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}  />
            <Terminal text={skillsText()}  />
            

            <Terminal text={miscText()}  />
        </Box>
    );

}
