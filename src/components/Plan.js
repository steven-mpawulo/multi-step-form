import React from 'react'
import Arcade from '../images/icon-arcade.svg'
import Advanced from '../images/icon-advanced.svg'
import Pro from '../images/icon-pro.svg'
import '../styles/plan.css'

const Plan = () => {
  return (
    <section>
        <div className="plan-container">
            <p>Select your plan</p>
            <p>You have the option of monthly or yearly billing.</p>
                <div className="cards-plan-container">
                    <div className="card-arcade">
                        <img src={Arcade} alt="arcade" />
                        <p>Arcade</p>
                        <p>&#36;9/mo</p>
                    </div>
                    <div className="card-advanced">
                        <img src= {Advanced}alt="advanced-icon" />
                        <p>Advanced</p>
                        <p>&#36;12/mo</p>
                    </div>
                    <div className="card-pro">
                        <img src={Pro} alt="pro-icon" />
                        <p>Pro</p>
                        <p>&#36;15/mo</p>
                    </div>
                </div>
                <div className="for-switch">
                    <div className="monthly">
                    <span className='monthly'>Monthly</span>
                    </div>
                    <div className="switch-container">
                    <input type="checkbox" name="switch" id="switch" />
                    </div>
                    <div className="yearly">
                    <span className='yearly'>Yearly</span>
                    </div>
                   
                </div>
        </div>
    </section>
  )
}

export default Plan