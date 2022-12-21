
//css
import './App.css';

//hooks
import { useCallback, useState, useEffect } from 'react';

//data
import {wordsList} from "./data/words"

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id:1, name:"start"},  
  {id:2, name:"game"},  
  {id:3, name:"end"}
]


function App() {

  const [gameStage, setGameStage]= useState(stages[0].name);
  const [words]= useState(wordsList);

  const [pickedWord,setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory=()=>{
    //Pegando uma categoria aleatoria
    const categories = Object.keys(words)
    //math.random  da um numero aleatorio entre 0 e o tamanho da categoria
    //math.floor vai arredondar o numero random para baixo
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

   
    //Pegando uma palavra aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    
    return {word, category}
  }


    const startGame = ()=>{

      //pega uma palavra e uma categoria aleatoria
      const {word, category}=pickWordAndCategory()
      console.log(word,category)

      //Criando a fila de letras
      let wordLetters = word.split("")
      wordLetters = wordLetters.map((l) => l.toLowerCase())
      console.log(wordLetters)

      setGameStage(stages[1].name)

      //Setando os estados
      setPickedWord(word)
      setPickedCategory(category)
      setLetters(letters)

    }


    const verifyLetter = ()=>{
      setGameStage(stages[2].name)
    }

    const retry  = () =>{
      setGameStage(stages[0].name)
    }



  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry ={retry}/>}
    </div>
  );
}

export default App;
