import React, { useEffect, useState } from 'react';
import Review from '../../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("https://glacial-reef-73275.herokuapp.com/addReview")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    console.log(reviews)
    return (
        <div className="container mt-5 mb-5 me-5">
            <h1>Here Some Reviews</h1>
            {/* {reviews.map(review=><Review  comment="comment"></Review>)} */}
       
       
       
       <hr />
        </div>
    );
};

export default Reviews;