import React from 'react'
import './App.css';

import Navmenu from './Navmenu.js'
import Profile from './Profile.js'

import chip from './assets/chip.jpeg'
import saved from './assets/saved.png'
import groups from './assets/groups.png'
import newsletter from './assets/newsletter.png'
import events from './assets/events.png'


function Left() {
  return (
    <div className='left'>
        <Profile />
        <div className='left2 container'>
            <span>Stand out to recruiters with <br></br>exclusive features and insights</span>
            <Navmenu img={chip} content='Try Premium for ₹0' className='icon'/>
        </div>
        <div className='left3 container'>
            <div>
                <p>Profile viewers</p>
                <h4>32</h4>
            </div>
            <div>
                <p>View all analytics</p>
                <h4>32</h4>
            </div>
        </div>
        <div className='left2 container'>
            <Navmenu img={saved} content='Saved items' className='icon'/>
            <Navmenu img={groups} content='Groups' className='icon'/>
            <Navmenu img={newsletter} content='Newsletter' className='icon'/>
            <Navmenu img={events} content='Events' className='icon'/>
        </div>
    </div>
  )
}

export default Left