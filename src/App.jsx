import './App.css'
import { useState, useContext } from "react"
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'
import { GameStateContext } from "./helpers/Context"

function App() {
  const [gameState, setGameState] = useState("menu")

  return (
    <div className='App'>
      <h1>React Quiz</h1>
      <GameStateContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  )
}

export default App
