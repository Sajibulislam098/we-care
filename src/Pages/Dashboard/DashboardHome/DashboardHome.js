import * as React from 'react';
import Grid from '@mui/material/Grid';
// import Calendar from './../../Shared/Calendar/Calendar';
import { Container } from '@mui/material';
import MyOrder from './../MyOrder/MyOrder';






const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <Container>
               <Grid container spacing={2}>
                        
                        <Grid item xs={12} sm={7}>
                            <MyOrder date={date}></MyOrder>
                        </Grid>
                    </Grid>
        </Container>
    );
};

export default DashboardHome;