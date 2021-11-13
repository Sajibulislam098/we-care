import * as React from 'react';
import Grid from '@mui/material/Grid';
import AllBookings from './../../AllBookings/AllBookings';
import MyBookings from './../../MyBookings/MyBookings';
import { Col, Container, Row } from 'react-bootstrap';







const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <div>
           
               <Grid>
                        
                        <Grid item xs={6} sm={12}>
                            <MyBookings> date={date}</MyBookings>
                        </Grid>
                    </Grid>
        </div>
    );
};

export default DashboardHome;