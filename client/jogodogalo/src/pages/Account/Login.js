import React, { useState, useEffect} from "react";
import "./Account.css"
import Img from "../../images/Login.png"
import Axios from 'axios'
import { useNavigate } from "react-router-dom"
import Modal from "../../components/Modal";

const Login = () => {

    const[email,setEmail] = useState("")
    const[emailStatus,setEmailStatus] = useState("")
    const[password,setPassword] = useState("")
    const[passwordStatus,setPasswordStatus] = useState("")
    const[openModal,setOpenModal] = useState(false)
    const navigate = useNavigate()

    //Mantêm as cookies
    Axios.defaults.withCredentials = true;
    
    //Efetua o login de um utilizador existente e redireciona para a página inicial se for bem sucedido
    const login = () => {
        Axios.post("http://localhost:3001/login", {
        email: email, password: password,
        }).then((response) => { console.log(response)
        if (response.data.logged === true) {
            navigate('/')
            setOpenModal(false)
            setTimeout(function() {
                window.location.reload(false);
            }.bind(this),50)}else{
                setEmailStatus(response.data.message2)
                setPasswordStatus(response.data.message1)
                setOpenModal(true)
            }
        }
        )
    }

    useEffect(()=>{
        //Se o utilizador já estiver autenticado, mudar para a página principal
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.logged === true){
            navigate('/')
        }})
    },[])

    return (
        <div align="center">
            {openModal && <Modal setOpenModal={setOpenModal} message={
            <>
            {passwordStatus !== "" && <p>{passwordStatus}</p>}
            {emailStatus !== "" && <p>{emailStatus}</p>}
            </>}/>}
            <img src={Img} alt="Login Screen" className="login-img"/>
                <div className="cont">
                    <input className="inptLgRg" type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
                    <input className="inptLgRg" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                    <a href="/register" className="text">Não têm conta? Registe-se aqui.</a>
                    <br />
                    <br />
                    <button className="button3" http-equiv="refresh" onClick={login}>Iniciar sessão</button>
                </div>
        </div>
    )
}

export default Login;