import React from 'react'
import './App'

import linkedin from './assets/linkedin.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <span>About</span>
                <span>Accessibility</span>
                <span>Help Center</span>
                <span>Privacy & Terms ▼</span>
                <span>Ad Choices</span>
                <span>Advertising</span>
                <span>Business Services ▼</span>
                <span>Get the LinkedIn app</span><br></br>
                <span>More</span>
            </div>
            
            <div className='footer-copyright'>
                <img src={linkedin} alt="LinkedIn Logo"></img>
                <p>LinkedIn Corporation © 2026</p>
            </div>
        </div>
    )
}

export default Footer