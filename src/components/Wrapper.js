import React from 'react'
import PersonalInfo from './PersonalInfo'
import '../styles/wrapper.css'

const Wrapper = () => {
  return (
    <main>
        <div className="main-container">
        <div className="left-container">
            <div className="step-one">
                <p className='one'>1</p>
                <div className="info">
                    <p>STEP 1</p>
                    <p>YOUR INFO</p>
                </div>
            </div>
            <div className="step-two">
                <p className='two'>2</p>
                <div className="plan">
                    <p>STEP 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </div>
            <div className="step-three">
                <p className='3'>3</p>
                <div className="add-ons">
                    <p>STEP 3</p>
                    <p>ADD-ONS</p>
                </div>

            </div>
            <div className="step-four">
                <p className='4'>4</p>
                <div className="summary">
                    <p>STEP 4</p>
                    <p>SUMMARY</p>
                </div>
            </div>
        </div>
        <div className="right-container">
            <PersonalInfo/>
        </div>
    </div>
    </main>
    
  )
}

export default Wrapper