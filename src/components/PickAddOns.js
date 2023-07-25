import React from 'react'
import '../styles/pick_add_ons.css'

const PickAddOns = () => {
  return (
    <div className="pick-add-ons-container">
        <p className='pick-add-ons-text'>Pick add-ons</p>
        <p className='pick-add-ons-supplementary-text'>Add ons help enhance your gaming experience.</p>
        <div className="add-ons-container">
            <div className="online-service">
                <div className="first-inner-container">
                <input type="checkbox" />
                </div>
                <div className="second-inner-container">
                    <p>Online service</p>
                    <p>Access to multiplayer games</p>
                </div>
                <div className="third-inner-container">
                <span>&#36;1/mo</span>
                </div>
            </div>
        </div>
        <div className="larger-storage-container">
            <div className="first-inner-container">
            <input type="checkbox" />
            </div>
            <div className="second-inner-container">
                <p>Larger storage</p>
                <p>Extra 1TB of cloud save</p>
            </div>
            <div className="third-inner-container">
            <p>&#36;2/mo</p>
            </div>
        </div>
        <div className="customizable-profile-container">
            <div className="first-inner-container">
            <input type="checkbox" />
            </div>
            <div className="second-inner-container">
                <p>Customizable profile</p>
                <p>Custom theme on your profile</p>
            </div>
            <div className="third-inner-container">
            <p>&#36;2/mo</p>
            </div>
        </div>
    </div>
  )
}

export default PickAddOns