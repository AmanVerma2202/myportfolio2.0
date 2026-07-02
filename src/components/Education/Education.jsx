import React from 'react'
import "./Education.css"
import Time from './Timeline'

const Education = () => {
  return (
    <div className='education'>
      <h1>My <span style={{color:"var(--page-accent)"}}>Education</span></h1>
      <div className='time'>
        <Time/>
      </div>
    </div>
  )
}

export default Education