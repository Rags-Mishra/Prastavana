import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Divider, Grid, Input } from "@mui/material";

const AddLink = (arr) => {
  let navigate = useNavigate();

  const [links, setLinks] = useState([]);
  const [linknamee, setLinkname] = useState("");

  const [linkurll, setLinkurl] = useState("");

  let d = 0;
  const [record, setRecord] = useState({
    linkname: "",
    linkurl: "",
  });

  const { linkname, linkurl } = record;
  useEffect(() => {}, [record, linkname, linknamee, linkurll]);
  const sendData = (l) => {
    record["linkurl"] = l;
    navigate("/linkform", {
      state: record,
    });
  };
  const onChange = async (m) => {
    await setRecord({ ...record, [m.target.name]: m.target.value });

    if (m.target.name == "linkurl") {
      sendData(m.target.value);
    }
  };
  return (
    <>
      <Grid
        container
        className="add-link-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Grid item>
          <Input
            id="linkname"
            label="linkname"
            name="linkname"
            type="text"
            required
            variant="outlined"
            fullWidth={true}
            placeholder={"Handle Name (My Instagram)"}
            value={linkname}
            onChange={onChange}
            style={{ fontSize: "small", width: "14rem", marginLeft: "3%" }}
            disableUnderline
          />
        </Grid>
        <Divider />
        <Grid item>
          <Input
            id="linkurl"
            label="linkurl"
            name="linkurl"
            type="text"
            required
            variant="outlined"
            fullWidth={true}
            placeholder={"Handle Link"}
            value={linkurl}
            onChange={onChange}
            style={{ fontSize: "small", width: "14rem", marginLeft: "3%" }}
            disableUnderline
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddLink;
