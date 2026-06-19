import React from 'react'
import './App.css'

import Left from './Left.js'
import Right from './Right.js'
import Center from './Center.js'

function Home() {
  return (
    <div className='pagecontent'>
        <Left></Left>
        <Center></Center>
        <Right></Right>
      </div>
  )
}

export default Home