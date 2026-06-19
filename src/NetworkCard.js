import React from 'react'
import './App.css';

import connect from './assets/connect.png'

function NetworkCard(props) {
    return (
        <div className="network-card">
            <div className="card-header">
                <img src={props.coverImg} className="cover-img" alt="Cover"></img>
                <button className="close-btn">X</button>
            </div>
            <img src={props.profileImg} className="profile-img" alt="Profile"></img>
            <div className='contain'>
                <h3>{props.name}</h3>
                <p>{props.about}</p>
                <span>{props.mutualText}</span>
                <div className="btn">
                    <img src={connect} alt="Connect"></img>
                    <button className="connect-btn">Connect</button>
                </div>
            </div>
        </div>
    )
}

export default NetworkCard