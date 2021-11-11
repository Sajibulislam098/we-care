import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Paper, Typography, Alert } from '@mui/material';
import BookingModal from './../../BookingModal/BookingModal';

const Product = ({product,bookingSuccess,setBookingSuccess}) => {
    const { id, img, name, description } = product;
    // const [bookingSuccess,setBookingSuccess]=useState(false)

    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
         {bookingSuccess && <Alert severity="success">Product Order Successfully!</Alert>}
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
            <Typography>
               <img style={{width:"100%"}} src={img} alt="" />
            </Typography>
            <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                {name}</Typography>
            <Typography >
                {description} 
            </Typography>
            <Button  onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
        </Paper>
    </Grid>
  <BookingModal
  product={product}
  openBooking={openBooking}
  handleBookingClose={handleBookingClose}
  setBookingSuccess={setBookingSuccess}
></BookingModal>
</>
    );
};

export default Product;