import React from 'react'
import '../styles/finishing_up.css'

const FinishingUp = () => {
  return (
    <div className="finishing-up-container">
        <p className='finishing-up-text'>Finishing up</p>
        <p>Double-check everything looks okay before confirming.</p>
        <div className="finishing-up-inner-container">
            <div className="first-container">
                <div className="first-inner-container">
                    <p>Arcade(Yearly)</p>
                    <p>Change</p>
                </div>
                <p>&#36;90/mo</p>
            </div>
            <hr />
            <div className="second-container">
                <div className="second-inner-container">
                    <p>Online Service</p>
                    <p>Larger Storage</p>
                </div>
                <p>+&#36;10/mo</p>
                <p>+&#36;29/mo</p>

            </div>
            <div className="third-container">
                <p>Total(per year)</p>
                <p>&#36;/yr</p>
            </div>
        </div>
    </div>
  )
}

export default FinishingUp