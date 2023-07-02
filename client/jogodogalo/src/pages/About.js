import React from "react";
import Img from "../images/Git.png"

function About() {

    return (
        <div className='about'>
           <div className="about-title">
            <h1>Licenciatura em Engenharia Informática</h1>
            <h2>Desenvolvimento Web - 2º Ano</h2>
            </div>
            <center>
            <a href='https://github.com/pmmgasp' target="_blank" rel="noopener noreferrer"><img src={Img} alt="Github Pedro" className="about-img" /></a>
            <a href='https://github.com/GMendes17' target="_blank" rel="noopener noreferrer"><img src={Img} alt="Github Pedro" className="about-img"/></a>
            <a href='https://github.com/pmmgasp/JogoDoGalo1' target="_blank" rel="noopener noreferrer"><img src={Img} alt="Github Pedro" className="about-img"/></a>
            </center>
            <div className="about-text"><span>Pedro Gaspar - N.º 23038</span><span>Gonçalo Mendes - N.º 23042</span><span>Github do Jogo do Galo</span></div>
        </div>
        
    );
}

export default About;