import React from "react";
import "./Account.css"
import Img from "../../images/Login.png"

function Login() {

    return (
        <div align="center">
        <img src={Img} alt="Login Screen" className="login-img"/>
        <div className="cont">
                <input className="btnLgRg" type="email" placeholder="Email" />
            <input className="btnLgRg" type="pwd" placeholder="Password" />
            <a href="/register" className="text">Não têm conta? Registe-se aqui.</a>
            <br />
            <button className="button3">Login</button>
        </div>
        </div>
    )
}

export default Login;