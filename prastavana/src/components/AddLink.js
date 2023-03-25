import React from 'react'
import { Grid, Input } from '@mui/material'
const AddLink = () => {
  return (
    <><Grid item>
    <Input placeholder={"Handle Name (My Instagram)"} />
  </Grid>
  <Grid item>
    <Input placeholder={"Handle Link"}></Input>
  </Grid></>
    
  )
}

export default AddLink