import React, { useState, useContext } from "react";
import {
  Grid,
  IconButton,
  Divider,
  Input,
  Button,
  Card,
  Image,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import StyledButton from "../components/StyledButton";
import AddIcon from "@mui/icons-material/Add";
import LinkFormContext from "../context/linkform/linkFormContext";
import { useNavigate } from "react-router-dom";
import user from "../assets/User.png";
import axios from "axios";
const LinkForm = () => {
  let url = "http://localhost:5000";

  let navigate = useNavigate();
  const linkFormContext = useContext(LinkFormContext);
  const { addlinks } = linkFormContext;
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(true);
  const [imageAlert, setImageAlert] = useState(false);
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
    cloudinary_id: "",
  });
  const [img, setImg] = useState("");

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
  const onImgChangePhoto = (e) => {
    setLinkForm({
      ...linkform,
      image: e.target.files[0],
    });
    console.log("img: ", e.target.files[0]);
  };
  const onUploadPhoto = async () => {
    // console.log("in here")
    const formData = new FormData();
    formData.append("file", linkform.image);
    let res;
    linkform.image ? setImageAlert(true) : alert("No file is chosen");

    try {
      {
        res = await axios.post(`${url}/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      setUploading(false);
      setTimeout(() => {
        setImageAlert(false);
      }, 2000);
      console.log("image: ", res.data);
      const { secure_url, public_id } = res.data;
      setLinkForm({ ...linkform, image: secure_url, cloudinary_id: public_id });
      setImg(secure_url);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const { name, bio, image, cloudinary_id } = linkform;
  const onSubmit = () => {
    if (name == "" || bio == "" || image == "") {
      alert("Kindly fill all the details");
    } else if (links.length == 0) {
      if (link.linkName === "" || link.linkURL === "") {
        alert("Kindly add atleast one link");
      }
    } else {
      addlinks({
        name,
        bio,
        image,
        links,
        cloudinary_id,
      });
      console.log("info: ", linkform, links);
      alert("Links added successfully");
      navigate('/mylinks');
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
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={imageAlert}
          onClose={() => setImageAlert(false)}
        >
          {uploading ? (
            <Alert severity="info">Image is being uploaded</Alert>
          ) : (
            <Alert severity="success">Image uploaded</Alert>
          )}
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
          <Grid item sx={{ width: { md: "30%", xs: "50%" } }}>
            <Card
              style={{
                height: "4rem",
                width: "4rem",
                borderRadius: "5rem",
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "dark grey",
                display: "flex",
              }}
            >
              {linkform?.image !== "" ? (
                <img src={img} style={{ width: "100%" }} alt={user} />
              ) : (
                <Input
                  type="file"
                  id="image"
                  inputProps={{ accept: "image/*" }}
                  disableUnderline
                  onChange={(e) => onImgChangePhoto(e)}
                />
              )}
            </Card>
            {img === "" ? (
              <Button
                onClick={() => onUploadPhoto()}
                sx={{ padding: 0, color: "#c80078" }}
              >
                <Typography sx={{ textTransform: "none", fontSize: 12 }}>
                  Upload Photo
                </Typography>
              </Button>
            ) : null}
          </Grid>

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
            <Grid
              item
              sx={{
                backgroundColor: "#FFD130",
                opacity: "70%",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                textAlign: "center",
              }}
            >
              <Typography variant="content">{link?.linkName}</Typography>
            </Grid>

            <Grid
              item
              sx={{
                backgroundColor: "#FFD130",
                opacity: "70%",
                borderBottomLeftRadius: "25px",
                borderBottomRightRadius: "25px",
                textAlign: "center",
              }}
            >
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
