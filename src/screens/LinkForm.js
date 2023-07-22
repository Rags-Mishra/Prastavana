import React, { useState, useContext } from "react";
import {
  Grid,
  IconButton,
  Divider,
  Input,
  Button,
  Card,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import StyledButton from "../components/StyledButton";
import AddIcon from "@mui/icons-material/Add";
import LinkFormContext from "../context/linkform/linkFormContext";
import { useNavigate } from "react-router-dom";
const LinkForm = () => {
  let navigate = useNavigate();
  const linkFormContext = useContext(LinkFormContext);
  const { addlinks } = linkFormContext;
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState([1]);
  const [link, setLink] = useState({
    linkName: "",
    linkURL: "",
  });
  const [links, setLinks] = useState([]);
  const [linkform, setLinkForm] = useState({
    name: "",
    bio: "",
    image: "",
  });
  const handleLinkSubmit = () => {
    if (link.linkName === "" || link.linkURL === "") {
      alert("Can't add empty string");
    } else {
      setLinks((previous) => [...previous, link]);
      setOpen(true);
      setLink({ linkName: "", linkURL: "" });
    }
  };
  const handleChange = (e) => {
    setLinkForm((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  const { name, bio, image } = linkform;
  const onSubmit = () => {
    if (name == "" || bio == "" || image == "") {
      alert("Kindly fill all the details");
    } else if (links.length == 0) {
      if (link.linkName === "" || link.linkURL === "") {
        alert("Kindly add atleast one link");
      } 
    }
    else {
      // addlinks({
      //   name,
      //   bio,
      //   image,
      //   links,
      // });
      console.log("info: ", linkform, links);
      alert("Links added successfully");
      setLinkForm({ name: "", bio: "", image: "" });
      setLinks([]);
    }
  };

  return (
    <Grid container className="register-main-container">
      <Grid
        item
        className="add-link-second-container"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success">Link Added</Alert>
        </Snackbar>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "5%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Card
            style={{
              height: "4rem",
              width: "4rem",
              borderRadius: "5rem",
              borderStyle: "dashed",
              borderWidth: 1,
              borderColor: "dark grey",
            }}
          >
            <Input
              type="file"
              id="image"
              value={linkform.image}
              inputProps={{ accept: "image/*" }}
              disableUnderline
              onChange={(e) => handleChange(e)}
            />
          </Card>
          <Grid item sx={{ width: { md: "70%", xs: "50%" } }}>
            <Grid
              item
              className="input-container"
              style={{ marginTop: "5%", borderRadius: 0 }}
            >
              <Input
                disableUnderline
                placeholder={"Your Name"}
                style={{ fontSize: "small", paddingRight: "5%" }}
                id="name"
                fullWidth
                value={linkform.name}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid
              item
              className="input-container"
              style={{ marginTop: "5%", borderRadius: 0 }}
            >
              <Input
                disableUnderline
                id="bio"
                placeholder={"Add bio"}
                style={{ fontSize: "small", paddingRight: "5%" }}
                fullWidth
                value={linkform.bio}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
          </Grid>
        </Grid>
        {links?.map((link) => (
          <Grid
            key={link}
            container
            className="added-link-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item sx={{backgroundColor:'#FFD130',opacity:'70%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',textAlign:'center'}}>
              <Typography variant="content">{link?.linkName}</Typography>
            </Grid>
           
            <Grid item sx={{backgroundColor:'#FFD130',opacity:'70%',borderBottomLeftRadius:'25px',borderBottomRightRadius:'25px',textAlign:'center'}}>
              <Typography variant="content">{link?.linkURL}</Typography>
            </Grid>
          </Grid>
        ))}

        <Grid
          container
          className="add-link-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Grid item>
            <Input
              id="linkName"
              placeholder={"Handle Name (My Instagram)"}
              style={{ fontSize: "small", width: "14rem", marginLeft: "3%" }}
              disableUnderline
              onChange={(e) =>
                setLink((previous) => ({
                  ...previous,
                  [e.target.id]: e.target.value,
                }))
              }
              value={link.linkName}
            />
          </Grid>
          <Divider />
          <Grid item>
            <Input
              id="linkURL"
              placeholder={"Handle Link"}
              style={{ fontSize: "small", width: "14rem", marginLeft: "3%" }}
              disableUnderline
              onChange={(e) =>
                setLink((previous) => ({
                  ...previous,
                  [e.target.id]: e.target.value,
                }))
              }
              value={link.linkURL}
            ></Input>
          </Grid>
        </Grid>
        <Button
          onClick={() => handleLinkSubmit()}
          sx={{
            alignSelf: "center",
            border: "solid",
            borderWidth: 1,
            padding: 0,
            color: "#c80078",
            marginTop: "2%",
          }}
        >
          <Typography
            variant="content"
            sx={{ textTransform: "none", color: "#c80078" }}
          >
            Add Link
          </Typography>
          <AddIcon style={{ fontSize: "small" }} />
        </Button>

        <StyledButton
          type="submit"
          style={{
            backgroundColor: "#c80078",
            border: "none",
            borderRadius: "1rem",
            alignSelf: "center",
            fontSize: "small",
            marginBottom: "5%",
            marginTop: "3%",
          }}
          fullWidth
          onClick={onSubmit}
        >
          Create
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default LinkForm;
