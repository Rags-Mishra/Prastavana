import productImage from "../assets/product image.png";
import User from "../assets/User.svg";
import React from "react";
import { Button,Grid } from "@mui/material";
const ProductContainer = () => {
  return (
    <Grid container className="product-container-main-container" md={3} xs={12}>
      <Grid container className="user-name-container">
        <Grid item><img src={User} className='user-icon'></img></Grid>
        <Grid item className="user-name-text">Ragini Mishra</Grid>
      </Grid>
      <Grid item>
        <img src={productImage} className="product-image" ></img>
      </Grid>
      <Grid item md={12} xs={12}>
        <Button style={{backgroundColor:'#676565', width:'100%',color:'white'}}>BUY NOW</Button>
      </Grid>
    </Grid>
  );
};

export default ProductContainer;
