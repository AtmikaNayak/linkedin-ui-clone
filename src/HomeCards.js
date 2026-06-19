import React from 'react'
import './App.css';

import earth from './assets/earth.png'
import dots from './assets/dots.png'
import thumbsup from './assets/thumbsup.png'
import comment from './assets/comment.png'
import repost from './assets/repost.png'
import telegram from './assets/telegram.png'
import like from './assets/like.png'
import clap from './assets/clap.png'
import palm from './assets/palm.png'
import heart from './assets/heart.png'
import smile from './assets/smile.png'

function HomeCards(props) {
    return (
        <div className='homecards container'>
            <div className='homecard1'>
                <div>
                    <div className='homecard11'>
                        <img src={props.img}></img>
                    </div>
                    <div className='homecard12'>
                        <h2>{props.name}</h2>
                        <span>{props.about}</span>
                        <div>
                            <span>{props.time}</span>
                            <img src={earth}></img>
                        </div>
                    </div>
                </div>
                <div className='homecard13'>
                    <img src={dots}></img>
                    <p>X</p>
                </div>
            </div>
            <div className='homecard2'>
                <p>{props.desc}</p>
                <img src={props.pic}></img>
                <hr></hr>
            </div>
            <div className='homecard3'>
                <img src={thumbsup}></img>
                <img src={comment}></img>
                <img src={repost}></img>
                <img src={telegram}></img>
            </div>
        </div>
    )
}

export default HomeCards