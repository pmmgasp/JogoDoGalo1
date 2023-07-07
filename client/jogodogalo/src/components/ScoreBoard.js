import React, {useState,useEffect} from 'react'
import './ScoreBoard.css'
import Axios from 'axios'

export const ScoreBoard = ({scores}) => {

  const [logged, setLogged] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login", {
    }).then((response) => {
        //Se o utilizador estiver autenticado, alterar o conteúdo da barra de navegação
        if (response.data.logged === true) {
          setLogged(true)
          setName(response.data.user[0].name)
        } else {
          setLogged(false)
        }
    })
  }, [])

  const {p1Score, p2Score} = scores;

  return (
  
    <div className='scoreboard'>{logged ?
        <p className='score'>{name} - {p1Score}</p> : <p className='score'>Player 1 - {p1Score}</p>}
        <p className='score'>Player 2 - {p2Score}</p>
        </div>
  )
}
