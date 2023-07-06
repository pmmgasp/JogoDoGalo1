import React from "react";
import "./Account.css"
import Img from "../../images/Login.png"

function Login() {

    return (
        <div align="center">
            <img src={Img} alt="Login Screen" className="login-img"/>
                <div className="cont">
                    <input className="inptLgRg" type="email" placeholder="Email" />
                    <input className="inptLgRg" type="pwd" placeholder="Password" />
                    <a href="/register" className="text">Não têm conta? Registe-se aqui.</a>
                    <br />
                    <br />
                    <button className="button3">Iniciar sessão</button>
                </div>
        </div>
    )
}

export default Login;