import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, Link, Typography, Button } from "@mui/material";
import ShareLinkFormContext from '../context/shareLinkform/shareLinkFormContext';
const ShareLink = ({setShare}) => {
  let navigate = useNavigate();
  const shareLinkFormContext=useContext(ShareLinkFormContext);
  const {getLinksToShare,links,loading}=shareLinkFormContext;
  let params = new URLSearchParams(document.location.search);
const id = params.get("id"); 
 console.log("id: ",id)
  useEffect(() => {
    setShare(true);
    getLinksToShare(id)
  }, [])
  console.log("links in share: ",links);
  return (
    <>
     {loading?<Grid container sx={{height:'50vh',display:'flex',alignItems:'center',justifyContent:'center'}}><CircularProgress sx={{fontSize:'3rem'}} size={'4rem'} color="secondary"/></Grid>:
       
      links && (
        <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding:'5%',
        }}
        className="sharelinks-main-container"
      >
        <Grid
          item
          sx={{
            width: {xs:"100%",md:'60%'},
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
          <Grid item sx={{ width: {md:"15%",xs:'40%'} }}>
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
                fontSize: {md:20,xs:25},
                color: "#fff",
                marginTop: "5%",
                fontWeight: "bold",
              }}
            >
              {links?.name}
            </Typography>
          </Grid>
          <Grid item sx={{ width: {md:"70%",xs:'100%'} }}>
            <Typography
              sx={{
                fontFamily: "Roboto Mono",
                fontSize: {md:14,xs:17},
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
                width: {xs:"90%",md:'70%'},
                marginTop: "5%",
                textAlign: "center",
                borderRadius: "25px",
                textTransform: "none",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#F24669",
                  width: {md:"72%",xs:'92%'},
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 16,fontWeight:'bold' }}>
          ✨ Make your own prastavana account ✨
          </Typography>
          <Link
            href={`https://prastavana.netlify.app`}
            sx={{
              backgroundColor: "#DBD9DA",
              padding: "2%",
              color: "#84004F",
              borderRadius: "25px",
            }}
          >{`https://prastavana.netlify.app/Your-Name`}</Link>
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

export default ShareLink;
