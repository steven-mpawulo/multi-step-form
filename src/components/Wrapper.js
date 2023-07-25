import React from 'react'
import '../styles/wrapper.css'
import FinishingUp from './FinishingUp'

const Wrapper = () => {
    return (
        <main>
            <div className="main-container">
                <div className="left-container">
                    <div className="steps">
                        <p className='number'>1</p>
                        <div className="info">
                            <p className='info-steps'>STEP 1</p>
                            <p className='my-info'>YOUR INFO</p>
                        </div>
                    </div>
                    <div className="steps">
                        <p className='number'>2</p>
                        <div className="info">
                            <p className='info-steps'>STEP 2</p>
                            <p className='my-info'>SELECT PLAN</p>
                        </div>
                    </div>
                    <div className="steps">
                        <p className='number'>3</p>
                        <div className="info">
                            <p className='info-steps'>STEP 3</p>
                            <p className='my-info'>ADD-ONS</p>
                        </div>

                    </div>
                    <div className="steps">
                        <p className='number'>4</p>
                        <div className="info">
                            <p className='info-steps'>STEP 4</p>
                            <p className='my-info'>SUMMARY</p>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    {/* <PersonalInfo/> */}
                    {/* <Plan/> */}
                    {/* <PickAddOns /> */}
                    <FinishingUp/>
                    <div className="my-button">
                        <button className='next-button'>Next Step</button>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Wrapper