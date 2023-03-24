import React, { useState, useContext, useEffect } from "react";

import { Grid, IconButton, Input } from "@mui/material";
import StyledButton from "./StyledButton";
import { Divider } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import TextField from "@mui/material/TextField";

const Register = () => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/mylinks");
    }

    if (error === "User already exists") {
      alert("User already exists");
      clearErrors();
    }
  });

  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
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
          <TextField
            id="email"
            label="Email-id"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            required
            variant="outlined"
            fullWidth={true}
          />

          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={onChange}
            required
            inputProps={{
              minLength: 6,
            }}
            variant="outlined"
            fullWidth={true}
          />

          <StyledButton
            type="submit"
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
    </form>
  );
};

export default Register;
