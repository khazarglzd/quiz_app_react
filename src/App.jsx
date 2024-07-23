import './App.css'
import { useState } from "react"
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'

function App() {
  const [gameState, setGameState] = useState("menu")

  return (
    <div className='App'>
      <h1>React Quiz</h1>
      {gameState === "menu" && <Menu />}
      {gameState === "playing" && <Quiz />}
      {gameState === "finished" && <EndScreen />}
    </div>
  )
}

export default App
