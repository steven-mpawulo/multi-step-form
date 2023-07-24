import React from 'react'

const PickAddOns = () => {
  return (
    <div className="pick-add-ons-container">
        <p>Pick add-ons</p>
        <p>Add ons help enhance your gaming experience.</p>
        <div className="add-ons-container">
            <div className="online-service">
                <input type="checkbox" />
                <div className="online-service-inner-container">
                    <p>Online service</p>
                    <p>Access to multiplayer games</p>
                </div>
                <p>&#36;1/mo</p>
            </div>
        </div>
        <div className="larger-storage-container">
            <input type="checkbox" />
            <div className="larger-storage-inner-container">
                <p>Larger storage</p>
                <p>Extra 1TB of cloud save</p>
            </div>
            <p>&#36;2/mo</p>
        </div>
        <div className="customizable-profile-container">
            <input type="checkbox" />
            <div className="customizable-profile-inner-container">
                <p>Customizable profile</p>
                <p>Custom theme on your profile</p>
            </div>
            <p>&#36;2/mo</p>
        </div>
    </div>
  )
}

export default PickAddOns