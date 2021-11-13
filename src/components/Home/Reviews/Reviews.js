import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/addReview")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    console.log(reviews)
    return (
        <div className="container mt-5 mb-5 me-5">
            <h1>Here Some Reviews</h1>
            {/* {reviews.map(review=>)} */}
       
       
       
       <hr />
        </div>
    );
};

export default Reviews;