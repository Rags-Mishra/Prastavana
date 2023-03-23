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
          <p className="register-text">Login</p>
        </Grid>
        <Divider style={{ borderBottomWidth: "0.1rem" }} />
        <Grid item className="input-container" style={{ marginTop: "20%" }}>
          <Input
            type="text"
            placeholder={"Email"}
            disableUnderline
            style={{ fontSize: "small", paddingRight: "5%" }}
            fullWidth
          />
        </Grid>
        <Grid item className="input-container" style={{ marginTop: "15%" }}>
          <Input
            type="password"
            disableUnderline
            placeholder={"Password"}
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
            fontSize: "small",
          }}
          fullWidth
        >
          Done
        </StyledButton>
        <p style={{ fontSize: "small", marginLeft: "3%", marginTop: "15%" }}>
          Don't have an account?{" "}
          <a href="/register" style={{ fontSize: "small" }}>
            SignUp here
          </a>
        </p>
      </Grid>
    </Grid>
  );
};

export default Register;
