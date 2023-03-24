import { Grid, IconButton, Input } from "@mui/material";
import StyledButton from "./StyledButton";
import TextField from "@mui/material/TextField";

import { Divider } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
const Register = () => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/mylinks");
    }

    if (error === "User already exists") {
      alert("User already exists");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [isAuthenticated, submitted]);
  let navigate = useNavigate();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Please enter all fields", "danger");
    } else if (password !== password2) {
      alert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
    setSubmitted(true);
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
            <p className="register-text">SignUp</p>
          </Grid>
          <Divider style={{ borderBottomWidth: "0.1rem" }} />
          <TextField
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
            variant="outlined"
            fullWidth={true}
          />
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
            minLength={6}
            inputProps={{
              minLength: 6,
            }}
            variant="outlined"
            fullWidth={true}
          />

          <TextField
            id="confirm"
            label="Confirm Password"
            name="password2"
            type="password"
            value={password2}
            minLength="6"
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

              fontSize: "x-small",
            }}
            fullWidth
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
    </form>
  );
};

export default Register;
