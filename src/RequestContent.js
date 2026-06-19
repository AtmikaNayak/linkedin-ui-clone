import React from 'react'
import './App.css';

function RequestContent(props) {
    return (
        <div className='requestcontent'>
            <div className='req-details'>
                <img src={props.profileImg} alt="Profile"></img>
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.about}</p>
                    <span>{props.mutualText}</span>
                </div>
            </div>
            <div className='req-buttons'>
                <button className='ignore-btn'>Ignore</button>
                <button className='btn'>Accept</button>
            </div>
        </div>
    )
}

export default RequestContent