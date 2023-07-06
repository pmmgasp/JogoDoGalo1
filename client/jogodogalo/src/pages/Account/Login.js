import React, { useState, useEffect} from "react";
import "./Account.css"
import Img from "../../images/Login.png"
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const[email,setEmail] = useState("")
    const[emailStatus,setEmailStatus] = useState("")
    const[password,setPassword] = useState("")
    const[passwordStatus,setPasswordStatus] = useState("")
    const navigate = useNavigate()
    
    const login = () => {
        Axios.post("http://localhost:3001/login", {
        email: email, password: password,
        }).then((response) => console.log(response))
    
}
        

    return (
        <div align="center">
            <img src={Img} alt="Login Screen" className="login-img"/>
                <div className="cont">
                    <input className="inptLgRg" type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
                    <input className="inptLgRg" type="pwd" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                    <a href="/register" className="text">Não têm conta? Registe-se aqui.</a>
                    <br />
                    <br />
                    <button className="button3" on onClick={login}>Iniciar sessão</button>
                </div>
        </div>
    )
}

export default Login;