import React from "react";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

import Offers from "../Offers/Offers";
import Review from "../Review/Review";

import LastInfo from "./LastInfo/LastInfo";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import Header from './../Header/Header';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  // Change Title
  useEffect(() => {
    document.title = "We Secure | Home";
    window.scrollTo(0, 0);
    fetch("https://glacial-reef-73275.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="home-container">
      {loading ? (
        <div className="spinner d-flex align-items-center justify-content-center">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ms-2">Loading...</span>
          </button>
        </div>
      ) : (
        <> <Header></Header>
          <Banner></Banner>
          <Services></Services>

          <Offers offers={offers}></Offers>
          <Reviews></Reviews>
          <LastInfo></LastInfo>
        </>
      )}
    </div>
  );
};

export default Home;
