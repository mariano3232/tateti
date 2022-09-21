import React from 'react'
import './Board.css'
import Square from './Square'
export default function Board({squares,click,winningSquares}) {

    const createSquares = row =>{
        return row.map(e=>{
           return <Square value={squares[e]} key={'square_'+e} squareNumber={e} click={click} winningSquares={winningSquares}/>
        })
    }
    
  return (
    <div className='board'>
        <div className='row'>
            {createSquares([0,1,2])}
        </div>
        <div className='row'>
            {createSquares([3,4,5])}
        </div>
        <div className='row'>
            {createSquares([6,7,8])}
        </div>
    </div>
  )
}
