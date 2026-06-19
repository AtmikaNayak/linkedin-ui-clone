import React, { useState } from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';

import Navmenu from './Navmenu.js';

import logo from './assets/logo.png';
import search from './assets/search.png';
import home from './assets/home.png';
import homef from './assets/homef.png';
import homec from './assets/homec.png';
import people from './assets/people.jpeg';
import peoplef from './assets/peoplef.jpeg';
import peoplec from './assets/peoplec.png';
import job from './assets/job.jpeg';
import jobf from './assets/jobf.jpeg';
import jobc from './assets/jobc.png';
import messaging from './assets/messaging.jpeg';
import messagingf from './assets/messagingf.jpeg';
import bell from './assets/bell.jpeg';
import bellf from './assets/bellf.jpeg';
import business from './assets/business.jpeg';
import businessf from './assets/businessf.jpeg';
import chip from './assets/chip.jpeg';
import atmika from './assets/atmika.jpeg';

function Navbar() {
    // useLocation gives us the current URL path so we know which page is active
    const location = useLocation();
    const currentPath = location.pathname;

    // State to track the string name of the currently hovered item
    const [hoveredItem, setHoveredItem] = useState(null);

    // Helper function to decide which image to display
    const getNavImage = (name, path, baseImg, hoverImg, activeImg) => {
        if (path && currentPath === path && activeImg) {
            return activeImg; // We are on this page, show the 'c' image
        }
        if (hoveredItem === name && hoverImg) {
            return hoverImg; // We are hovering over it, show the 'f' image
        }
        return baseImg; // Default fallback image
    };

    return (
        <div className='navbar'>
            <img src={logo} className='logo' alt='LinkedIn Logo' />
            
            <div className='search'>
                <img src={search} alt='Search Icon' />
                <input type='text' placeholder='Search' />
            </div>
            
            <div className='navmenu1'>
                <Link 
                    to="/" 
                    className="nav-link-wrapper"
                    onMouseEnter={() => setHoveredItem('home')} 
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Navmenu 
                        img={getNavImage('home', '/', home, homef, homec)} 
                        content='Home' 
                        className='navitem'
                    />
                </Link>
                
                <Link 
                    to="/network" 
                    className="nav-link-wrapper"
                    onMouseEnter={() => setHoveredItem('network')} 
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Navmenu 
                        img={getNavImage('network', '/network', people, peoplef, peoplec)} 
                        content='My Network' 
                        className='navitem'
                    />
                </Link>
                
                <Link 
                    to="/jobs" 
                    className="nav-link-wrapper"
                    onMouseEnter={() => setHoveredItem('jobs')} 
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Navmenu 
                        img={getNavImage('jobs', '/jobs', job, jobf, jobc)} 
                        content='Jobs' 
                        className='navitem'
                    />
                </Link>

                {/* For items without a route yet, we wrap them in a div to catch the hover events */}
                <div 
                    className="nav-link-wrapper"
                    onMouseEnter={() => setHoveredItem('messaging')} 
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Navmenu 
                        img={getNavImage('messaging', null, messaging, messagingf, messaging)} 
                        content='Messaging' 
                        className='navitem'
                    />
                </div>

                <div 
                    className="nav-link-wrapper"
                    onMouseEnter={() => setHoveredItem('notifications')} 
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Navmenu 
                        img={getNavImage('notifications', null, bell, bellf, bell)} 
                        content='Notifications' 
                        className='navitem'
                    />
                </div>

                <div className="nav-link-wrapper">
                    <Navmenu img={atmika} content='Me ▼' className='navitem'/>
                </div>
            </div>
            
            <div className='navmenu2'>
                <div 
                    className="nav-link-wrapper"
                    onMouseEnter={() => setHoveredItem('business')} 
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Navmenu 
                        img={getNavImage('business', null, business, businessf, business)} 
                        content='For Business ▼' 
                        className='navitem'
                    />
                </div>
                
                <div className="nav-link-wrapper">
                    <Navmenu img={chip} content='Get hired for ₹0' className='navitem'/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;