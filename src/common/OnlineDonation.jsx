import React from "react";

import pmt1 from "../../../navarna/src/images/checkout/img-1.png";
import pmt2 from "../../../navarna/src/images/checkout/img-2.png";
import pmt3 from "../../../navarna/src/images/checkout/img-3.png";
import pmt4 from "../../../navarna/src/images/checkout/img-4.png";

const OnlineDonation = () => {
  return (
    <div className="container pt-5">
      <div id="open5" className="payment-name">
        {/* Removed the title and radio buttons, just showing images in a row */}
        {/* <ul className="list-unstyled d-flex  mb-4">
          <li>
            <img src={pmt1} alt="Visa" className="img-fluid" />
          </li>
          <li>
            <img src={pmt2} alt="Mastercard" className="img-fluid" />
          </li>
          <li>
            <img src={pmt3} alt="Stripe" className="img-fluid" />
          </li>
          <li>
            <img src={pmt4} alt="PayPal" className="img-fluid" />
          </li>
        </ul> */}

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
