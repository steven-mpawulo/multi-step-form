import React from 'react'
import PersonalInfo from './PersonalInfo'

const Wrapper = () => {
  return (
    <main>
        <div className="main-container">
        <div className="left-container"></div>
        <div className="right-container">
            <PersonalInfo/>
        </div>
    </div>
    </main>
    
  )
}

export default Wrapper