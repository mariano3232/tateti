import React from 'react'
import './Score.css'

export default function Score({score}) {
  return (
    <div className='conteiner'>
        <div className='X'>
            <h2>{score.X}</h2>
        </div>
        <div className='O'>
            <h2>{score.O}</h2>
        </div>
    </div>
  )
}
