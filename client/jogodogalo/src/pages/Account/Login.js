import React, { useState, useEffect} from "react";
import "./Account.css"
import Img from "../../images/Login.png"
import Axios from 'axios'
import { useNavigate } from "react-router-dom"


const Login = () => {

    const[email,setEmail] = useState("")
    const[nameStatus,setNameStatus] = useState("")
    const[password,setPassword] = useState("")
    const[passwordStatus,setPasswordStatus] = useState("")
    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;
    
    const login = () => {
        Axios.post("http://localhost:3001/login", {
        email: email, password: password,
        }).then((response) => { console.log(response)
        if (response.data.logged === true) {
            navigate('/')}}
        )
    }

    //response.data.message !== "Wrong username/password combination!" && response.data.message !== "User doesn't exist"

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.logged === true){
            navigate('/')
        }})
    },[])
        

    return (
        <div align="center">
            <img src={Img} alt="Login Screen" className="login-img"/>
                <div className="cont">
                    <input className="inptLgRg" type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
                    <input className="inptLgRg" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                    <a href="/register" className="text">Não têm conta? Registe-se aqui.</a>
                    <br />
                    <br />
                    <button className="button3" on onClick={login}>Iniciar sessão</button>
                </div>
        </div>
    )
}

export default Login;