import React from 'react'
import './App.css'

import Navmenu from './Navmenu'

import pb from './assets/pb.png'
import nmamit from './assets/nmamit.jpeg'
import atmika from './assets/atmika.jpeg'

function Profile() {
    return (
        <div className="profile">
            <img src={pb}></img>
            <img src={atmika}></img>
            <div className='container'>
                <h2>Atmika Nayak</h2>
                <p>Aspiring tech enthusiast | CSE<br></br> Student | Future-Ready Innovator</p>
                <span>Bengaluru, Karnataka</span>
                <Navmenu img={nmamit} content='NMAM Institute of Technology' className='icon' />
            </div>
        </div>
    )
}

export default Profile