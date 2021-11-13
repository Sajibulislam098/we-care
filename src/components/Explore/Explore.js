import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Offer from './../Offer/Offer';


const Explore = (props) => {
    const { offers } = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://glacial-reef-73275.herokuapp.com/offers")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    console.log(products)
    return (
        <div className="serviceBg">
      <div className="container " id="offers">
      <h2 className=" mt-5 d-flex justify-content-center mb-5 nameColor">
       Order Here
      </h2>

      <div className="container">
        <div className="row g-4 px-2">
          {products.map((offer) => (
            <Offer key={offer._id} data={offer}></Offer>
          ))}
        </div>
      </div>
    </div>
    </div>
    );
};

export default Explore;