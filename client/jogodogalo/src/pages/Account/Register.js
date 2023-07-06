import React, { useState } from "react";
import Img from "../../images/registo.png"
import Axios from 'axios'


const Register = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const register = () => {
            Axios.post("http://localhost:3001/register", {
            name: name, email: email, password: password,
            }).then(() => console.log("It worked"))
        
    }

    return (
        <div align="center">
            <img src={Img} alt="Regist Screen" className="reg-img"/>
                <div className="cont">
                    <input className="inptLgRg" type="text" name="nome" placeholder="Nome" onChange={(e) => { setName(e.target.value) }}/>
                    <input className="inptLgRg" type="text" name="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
                    <input className="inptLgRg" type="text" name="pwd" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                    <input className="inptLgRg" type="text" name="confpwd" placeholder="Confirm Password" />
                    <button className="button3" onClick={register}>Criar conta</button>
                </div>
            </div>
    )
}

export default Register;