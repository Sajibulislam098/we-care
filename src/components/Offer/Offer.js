import React from "react";
import { useHistory } from "react-router";
import "./Offer.css";

const Offer = (props) => {
  const { _id, name, img, price, description } = props.data;
  const history = useHistory();
  const handleBook = ()=> {
      history.push(`/offers/${_id}`);
  }
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title name">{name}</h5>
          <p className="card-text price text-danger">${price}</p>
          
          <p className="cart-text description">{description}</p>
          <button className="btn btn-outline-danger book-btn" onClick={handleBook}>ORDER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
