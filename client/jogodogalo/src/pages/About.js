import React from "react";
import Img from "./Images/Git.png"

function About() {

    return (
        <div className='about'>
           <div className="about-title">
            <h1>Licenciatura em Engenharia Informática</h1>
            <h2>Desenvolvimento Web - 2º Ano</h2>
            </div>
            <div className="about-img">
            <a href='https://github.com/pmmgasp'><img src={Img} alt="Github Pedro" width="200px" height="200px"/></a>
            <a href='https://github.com/GMendes17'><img src={Img} alt="Github Pedro" width="200px" height="200px"/></a>
            <a href='https://github.com/pmmgasp/JogoDoGalo1'><img src={Img} alt="Github Pedro" width="200px" height="200px"/></a>
            </div>
        </div>
        
    );
}

export default About;