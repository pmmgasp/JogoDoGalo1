import React from "react";
import Img from "./Images/HS.jpg"
import './Home.css';

function Home() {
    return (
        <>
        <div className="home-title">
            <h1>Jogo do Galo</h1>
        </div>
        <div className="home-img">
        <img src={Img} alt="Home Screen"/>
        <img src={Img} alt="Home Screen"/>
        <img src={Img} alt="Home Screen"/>
        </div>
        <div className="home-text">
        O Jogo do Galo é jogado por dois jogadores num tabuleiro composto por uma matriz de três linhas por três colunas, podendo ser jogado sozinho ou com um amigo. 
        Cada jogador joga alternadamente e o seu objetivo é conseguir três círculos "O" ou três "X" em linha, na horizontal, na vertical ou na diagonal. 
        Ao mesmo tempo, quando possível, deverá tentar impedir o adversário de ganhar na próxima jogada.
        </div>
        </>
    )
}

export default Home;