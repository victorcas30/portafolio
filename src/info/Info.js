import alex from "../img/alex.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import vsco from "../img/vsco.png"
import { SiGithub, SiLinkedin, SiInstagram, SiVsco } from "react-icons/si"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Victor",
    lastName: "Castillo",
    initials: "vc", // the example uses first and last, but feel free to use three or more if you like.
    position: "un desarrollador Front End",
    selfPortrait: alex, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'Disfruto de un buen café'
        },
        {
            emoji: '🌎',
            text: 'El Salvador'
        },
        {
            emoji: "💻",
            text: "Licenciado en Ciencias de la Computación"
        },
        {
            emoji: "📧",
            text: "vcastillo.mancia@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/victorcas30",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/victorcas30/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/victorcas26/",
            icon: "fa fa-instagram",
            label: 'instagram'
        },
        {
            link: "https://vsco.co/victorcas26/gallery",
            icon: "fa fa-spinner",
            label: 'vsco'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "¡Hola! Soy Víctor, un desarrollador Front End con título en Ciencias de la Computación. Amante de la tecnología y la naturaleza. Disfruto correr, capturar atardeceres con mi cámara, tomar café y vibrar en conciertos. ¡La vida es una emocionante mezcla de código y pasiones!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'html', 'css', 'bootstrap.', 'github', 'node.js', 'apis', 'mysql', 'sql'],
            exposedTo: ['Photoshop', 'Illustrator', 'Wordpress', 'Canva']
        }
    ,
    hobbies: [
        {
            label: 'correr',
            emoji: '🏃‍♂️'
        },
        {
            label: 'fotografia',
            emoji: '📸'
        },
        {
            label: 'conciertos',
            emoji: '🎫'
        },
        {
            label: 'café',
            emoji: '☕'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Api Rick And Morty",
            live: "https://victorcas30.github.io/apirickandmorty/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/victorcas30/apirickandmorty", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Api Marvel",
            live: "https://victorcas30.github.io/apimarvel/",
            source: "https://github.com/victorcas30/apimarvel",
            image: mock2
        },
        {
            title: "Crud Empleado",
            live: "https://victorcas30.github.io/crud/",
            source: "https://github.com/victorcas30/crud",
            image: mock3
        },
        {
            title: "Reportes PDF",
            live: "https://victorcas30.github.io/reportes/",
            source: "https://github.com/victorcas30/reportes",
            image: mock4
        },
        {
            title: "Portafolio Personal",
            live: "https://victorcas30.github.io/portafolio/",
            source: "https://github.com/victorcas30/portafolio",
            image: mock5
        }
    ]
}