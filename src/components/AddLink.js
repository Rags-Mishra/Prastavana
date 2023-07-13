import React from "react";
import { Divider, Grid, Input } from "@mui/material";
const AddLink = () => {
  return (
    <>
      <Grid
        container
        className="add-link-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Grid item>
          <Input
            placeholder={"Handle Name (My Instagram)"}
            style={{ fontSize: "small", width: "14rem", marginLeft: "3%" }}
            disableUnderline
          />
        </Grid>
        <Divider />
        <Grid item>
          <Input
            placeholder={"Handle Link"}
            style={{ fontSize: "small", width: "14rem", marginLeft: "3%" }}
            disableUnderline
          ></Input>
        </Grid>
      </Grid>
    </>
  );
};

export default AddLink;
