import React from "react"
import "./GameOver.css"


const GameOver = ({retry}) => {
  return (
    <div>
        <h1>Game over</h1>
        <button onClick={retry}>Novo jogo!</button>
       
    </div>
  )
}

export default GameOver