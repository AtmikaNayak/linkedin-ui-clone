import React from 'react'
import './App.css'

import Nleft from './Nleft.js'
import Nright from './Nright.js'

function Network() {
  return (
      <div className='pagecontent'>
        <Nleft></Nleft>
        <Nright></Nright>
      </div>
  )
}

export default Network