import React from 'react';
import "./About.css";

export default function About() {
    return (

        <div className="about__wrapper">
            <div className="about__content">
                <h3>About</h3>
                <p>At the moment I am doing the 4th year for my Bachelor’s Degree at BTU. As for my job experience so far, I worked at Evex Hospitals until not long ago as a markup developer. At the moment I am employed as a moderator at the above mentioned university. I am currently involved with the company Absolute Zero, of which I am a co-founder.
                    As for my programming skills, they include: Linux, Front End, Sql, Js, React</p>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/rati-alania-78018a1bb/?originalSubdomain=ge" target="_blank" rel='noreferrer'>
                        <img src="https://i.postimg.cc/bvttLFmg/linkedin-logo.png" alt="Linkedin" />
                    </a>
                    <a href="https://github.com/d0wnpour" target="_blank" rel='noreferrer'>
                        <img src="https://i.postimg.cc/JzJrFVWs/github.png" alt="Github" />
                    </a>
                    <a href="https://www.facebook.com/Amaterasupw/" target="_blank" rel='noreferrer'>
                        <img src="https://i.postimg.cc/cCgy8wxv/facebook-app-symbol.png" alt="Facebook" />
                    </a>
                </div>
            </div>
            <img src="https://i.ibb.co/vYYX9zf/R.jpg" alt="React" />
           
        </div>

    )

}


