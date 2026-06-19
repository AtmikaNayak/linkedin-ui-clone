import React from 'react'
import './App.css'

function JobCards(props) {
    return (
        <div className='job-card'>
            <div className='job-details'>
                <img src={props.logo} alt="Company Logo"></img>
                <div className='job-text'>
                    <h4>{props.title}</h4>
                    <p>{props.company}</p>
                    <span>{props.time}</span>
                </div>
            </div>
            <button className='job-close-btn'>✕</button>
        </div>
    )
}

export default JobCards