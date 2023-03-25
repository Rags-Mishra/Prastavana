import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import styled from "styled-components";
import logo from "../assets/logo2.svg";
import MenuIcon from "@mui/icons-material/Menu";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";
const MenuButton = styled(IconButton)`
  && {
    @media (max-width: 600px) {
      display: block;
    }
    display: none;
  }
`;
const MobileGrid = styled(Grid)`
  && {
    @media (max-width: 600px) {
      display: block;
    }
    display: none;
  }
`;
const DesktopGrid = styled(Grid)`
  && {
    @media (max-width: 600px) {
      display: none;
    }
    display: block;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = (open) => {
    setOpen(open);
  };
  let navigate = useNavigate();
  return (
    <>
      <Grid container className="navbar-main-container">
        <Grid container className="navbar-second-container">
          <MenuButton onClick={() => handleMenu(!open)}>
            <MenuIcon style={{ color: "white" }} />
          </MenuButton>

          <Grid className="header-text">Prastavana</Grid>
          <Grid item className="mobile-login">
            <StyledButton onClick={() => navigate("/login")}>
              Login
            </StyledButton>
          </Grid>
          <img src={logo} alt={"logo"} className="logo"></img>

          <DesktopGrid className="button-container">
            <StyledButton onClick={() => navigate("/login")}>
              Login
            </StyledButton>
            <StyledButton
              style={{
                marginLeft: "20%",
              }}
              onClick={() => navigate("/register")}
            >
              Sign Up
            </StyledButton>
          </DesktopGrid>
        </Grid>
        {open ? (
          <>
            <MobileGrid item className="button-container">
              <StyledButton
                style={{
                  borderRadius: 50,
                  marginBottom: "50%",
                  marginLeft: "20%",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </StyledButton>
              <StyledButton
                style={{
                  borderRadius: 50,
                  marginLeft: "20%",
                }}
                onClick={() => navigate("/register")}
              >
                Sign Up
              </StyledButton>
            </MobileGrid>
          </>
        ) : null}
      </Grid>
    </>
  );
};

export default Navbar;
