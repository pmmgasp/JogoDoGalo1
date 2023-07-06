import React from "react";
import Img from "../../images/registo.png"

function Register() {
    return (
        <div align="center">
            <img src={Img} alt="Regist Screen" className="reg-img"/>
                <div className="cont">
                    <input className="inptLgRg" type="text" name="nome" placeholder="Nome" />
                    <input className="inptLgRg" type="text" name="email" placeholder="Email"/>
                    <input className="inptLgRg" type="text" name="pwd" placeholder="Password"/>
                    <input className="inptLgRg" type="text" name="confpwd" placeholder="Confirm Password" />
                    <button className="button3">Criar conta</button>
                </div>
            </div>
    )
}

export default Register;