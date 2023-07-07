import React, { useState } from "react";
import Img from "../../images/registo.png"
import Axios from 'axios'
import { useNavigate } from "react-router-dom"
import Modal from "../../components/Modal";

const Register = () => {

    const[name,setName] = useState("")
    const[nameStatus,setNameStatus] = useState("")
    const[email,setEmail] = useState("")
    const[emailStatus,setEmailStatus] = useState("")
    const[password,setPassword] = useState("")
    const[confirmPassword,setConfirmPassword] = useState("")
    const[confirmPasswordStatus,setConfirmPasswordStatus] = useState("")
    const[blankBoxStatus, setBlankBoxStatus] = useState("")
    const[openModal,setOpenModal] = useState(false)
    const navigate = useNavigate()

    //Efetua o registo de um novo utilizador
    const register = () => {
        //Confirmar se não existem campos em branco
        if (email === "" || name === "" || password === "" || confirmPassword === "") {
            setBlankBoxStatus("Os campos precisam de ser preenchidos.")
            setConfirmPasswordStatus("");
            setNameStatus("")
            setEmailStatus("")
            setOpenModal(true)
        } else { 
            //Confirmar se as palavras-passe correspondem
            if (password !== confirmPassword){
            setConfirmPasswordStatus("A palavra-passe não coincide com a confirmação.");
            setBlankBoxStatus("")
            setNameStatus("")
            setEmailStatus("")
            setOpenModal(true)
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
            } else {
                setConfirmPasswordStatus("");
                setBlankBoxStatus("")
                setNameStatus(response.data.message1)
                setEmailStatus(response.data.message2)
                setOpenModal(true)
            }
            })
    }}}

    return (
        <div align="center">
            {openModal && <Modal setOpenModal={setOpenModal} message={
            <>
            {nameStatus !== "" && <p>{nameStatus}</p>}
            {blankBoxStatus !== "" && <p>{blankBoxStatus}</p>}
            {confirmPasswordStatus !== "" && <p>{confirmPasswordStatus}</p>}
            {emailStatus !== "" && <p>{emailStatus}</p>}
            </>}/>}
            <img src={Img} alt="Regist Screen" className="reg-img"/>
                <div className="cont">
                    <input className="inptLgRg" type="text" placeholder="Nome" onChange={(e) => { setName(e.target.value) }}/>
                    <input className="inptLgRg" type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
                    <input className="inptLgRg" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                    <input className="inptLgRg" type="password" placeholder="Confirm Password" onChange={(e) => { setConfirmPassword(e.target.value) }}/>
                    <button className="button3" onClick={register}>Criar conta</button>
                </div>
            </div>
    )
}

export default Register;