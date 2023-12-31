import React from "react";
import Img from "../images/HS.png"
import { useNavigate } from "react-router-dom";

function Home() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `./playpvp`; 
      navigate(path);  {/* Adiciona ao endereço da página o caminho da página pretendida */}
    }

    const routeChange1 = () =>{ 
        let path = `./playpvm`; 
        navigate(path);  {/* Adiciona ao endereço da página o caminho da página pretendida */}
      }

    return (
        <>
        <div className="home-img">
        <img src={Img} alt="Home Screen"/>
        </div>
        <div className="home">
        <div className="home-title">
            <h1>Jogo do Galo</h1>
        </div>
        <div className="home-text">
            <p>O Jogo do Galo é jogado por dois jogadores num tabuleiro composto por uma matriz de três linhas por três colunas, podendo ser jogado sozinho ou com um amigo. 
                Cada jogador joga alternadamente e o seu objetivo é conseguir três círculos "O" ou três "X" em linha, na horizontal, na vertical ou na diagonal. 
                Ao mesmo tempo, quando possível, deverá tentar impedir o adversário de ganhar na próxima jogada.</p>
        </div>
        <button className="button" onClick={routeChange}>Player vs Player</button> {/* Utilizador é redirecionado para a página Play ao pressionar o botão */}
        <button className="button" onClick={routeChange1}>Player vs Machine</button>
       </div>
        </>
    )
}

export default Home;