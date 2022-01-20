import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Projects.css";
import { Button } from 'react-bootstrap';

export default function Projects() {
    return (

        <div className="projects__wrapper">
            <div className="projects__content">
                <img src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg" alt="Pokemon" />
                <a href="https://compassionate-shannon-b4e651.netlify.app/" target="_blank" rel='noreferrer'><Button className="btn">View Deploy</Button></a>
                <a href="https://github.com/d0wnpour/react-pokemon" target="_blank" rel="noreferrer"><Button className="btn bred">View Code</Button></a>

            </div>
            <div className="projects__content">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg?crop=0.470xw:1.00xh;0.353xw,0&resize=640:*" alt="Movies" />
                <a href="https://lucid-mcnulty-f7ad2a.netlify.app/" target="_blank" rel='noreferrer'><Button className="btn">View Deploy</Button></a>
                <a href="https://github.com/d0wnpour/react-movies" target="_blank" rel='noreferrer'><Button className="btn bred">View Code</Button></a>

            </div>
        </div>

    )

}


