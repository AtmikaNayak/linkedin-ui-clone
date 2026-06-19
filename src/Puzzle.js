import React from 'react'
import './App'

function Puzzle(props) {
  return (
    <div className='puzzle'>
        <div className='block'>
            <img src={props.img}></img>
            <div>
                <p>{props.name}</p>
                <span>{props.players}</span>
            </div>
        </div>
        <p>{'>'}</p>
    </div>
  )
}

export default Puzzle