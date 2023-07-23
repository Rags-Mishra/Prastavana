import { AddLink } from "@mui/icons-material";
import AuthContext from "../context/auth/authContext";
import React, { useState, useContext, useEffect } from "react";
import LinkFormContext from "../context/linkform/linkFormContext";
import { useNavigate } from "react-router-dom";
import { Grid, Link, Typography, Button } from "@mui/material";
const MyLinks = () => {
  let navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const linkFormContext = useContext(LinkFormContext);
  const { links, getLinks } = linkFormContext;
  const { register, error, clearErrors, isAuthenticated, user, token } =
    authContext;
  const User = JSON.parse(user);
  useEffect(() => {
    getLinks();
  }, []);
  console.log("links: ", links);
  return (
    <>
      {links && (
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid
            item
            sx={{
              width: "60%",
              // backgroundColor: "#fadfdf",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
              paddingTop: "2%",
              paddingBottom: "2%",
            }}
          >
            <Grid item sx={{ width: "15%" }}>
              <img
                src={links.image}
                style={{
                  width: "100%",
                  borderRadius: "20%",
                  borderColor: "#c80078",
                  borderStyle: "solid",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono",
                  fontSize: 20,
                  color: "#fff",
                  marginTop: "5%",
                  fontWeight: "bold",
                }}
              >
                {links?.name}
              </Typography>
            </Grid>
            <Grid item sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono",
                  fontSize: 14,
                  color: "#fff",
                  marginTop: "5%",
                }}
              >
                {links?.bio}
              </Typography>
            </Grid>
            {links?.links.map((link) => (
              <Button
                key={link}
                sx={{
                  backgroundColor: "#EB3459",
                  width: "70%",
                  marginTop: "5%",
                  textAlign: "center",
                  borderRadius: "25px",
                  textTransform: "none",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#F24669",
                    width: "73%",
                  },
                }}
                href={link?.linkURL}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: 18,
                    fontFamily: "Roboto Mono",
                    fontWeight: "bold",
                  }}
                >
                  {link?.linkName}
                </Typography>
              </Button>
            ))}
          </Grid>
          <Grid
            item
            sx={{
              marginTop: "5%",
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              Present your prastavana account
            </Typography>
            <Link
              href={`https://prastavana.netlify.app/mylinks`}
              sx={{
                backgroundColor: "#DBD9DA",
                padding: "2%",
                color: "#84004F",
                borderRadius: "25px",
              }}
            >{`https://prastavana.netlify.app/${links?.name}`}</Link>
          </Grid>
        </Grid>
      )}
      {links === "" ? (
        <>
          <Typography color={"white"}>No account made yet</Typography>
          <Button
            style={{
              backgroundColor: "#c80078",
              border: "none",
              borderRadius: "1rem",
              alignSelf: "center",
              fontSize: "small",
              marginBottom: "5%",
              marginTop: "3%",
              color: "white",
            }}
            onClick={() => navigate("/LinkForm")}
          >
            Make your Prastavana account now!
          </Button>
        </>
      ) : null}
    </>
  );
};

export default MyLinks;
