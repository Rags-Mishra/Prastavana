import React, { useState } from "react";
import {
  Grid,
  IconButton,
  Input,
  Card,
} from "@mui/material";
import StyledButton from "../components/StyledButton";
import {
  AddLinkOutlined,
 
} from "@mui/icons-material";
import AddLink from "../components/AddLink";
import { useNavigate } from "react-router-dom";
import '../styles/linkform.css';
const LinkForm = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState([]);
  const handleLinks = () => {
    setArr((prevItems) => [...prevItems, 1]);
  };
  return (
    <Grid container className="register-main-container">
      <Grid
        item
        className="add-link-second-container"
      >
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "5%",
            marginBottom: "5%",
            
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
              inputProps={{ accept: "image/*" }}
              disableUnderline
            />
          </Card>
          <Grid item style={{marginLeft:'5%'}}>
            <Grid item className="input-container" style={{ marginTop: "5%",borderRadius:0 }}>
              <Input
                disableUnderline
                placeholder={"Your Name"}
                style={{ fontSize: "small", paddingRight: "5%" }}
                fullWidth
              />
            </Grid>
            <Grid item className="input-container" style={{ marginTop: "5%",borderRadius:0 }}>
              <Input
                disableUnderline
                placeholder={"Add bio"}
                style={{ fontSize: "small", paddingRight: "5%" }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <p>Add Links</p>
        <AddLink />
        {arr?.map((items) => (
          <AddLink />
        ))}
        <IconButton onClick={() => handleLinks()} style={{ marginTop: "3%" }}>
          <AddLinkOutlined style={{ fontSize: "large" }} />
        </IconButton> Add another link
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
        >
          Create
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default LinkForm;
