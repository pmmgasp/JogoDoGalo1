import React, { useState } from "react";
import Img from "../../images/registo.png"
import Axios from 'axios'
import { useNavigate } from "react-router-dom"


const Register = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[confirmPassword,setConfirmPassword] = useState("")
    const[confirmPasswordStatus,setConfirmPasswordStatus] = useState("")
    const navigate = useNavigate()

    const register = () => {
        if (password != confirmPassword) {
            setConfirmPasswordStatus("A palavra-passe não coincide com a confirmação.");
        }
        else {
            Axios.post("http://localhost:3001/register", {
            name: name, email: email, password: password,
            }).then(() => console.log("It worked"),
            navigate('/login'))
        
    }}

    return (
        <div align="center">
            <img src={Img} alt="Regist Screen" className="reg-img"/>
                <div className="cont">
                    <input className="inptLgRg" type="text" placeholder="Nome" onChange={(e) => { setName(e.target.value) }}/>
                    <input className="inptLgRg" type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
                    <input className="inptLgRg" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                    <input className="inptLgRg" type="password" placeholder="Confirm Password" onChange={(e) => { setConfirmPassword(e.target.value) }}/>
                    <p className="RegErro">{confirmPasswordStatus}</p>
                    <button className="button3" onClick={register}>Criar conta</button>
                </div>
            </div>
    )
}

export default Register;