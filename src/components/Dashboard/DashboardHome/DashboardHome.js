import * as React from 'react';
import Grid from '@mui/material/Grid';
import AllBookings from './../../AllBookings/AllBookings';
import MyBookings from './../../MyBookings/MyBookings';






const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <div>
               <Grid container spacing={1}>
                        
                        <Grid item xs={6} sm={12}>
                            <MyBookings> date={date}</MyBookings>
                        </Grid>
                    </Grid>
        </div>
    );
};

export default DashboardHome;