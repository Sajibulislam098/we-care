import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import home from '../../../assets/1.png';
import information from '../../../assets/2.png';
import support from '../../../assets/3.png';
import Service from './../Service/Service';

const services = [
    {
        name: 'Home Security',
        description: 'Vivamus posuere nibh faucibus dictum fermentum. Curabitur vel tellus ut elit tempus tristique eu vel ex.Vivamus posuere nibh faucibus dictum fermentum. Curabitur vel tellus ut elit tempus tristique eu vel ex.',
        img: home
    },
    {
        name: 'Information Security',
        description: 'Vivamus posuere nibh faucibus dictum fermentum. Curabitur vel tellus ut elit tempus tristique eu vel ex.Vivamus posuere nibh faucibus dictum fermentum. Curabitur vel tellus ut elit tempus tristique eu vel ex.',
        img: information
    },
    {
        name: 'Useful Support',
        description: 'Vivamus posuere nibh faucibus dictum fermentum. Curabitur vel tellus ut elit tempus tristique eu vel ex.Vivamus posuere nibh faucibus dictum fermentum. Curabitur vel tellus ut elit tempus tristique eu vel ex.',
        img: support
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container style={{marginTop:"-50px"}}>
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;