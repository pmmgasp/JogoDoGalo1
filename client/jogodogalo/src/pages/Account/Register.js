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

    //Efetua o registo de um novo utilizador
    const register = () => {
        //Confirmar se as palavras-passe correspondem
        if (password !== confirmPassword) {
            setConfirmPasswordStatus("A palavra-passe não coincide com a confirmação.");
        }
        else {
            //Registar o utilizador e faz o login automaticamente se o registo for bem sucedido, redirecionando depois para a página inicial
            Axios.post("http://localhost:3001/register", {
            name: name, email: email, password: password,
            }).then((response) => {if (response.data.registo === true){
                Axios.post("http://localhost:3001/login", {email: email, password: password,}).then(()=>{
                navigate('/')
                setTimeout(function() {
                    window.location.reload(false);
                }.bind(this),50)
                })
            }
            })
        
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