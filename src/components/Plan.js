import React from 'react'
import Arcade from '../images/icon-arcade.svg'
import Advanced from '../images/icon-advanced.svg'
import Pro from '../images/icon-pro.svg'

const Plan = () => {
  return (
    <section>
        <div className="plan-container">
            <p>Select your plan</p>
            <p>You have the option of monthly or yearly billing.</p>
                <div className="cards-plan-container">
                    <div className="arcade-card">
                        <img src={Arcade} alt="arcade" />
                        <p>Arcade</p>
                        <p>&#36;9/mo</p>
                    </div>
                    <div className="advanced-card">
                        <img src= {Advanced}alt="advanced-icon" />
                        <p>Advanced</p>
                        <p>&#36;12/mo</p>
                    </div>
                    <div className="pro-card">
                        <img src={Pro} alt="pro-icon" />
                        <p>Pro</p>
                        <p>&#36;15/mo</p>
                    </div>
                </div>
                <div className="for-switch">
                    <span>Monthly</span>
                    <input type="checkbox" name="switch" id="switch" />
                    <span>Yearly</span>
                </div>
        </div>
    </section>
  )
}

export default Plan