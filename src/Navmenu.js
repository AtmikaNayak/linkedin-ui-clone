import React from 'react'
import './App.css';

function Navmenu(props) {
    return (
        <div className={props.className}>
            <img src={props.img}></img>
            <p>{props.content}</p>
        </div>
    )
}

export default Navmenu