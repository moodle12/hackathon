import React from "react";
import "./payment.styles.css";
const Payment = () => {
  return (
    <>
      <div className="paymentBody">
        {" "}
        <form className="paymentForm">
          <h3>Payment Form</h3>

          <label htmlFor="flname">Name</label>
          <input type="text" placeholder="Enter Name" id="fname" />

          <label htmlFor="cardnum">Card Number</label>
          <input type="text" placeholder="Enter Card Number" id="cardnum" />

          <label htmlFor="expdate">Expiry Date</label>
          <input type="date" placeholder="Enter Expiry Date" id="expdate" />

          <label htmlFor="cvv">CVV</label>
          <input type="text" placeholder="Enter CVV" id="cvv" />

          <button class="btn1">Pay Now</button>
        </form>
      </div>
    </>
  );
};

export default Payment;
