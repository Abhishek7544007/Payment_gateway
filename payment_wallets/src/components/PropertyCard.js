import React from "react";

import displayRazorpay from "../utils/PaymentGateway";

const PropertyCard = ({
  PropertyName,
  PropertyThumbnail,
  PropertyDetails,
  PropertyPrice,
  PropertyDiscountedPrice,
  PropertyDiscount,
}) => {
  return (
    <article className="card">
      <img src={PropertyThumbnail} alt={PropertyName} />
      <div className="card-content">
        <header className="card-header">
          <h5>{PropertyName}</h5>
        </header>
        <p>{PropertyDetails}</p>
        <h4>
          ₹{PropertyDiscountedPrice}{" "}
          <span className="Property-price">₹{PropertyPrice}</span>{" "}
          <span className="Property-discount-percentage">
            {PropertyDiscount}% OFF
          </span>
        </h4>
        <button
          type="button"
          onClick={displayRazorpay}
          className="Property-payment-button"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default PropertyCard;
