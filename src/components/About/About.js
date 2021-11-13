import React, { useEffect } from "react";
import "./About.css";
import about from "../../assets/about_img.png";

const About = () => {
  // Change Title
  useEffect(() => {
    document.title = "We Secure | About";
    window.scrollTo(0, 0);
  }, []);

  return (
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

      {/* <div className="">
        <div className=" ">
          <h1>
            AFRICA IS AN INCREDIBLE PLACE TO VISIT, CONSISTENTLY A TOP 5
            DESTINATION FOR MOST TRAVELERS.
          </h1>
          <br />
          <p>
            <b>
              It is undoubtedly a highly desirable lifetime opportunity,
              deserving of proper planning.
            </b>
          </p>
          <p className="about">
            Live Africa draws on the unique backgrounds of its team, with
            decades of combined experience working with discerning travelers to
            design and coordinate unforgettable safaris to Africa. We have
            personally visited and approved all of the destinations we
            recommend. We are meticulous about keeping ourselves current on the
            finest destinations Africa has to offer. Furthermore, we are
            committed to the conservation of Africa’s natural and cultural
            resources and economic upliftment. This is reflected in part by our
            choice of local suppliers, lodges and hotels and also through our
            own direct support of important programs and initiatives.
          </p>
        </div>
        <div className="">
          <img
            src="https://www.liveafrica.com/sites/default/files/expert-ph.jpg"
            className="w-100"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};
export default About;
