import React from 'react';

const OfflineDonation = () => {
  return (
    <div className="container mt-5">
      {/* <h2 className="text-center mb-4">Offline Donation</h2> */}
      <p>If you would like to donate offline, you can choose one of the following methods:</p>
      
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-title">Donation Methods</h5>
        </div>
        <div className="card-body">
          <ul>
            <li><strong>Bank Transfer:</strong> Please transfer your donation to the following bank account:
              <ul>
                <li>Account Number: XXXXXXXX</li>
                <li>Bank Name: Your Bank Name</li>
                <li>IFSC Code: XXXXXXXXXX</li>
              </ul>
            </li>
            <li><strong>Cheque:</strong> Make your cheque payable to <strong>Nasarna Children Trust</strong> and mail it to <strong>Rudramicon Ahmedabad</strong>.</li>
            <li><strong>Cash Donation:</strong> You can drop off cash donations at our office at the following address:</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-title">Office Address</h5>
        </div>
        <div className="card-body">
          <p><strong>Rudram Icon, Room 506, Near Silver Oak University, Ahmedabad, 78001</strong></p>
          <p>You can find us on <a href="https://www.google.com/maps?q=Rudram+Icon,+Room+506,+Near+Silver+Oak+University,+Ahmedabad,+78001" target="_blank" rel="noopener noreferrer">Google Maps</a>.</p>
          <p><strong>Phone Number:</strong> (123) 456-7890</p>
        </div>
      </div>

      <div className="text-center">
        <p className="mt-4">Thank you for your generous contribution!</p>
      </div>
    </div>
  );
};

export default OfflineDonation;
