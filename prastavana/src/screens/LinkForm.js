import React, { useState } from "react";
import { Grid, IconButton, Input, Card } from "@mui/material";
import StyledButton from "../components/StyledButton";
import { Divider } from "@mui/material";
import { AddLinkOutlined, ArrowBack } from "@mui/icons-material";
import AddLink from "../components/AddLink";
import { useNavigate } from "react-router-dom";
const LinkForm = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Grid container className="register-main-container">
      <Grid item className="register-second-container" style={{ width: "40%" }}>
        <Grid
          container
          style={{
            backgroundColor: "pink",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card
            style={{
              height: "5rem",
              width: "5rem",
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
            ></Input>
          </Card>
          <Grid item style={{ marginLeft: "15%" }}>
            <Grid item className="input-container" style={{ marginTop: "5%" }}>
              <Input
                disableUnderline
                placeholder={"Your Name"}
                style={{ fontSize: "small", paddingRight: "5%" }}
                fullWidth
              />
            </Grid>
            <Grid item className="input-container" style={{ marginTop: "5%" }}>
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
        <AddLink/>
        {open ? <AddLink /> : null}
        <IconButton onClick={() => setOpen(true)}>
          <AddLinkOutlined />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default LinkForm;
