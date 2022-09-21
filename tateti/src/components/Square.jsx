import React from 'react'
import styles from './Square.module.css'

export default function Square({value,click,squareNumber,turn,winningSquares}) {
    const handleClick=()=>{
        if (turn!==null){
            click(squareNumber,value)
        }
    }
    let winner=false;
    if (winningSquares?.includes(squareNumber)){
      winner=true;
    }

  return (
    <div className={(value===null)?styles.square:
    (value==='X'&&winner)?styles.winnerX:
    (value==='X')?styles.squareX:
    (value==='O'&&winner)?styles.winnerO:
    (value==='O')?styles.squareO:
    null
    }
        onClick={()=>handleClick()}
    />
  )
}
