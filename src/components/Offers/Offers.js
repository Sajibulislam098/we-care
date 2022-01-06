import React from "react";

import "./Offers.css";
import Offer from './../Offer/Offer';

const Offers = (props) => {
  const { offers } = props;
  return (
    <div className="serviceBg">
      <div className="container " id="offers">
      <h2 className=" mt-5 d-flex justify-content-center mb-5 nameColor">
      Order Here
      </h2>
     

      <div className="container">
        <div className="row g-4 ">
          {offers.slice(0,6).map((offer) => (
            <Offer key={offer._id} data={offer}></Offer>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Offers;
