import React from "react";
import { Grid, IconButton, Input } from "@mui/material";
import StyledButton from "./StyledButton";
import { Divider } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Register = () => {
  let navigate = useNavigate();
  return (
    <Grid container className="register-main-container">
      <Grid item className="register-second-container">
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
            paddingTop: "2%",
          }}
        >
          <IconButton
            style={{
              width: "10%",
              borderRadius: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            onClick={() => navigate("/")}
          >
            <ArrowBack style={{ fontSize: "medium" }} />
          </IconButton>
          <p className="register-text">SignUp</p>
        </Grid>
        <Divider style={{ borderBottomWidth: "0.1rem" }} />
        <Grid item className="input-container" style={{ marginTop: "10%" }}>
          <Input
            type="text"
            placeholder={"Email"}
            disableUnderline
            style={{ fontSize: "small", paddingRight: "5%" }}
            fullWidth
          />
        </Grid>
        <Grid item className="input-container" style={{ marginTop: "10%" }}>
          <Input
            type="password"
            disableUnderline
            placeholder={"Password"}
            style={{ fontSize: "small", paddingRight: "5%" }}
            fullWidth
          />
        </Grid>
        <Grid item className="input-container" style={{ marginTop: "10%" }}>
          <Input
            type="password"
            disableUnderline
            placeholder={"Confirm Password"}
            style={{ fontSize: "small", paddingRight: "5%" }}
            fullWidth
          />
        </Grid>
        <StyledButton
          style={{
            backgroundColor: "#c80078",
            border: "none",
            borderRadius: "1rem",
            alignSelf: "center",
            marginTop: "40%",
            fontSize: "x-small",
          }}
          fullWidth
          onClick={()=>navigate('/form')}
        >
          Done
        </StyledButton>
        <p style={{ fontSize: "small", marginLeft: "3%", marginTop: "10%" }}>
          Already have an account?{" "}
          <a href="/login" style={{ fontSize: "small" }}>
            Log in here
          </a>
        </p>
      </Grid>
    </Grid>
  );
};

export default Register;
