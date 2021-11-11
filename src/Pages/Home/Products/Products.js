import React from 'react';
import { useEffect, useState } from "react";
import Product from './../Product/Product';
import { Grid, Container, Alert, Typography } from '@mui/material';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [bookingSuccess,setBookingSuccess]=useState(false)

    useEffect(() => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  
    return (
      <Container>
        <Typography variant="h2" gutterBottom>Available Cameras</Typography>
        {bookingSuccess && <Alert severity="success">Products Orders Successfully!</Alert>}
        <Grid container spacing={2}>
      {products.slice(0,6).map((product) => (
          <Product 
          key={product.id} 
          product={product}
          setBookingSuccess={setBookingSuccess}
        //   date={date}
        //   setBookingSuccess={setBookingSuccess}
          ></Product>
        ))}
</Grid>
  
      </Container>
    );
  };

export default Products;