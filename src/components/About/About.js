import React, { useEffect } from "react";
import "./About.css";
import about from "../../assets/about_img.png";
import Header from "../Header/Header";

const About = () => {
  // Change Title
  useEffect(() => {
    document.title = "We Secure | About";
    window.scrollTo(0, 0);
  }, []);

  return (
    <><Header></Header>
    <div className="container about-container">
      <h1 className="booking-header">About Us</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          {" "}
          <img src={about} className="w-100" alt="" />
        </div>
        <div className="col-md-6">
          <h1>Best Solution For Security System</h1>
          <p>
            Vestibulum tristique ante sit amet fringilla pulvinar. Maecenas
            vitae placerat augue. Donec turpis nunc, pulvinar vel sodales eget,
            convallis nec odio. Donec nec quam tincidunt, gravida sem ac,
            malesuada libero.
          </p>{" "}
          <br/>
          <div>
          <h3>All Your Security System At One Place</h3>
          <p>
            All Your Security System At One Place Nunc id justo eu est
            condimentum mollis. Ut consequat, est sit amet venenatis ultrices,
            enim odio euismod justo.
          </p>
        </div>
        <br/>
        <div>
          <h3>Great Services And Support With Us</h3>
          <p>
            Great Services And Support With Us Beginning with the point by point
            business investigation of your image, item, and market; we add to an
            arrangement
          </p>
        </div>
        </div>
        <br />
       
      </div>

    
    </div>
    </>
  );
};
export default About;
