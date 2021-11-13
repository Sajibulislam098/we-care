import React, { useState } from 'react';
import useAuth from './../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { Alert } from '@mui/material';
const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);

    const onSubmit = (data) => {
      fetch("https://glacial-reef-73275.herokuapp.com/addReview", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result) {
            alert("Review Is Added  ");
          } else {
            alert("Not Added Yet");
          }
        });
  
      console.log(data);
    };
    return (
        <div>


        <div className="limiter book-limiter">
        <div className="container-login100 align-items-start py-0">
          <div className="wrap-login100">
          <h1>Review</h1><br /> <hr />
           <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field input100"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <hr />
        <input
          className="input-field input100"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />
        <hr />
        <input
          className="submit-btn btn btn-danger mt-3 "
          type="submit"
          value="Add"
        />
      </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}

          </div>
        </div>
      </div>
    
    </div>
    );
};

export default Review;