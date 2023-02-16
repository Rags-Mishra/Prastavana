import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import InfinitySymbol from "../assets/Infinity Symbol.svg";
import StyledButton from "./StyledButton";
import { NavLink } from "react-router-dom";
import { MDBBtn, MDBModal, MDBContainer } from "mdb-react-ui-kit";
import Login from "./Login";
import "../styles/login.css";

const Navbar = () => {
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => {
    setStaticModal(!staticModal);
  };
  const home = () => {
    setStaticModal(false);
  };

  return (
    <>
      <Grid container className="navbar-main-container" md={12} xs={12}>
        <Grid container className="header-icon-container" md={11} xs={5}>
          <Grid item className="header-text">
            Prastavana
          </Grid>
          <Grid item>
            <img src={InfinitySymbol} className="header-icon"></img>
          </Grid>
        </Grid>

        <StyledButton onClick={toggleShow}>Login</StyledButton>
      </Grid>

      <MDBModal
        staticBackdrop
        tabIndex="-1"
        show={staticModal}
        setShow={setStaticModal}
      >
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50" id="body">
          <p id="close">
            <MDBBtn
              className="btn-close"
              color="none"
              aria-label="Close"
              onClick={() => home()}
            />
          </p>
          <Login />
        </MDBContainer>
      </MDBModal>
    </>
  );
};

export default Navbar;
