import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../images/PvP.png"
import Img1 from "../../images/PvM.png"

function Play() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/playpvp`; 
      navigate(path);  {/* Adiciona ao endereço da página o caminho da página pretendida */}
    }

    const routeChange1 = () =>{ 
        let path = `/playpvm`; 
        navigate(path);  {/* Adiciona ao endereço da página o caminho da página pretendida */}
      }

    return (
        <div className="about">
            <button className="button2" onClick={routeChange}><img src={Img} alt="PvP" className="play-img"/>Player vs Player</button> {/* Utilizador é redirecionado para a página Play ao pressionar o botão */}
            <button className="button2" onClick={routeChange1}><img src={Img1} alt="PvM" className="play-img"/>Player vs Machine</button>
        </div>
    )
}

export default Play;