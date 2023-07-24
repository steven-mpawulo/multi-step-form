import React from 'react'
import '../styles/personal_info.css'

const PersonalInfo = () => {
    return (
        <section>
            <div className="personal-info-container">
                <p className='personal-info-text'> Personal info</p>
                <p className='personal-info-supplementary'>Please provide your name, email address and phone number</p>
                <div className="name">
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" name='name' id='name' placeholder='eg.stephen King' />
                </div>
                <div className="email">
                    <label htmlFor="email">Email Address</label> <br />
                    <input type="email" name="email" id="email" placeholder='eg.stephenking@lorem.com'/>
                </div>
                <div className="phone-number">
                    <label htmlFor="phone-number">Phone Number</label> <br />
                    <input type="tel" name="phone-number" id="phone-number" placeholder='eg.+1 2345678'/>
                </div>
            </div>
        </section>
    )
}

export default PersonalInfo