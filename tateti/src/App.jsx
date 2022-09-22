import { useState } from 'react'
import Board from './components/Board.jsx'
import './App.css'
import Score from './components/Score.jsx'

function App() {

  const [turn,setTurn] = useState('X')
  const [squares,setSquares]=useState(Array(9).fill(null))
  const [score,setScore]=useState({
    X:0,
    O:0,
  })
  const [winningSquares,setWinningSquares]=useState([null,null,null])

  const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  
  const endGame=(results,winningPositions)=>{
    setTurn(null)
    if (results!=='DRAW'){
      console.log('wP',winningPositions)
      setWinningSquares(winningPositions)
      setScore({
        ...score,
        [results]:score[results]+1,
      })
    }
    setTimeout(()=>{
      setSquares(Array(9).fill(null))
      setWinningSquares([null,null,null])
      setTurn('X')
    },2000)
  }

  const winCheck=(squares)=>{
    for (let i=0;i<winningPositions.length;i++){
      let [a,b,c]=winningPositions[i];
      if (squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
        endGame(squares[a],winningPositions[i])
        return
      }
    }
    if (!squares.includes(null)){
      endGame('DRAW')
      return
    }
  }

  const handleClick=(squareNumber,squareValue)=>{
    if (squareValue===null&&turn!==null){
      let auxSquares=[...squares]
      auxSquares[squareNumber]=turn;
      setSquares(auxSquares)
      turn==='X'?setTurn('O'):setTurn('X');
      winCheck(auxSquares)
    }
  }

  return (
    <div className="App">
    <h1>TA TE TI</h1>
      <Board squares={squares} click={handleClick} winningSquares={winningSquares}/>
      <Score score={score}/>
    </div>
  )
}

export default App
