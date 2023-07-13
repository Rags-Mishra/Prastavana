import styled from "styled-components";
import { Button, Grid, Input, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import EmailIcon from "@mui/icons-material/Email";
const LinkButton = styled(Button)`
  && {
    @media (max-width: 600px) {
      font-size: x-small;
    }
    font-size: 13;
    font-weight: bold;
    color: #6b00c0;
  }
`;
const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="home-main-container">
        <p className="main-text">Give your introduction with Prastavana.</p>
        <Grid className="input-link-container">
          prastavana/
          <Input
            placeholder={"yourname"}
            disableUnderline={true}
            style={{ width: "30%" }}
          ></Input>
          <LinkButton onClick={() => navigate("/register")}>
           Get your link
          </LinkButton>
        </Grid>

        <p className="main-text">
          With Prastavana, all your social links will be at place.
        </p>
        {/* social media icons */}
        <Grid container className="icon-container">
          <PodcastsIcon
            style={{
              color: "white",
              fontSize: "xxx-large",
              marginInline: "5%",
            }}
          />
          <YouTubeIcon
            style={{
              color: "white",
              fontSize: "xxx-large",
              marginInline: "5%",
            }}
          />
          <FacebookIcon
            style={{
              color: "white",
              fontSize: "xxx-large",
              marginInline: "5%",
            }}
          />
          <InstagramIcon
            style={{
              color: "white",
              fontSize: "xxx-large",
              marginInline: "5%",
            }}
          />

          <EmailIcon
            style={{
              color: "white",
              fontSize: "xxx-large",
              marginInline: "5%",
            }}
          />
        </Grid>
      </div>
    </>
  );
};

export default Home;
