import React, {useState} from 'react'
import * as HiIcons from "react-icons/hi";
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/* Define a cor dos icónes, títulos da sidebar como branca */}
    <div className="navbar">
        <Link to="#" className='menu-bars'>
            <HiIcons.HiMenuAlt2 onClick={showSidebar}/> {/* Abre a sidebar */}
        </Link>
        <div className='nav-title'>Jogo do Galo</div> 
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
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}> {/* Coloca na sidebar o caminho presente no ficheiro SidebarData */}
                {item.icon} {/* Coloca na sidebar o icóne presente no ficheiro SidebarData */}
                <span>{item.title}</span> {/* Coloca na sidebar o título presente no ficheiro SidebarData */}
              </Link>
            </li>
          
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
  </>
  )
}

export default Navbar
