import React, {useState, useEffect} from 'react'
import * as HiIcons from "react-icons/hi";
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons'
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [logged, setLogged] = useState(false)
  const navigate = useNavigate()

  Axios.defaults.withCredentials = true;

  const showSidebar = () => setSidebar(!sidebar);

  const logoff = () => {
    Axios.post("http://localhost:3001/logout", {})
    //Mudar para a página principal
    navigate('/')  
    setTimeout(function() {
        window.location.reload(false);
    }.bind(this),50)   
}

useEffect(() => {
  Axios.get("http://localhost:3001/login", {
  }).then((response) => {
      //Se o utilizador estiver autenticado, alterar o conteúdo da barra de navegação
      if (response.data.logged === true) {
        setLogged(true)
      } else {
        setLogged(false)
      }
  })
}, [])

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/* Define a cor dos icónes, títulos da sidebar como branca */}
    <div className="navbar">
        <Link to="#" className='menu-bars'>
            <HiIcons.HiMenuAlt2 onClick={showSidebar}/> {/* Abre a sidebar */}
        </Link>
        <div className='nav-title'>{logged ? <span onClick={logoff}>Logout</span> : <span>Jogo do Galo</span>}</div> 
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}> {/* Fecha a sidebar */}
        <li className='navbar-toggle'>
        <Link to="#" className='menu-bars'>
            <HiIcons.HiX />
        </Link>
        </li>

        {/* Coloca na sidebar os icónes, títulos e caminhos presentes no ficheiro SidebarData */}
        
        {SidebarData.map((item, index) => {
          
          if (logged === true && item.title === 'Login/Register'){
            return null
          } else {

          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}> {/* Coloca na sidebar o caminho presente no ficheiro SidebarData */}
                {item.icon} {/* Coloca na sidebar o icóne presente no ficheiro SidebarData */}
                <span>{item.title}</span> {/* Coloca na sidebar o título presente no ficheiro SidebarData */}
              </Link>
            </li>
          
            )
        }})}
      </ul>
    </nav>
    </IconContext.Provider>
  </>
  )
}

export default Navbar
