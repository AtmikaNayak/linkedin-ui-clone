import React from 'react'
import './App.css';

function Npuzzle(props) {
    return (
        <div className='puzzle-content'>
            <div className='puzzle-details'>
                <img src={props.img} alt="Puzzle"></img>
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.players}</p>
                </div>
            </div>
            <button className='btn'>Solve</button>
        </div>
    )
}

export default Npuzzle