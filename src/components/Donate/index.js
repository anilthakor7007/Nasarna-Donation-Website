import React from 'react'

import OnlineDonation from '../../common/OnlineDonation'
import OfflineDonation from '../../common/OfflineDonation'
import { useState } from 'react'

const Donate = (props) => {

    const [paymentMethod, setPaymentMethod] = useState(''); // Track selected payment method

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.id); // Set state based on selected radio button's id
    };

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="wpo-donation-page-area pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-donate-header">
                            <h2 className='text-center'>Make a Donation</h2>
                        </div>
                        <form onSubmit={SubmitHandler} action="#">
                            <div className="wpo-donations-amount">
                                <h2 className='mt-5'>Your Donation</h2>
                                <input type="text" className="form-control" name="text" id="text" placeholder="Enter Donation Amount" />
                            </div>
                            <div className="wpo-donations-details pt-4">
                                <h2>Message</h2>
                                <div className="row">

                                    <div className="col-lg-12 col-12 form-group">
                                        <textarea className="form-control" name="note" id="note" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-doanation-payment pt-5">
                                <h2 className='text-center'>Choose Your Payment Method</h2>

                                <div className="wpo-payment-select">
                                    <ul className="list-unstyled d-flex justify-content-around">
                                        <li className="addToggle d-flex align-items-center">
                                            <input
                                                id="card"  // unique id for online payment
                                                type="radio"
                                                name="payment"
                                                onChange={handlePaymentChange}
                                            />
                                            <label htmlFor="card" className="ml-2">Online Donation</label>
                                        </li>
                                        <li className="removeToggle d-flex align-items-center">
                                            <input
                                                id="offline"  // unique id for offline donation
                                                type="radio"
                                                name="payment"
                                                onChange={handlePaymentChange}
                                            />
                                            <label htmlFor="offline" className="ml-2">Offline Donation</label>
                                        </li>
                                    </ul>
                                </div>

                                {/* Conditionally render components based on selected payment method */}
                                {paymentMethod === 'card' && (
                                    <div className='mt-3'>
                                        {/* Card Payment Component */}
                                        <h3 className='text-left'>Card Payment Details</h3>

                                        <OnlineDonation />
                                    </div>
                                )}

                                {paymentMethod === 'offline' && (
                                    <div className='mt-3'>
                                        {/* Offline Donation Component */}
                                        <h3>Offline Donation Instructions</h3>
                                        <OfflineDonation />
                                    </div>
                                )}

                            </div>


                            <div className="submit-area mt-4 mb-4">
                                <button type="submit" className="theme-btn submit-btn">Donate Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;