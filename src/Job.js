import React from 'react'
import './App.css'

import Jleft from './Jleft.js'
import Jright from './Jright.js'

function Job() {
  return (
    <div className='pagecontent'>
            <Jleft></Jleft>
            <Jright></Jright>
    </div>
  )
}

export default Job