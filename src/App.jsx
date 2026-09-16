import { useState,useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Scoreboard } from './components/Scoreboard'
import { Gameboard } from './components/Gameboard'

function App() {
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(localStorage.getItem("BestScore")===null ? 0 : Number(localStorage.getItem("BestScore")));
  return <>
    <Header/>
    <Scoreboard score={score} bestScore={bestScore} />
    <Gameboard setScore={setScore} setBestScore={setBestScore} score={score} bestScore={bestScore}/>
  </>
}

export default App
