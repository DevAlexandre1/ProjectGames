import React from "react"
import "./GameOver.css"


const GameOver = ({startGame}) => {
  return (
    <div>
        <h1>Game over</h1>
        <button onClick={startGame}>Novo jogo!</button>
    </div>
  )
}

export default GameOver