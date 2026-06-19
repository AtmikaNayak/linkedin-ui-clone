import React from 'react'
import './App.css';

import Footer from './Footer'
import Navmenu from './Navmenu'

import follow from './assets/follow.png'
import groups from './assets/groups.png'
import newsletter from './assets/newsletter.png'
import events from './assets/events.png'
import people from './assets/people.jpeg'
import pages from './assets/pages.png'
import down from './assets/down.png'
import pb from './assets/pb.png'

function Nleft() {
    return (
        <div className='nleft'>
            <div className='container'>
            <div>
                <h3>Manage my network</h3>
                <div className='nleft1'>
                    <Navmenu img={people} content='Connections' className='icon3' />
                    <Navmenu img={follow} content='Following & followers' className='icon3' />
                    <Navmenu img={groups} content='Groups' className='icon3' />
                    <Navmenu img={events} content='Events' className='icon3' />
                    <Navmenu img={pages} content='Pages' className='icon3' />
                    <Navmenu img={newsletter} content='Newsletters' className='icon3' />
                </div>
            </div>
            
        </div>
        <Footer />
        </div>
    )
}

export default Nleft