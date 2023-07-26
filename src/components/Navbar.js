import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
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
  const authContext = useContext(AuthContext);
  const [loggingout, setLoggingout] = useState(false);
  const { token, logout } = authContext;
  const [open, setOpen] = useState(false);
  const handleMenu = (open) => {
    setOpen(open);
  };
  const handleClose = () => {
    setLoggingout(false);
  };
  const onLogout = () => {
    logout();
    navigate("/");
    setOpen(false);
    setLoggingout(false);
  };
  useEffect(() => {
    console.log("token: ", token);
  }, []);

  let navigate = useNavigate();
  return (
    <>
      <Grid container className="navbar-main-container">
        <Grid container className="navbar-second-container">
          <MenuButton onClick={() => handleMenu(!open)}>
            <MenuIcon style={{ color: "white" }} />
          </MenuButton>

          <Grid className="header-text">Prastavana</Grid>

          <IconButton className="logo-button" onClick={() => navigate("/")}>
            <img src={logo} alt={"logo"} className="logo"></img>
          </IconButton>

          <DesktopGrid className="button-container">
            {token !== null ? (
              <>
                <StyledButton onClick={() => setLoggingout(true)}>
                  Logout
                </StyledButton>
                <StyledButton
                  style={{
                    marginLeft: "10%",
                  }}
                  onClick={() => navigate("/mylinks")}
                >
                  My links
                </StyledButton>
              </>
            ) : (
              <>
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
              </>
            )}
          </DesktopGrid>
        </Grid>
        
          <>
            <Menu
              sx={{ display: { md: "none", xs: "block" } }}
              open={open}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={() => setOpen(false)}
            >
              {token !== null ? (
                <>
                  <MenuItem onClick={() => setLoggingout(true)}>
                    Logout
                  </MenuItem>
                  <MenuItem onClick={() => (navigate("/mylinks"),setOpen(false))}>
                    My links
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    style={{
                      borderRadius: 50,
                    }}
                    onClick={() => (navigate("/login"),setOpen(false))}
                  >
                    Login
                  </MenuItem>
                  <MenuItem
                    style={{
                      borderRadius: 50,
                    }}
                    onClick={() => (navigate("/register"),setOpen(false))}
                  >
                    Sign Up
                  </MenuItem>
                </>
              )}
            </Menu>
          </>
        <Dialog
          open={loggingout}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Are you sure you want to logout?"}</DialogTitle>
          <DialogActions>
            <Button onClick={onLogout}>Logout</Button>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
};

export default Navbar;
