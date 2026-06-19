import React from 'react'
import './App.css';

function NewsContent(props) {
  return (
    <div className='newscontent'>
        <p>{props.content}</p>
        <span>{props.analytics}</span>
    </div>
  )
}

export default NewsContent