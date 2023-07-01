import React from "react";
import Img from "./Images/Git.png"

function About() {

    return (
        <div className='about'>
           <div className="about-title">
            <h1>Licenciatura em Engenharia Informática</h1>
            <h2>Desenvolvimento Web - 2º Ano</h2>
            </div>
            <center>
            <a href='https://github.com/pmmgasp'><img src={Img} alt="Github Pedro" className="about-img" /></a>
            <a href='https://github.com/GMendes17'><img src={Img} alt="Github Pedro" className="about-img"/></a>
            <a href='https://github.com/pmmgasp/JogoDoGalo1'><img src={Img} alt="Github Pedro" className="about-img"/></a>
            </center>
            <div className="about-text"><span>Pedro Gaspar - N.º 23038</span><span>Gonçalo Mendes - N.º 23042</span><span>Github do Jogo do Galo</span></div>
        </div>
        
    );
}

export default About;