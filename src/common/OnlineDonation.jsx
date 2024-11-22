import React from "react";


const OnlineDonation = () => {
  return (
    <div className="container pt-5">
      <div id="open5" className="payment-name">


        {/* Form Section */}
        <div className="contact-form form-style">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 mb-3">
              <label>Card Holder Name</label>
              <input type="text" className="form-control" placeholder="Enter name" name="name" required />
            </div>
            <div className="col-lg-6 col-md-12 col-12 mb-3">
              <label>Card Number</label>
              <input type="text" className="form-control" placeholder="Enter card number" id="card" name="card" required />
            </div>
            <div className="col-lg-6 col-md-12 col-12 mb-3">
              <label>CVV</label>
              <input type="text" className="form-control" placeholder="Enter CVV" name="CVV" required />
            </div>
            <div className="col-lg-6 col-md-12 col-12 mb-3">
              <label>Expire Date</label>
              <input type="text" className="form-control" placeholder="MM/YY" name="date" required />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineDonation;
