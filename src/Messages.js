import React from 'react'
import './App.css';

import up from './assets/up.png'
import dots from './assets/dots.png'
import atmika from './assets/atmika.jpeg'
import edit from './assets/edit.png'

function Messages() {
  return (
    <div className='message'>
      <div className='m1'>
        <img src={atmika}></img>
        <p>Messaging</p>
      </div>
      <div className='m2'>
        <img src={dots}></img>
        <img src={edit}></img>
        <img src={up}></img>
      </div>
    </div>
  )
}

export default Messages