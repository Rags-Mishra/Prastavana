import { Grid } from '@mui/material';
import React from 'react';
import ProductContainer from '../components/ProductContainer';

const Home = () => {
  return (
    <Grid container className='home-main-container' >
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
    </Grid>
  )
}

export default Home