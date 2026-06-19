import React from 'react'
import './App.css';

import Profile from './Profile.js'
import Footer from './Footer'
import Navmenu from './Navmenu'

import chip from './assets/chip.jpeg'
import nmamit from './assets/nmamit.jpeg'
import atmika from './assets/atmika.jpeg'
import saved from './assets/saved.png'
import down from './assets/down.png'
import preferences from './assets/preferences.png'
import editb from './assets/editb.png'

function Jleft() {
    return (
        <div className='jleft'>
            <Profile />

            <div className='container'>
                <div>

                    <div className='jleft1'>
                        <Navmenu img={preferences} content='Preferences' className='icon3' />
                        <Navmenu img={saved} content='Job Tracker' className='icon3' />
                        <Navmenu img={chip} content='My Career Insights' className='icon3' />
                    </div>
                    <Navmenu img={editb} content='Post a free job' className='icon4' />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Jleft