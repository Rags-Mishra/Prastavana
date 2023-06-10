import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  IconButton,
  Input,
  Card,
  listItemIconClasses,
  CardMedia,
} from "@mui/material";
import StyledButton from "../components/StyledButton";
import { Divider } from "@mui/material";
import {
  AddLinkOutlined,
  ArrowBack,
  Camera,
  CameraAltRounded,
  Image,
} from "@mui/icons-material";
import AddLink from "../components/AddLink";
import { useNavigate, useLocation, Form } from "react-router-dom";

import AuthContext from "../context/auth/authContext";

import LinkformContext from "../context/linkform/linkformContext";
import axios from "axios";

const LinkForm = () => {
  let d = 0;

  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState([(prevItems) => [...prevItems, d++]]);
  let navigate = useNavigate();
  const location = useLocation();
  let link = location.state;

  const [linkform, setLinkform] = useState(
    //  client?.length == 0?
    {
      name: "",
      bio: "",
      image: "",
      links: [],
    }
  );

  const { name, bio, image, links } = linkform;

  const linkformContext = useContext(LinkformContext);
  const { addLinkform, getLinkforms, linkforms, updateLinkform } =
    linkformContext;
  const [file, setFile] = useState();
  const [filesign, setFileSign] = useState("");
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [uploadPercSign, setUploadPercSign] = useState(0);

  useEffect(() => {
    // !isAuthenticated ? navigate("/login") : null;
  }, [file]);
  //for photo upload
  let res;
  let p;
  let base64String;

  function imageUploaded(file) {
    var reader = new FileReader();
    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      console.log("b:", base64String);
      onUploadPhoto(base64String);
    };

    reader.readAsDataURL(file);
  }

  const onImgChangePhoto = async (e) => {
    e.preventDefault();
    p = e.target.files[0];
    imageUploaded(p);
  };

  const onUploadPhoto = async (p) => {
    let data = {};
    // e.preventDefault();
    data["upload_preset"] = "q2fmc4ar";
    data["cloud_name"] = "riyasharma";
    data["file"] = p;
    console.log("data:", data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    setLinkform({
      ...linkform,
      image: data,
    });

    // try {
    //   {
    //     p
    //       ? (res = await axios.post(
    //           "http://localhost:5000/upload",
    //           data,

    //           {
    //             // headers: {
    //             //   "Content-Type": "multipart/form-data",
    //             // },
    //             // onUploadProgress: (progressEvent) => {
    //             //   setUploadPercentage(
    //             //     parseInt(
    //             //       Math.round(
    //             //         (progressEvent.loaded * 100) / progressEvent.total
    //             //       )
    //             //     )
    //             //   );
    //             // },
    //           }
    //         ))
    //       : alert("No file selected");
    //     // Upload
    //   }

    //   // Clear percentage
    //   // setTimeout(() => setUploadPercentage(0), 10000);
    //   const { secure_url } = data;

    //   await setLinkform({ ...linkform, image: secure_url });
    // } catch (err) {
    //   console.log("Error", err);
    // }
  };
  const handleLinks = () => {
    links.push(link);
    setArr((prevItems) => [...prevItems, d++]);
  };
  const onChange = (m) => {
    setLinkform({ ...linkform, [m.target.name]: m.target.value });
  };

  const onSubmit = async (e) => {
    links.push(link);

    e.preventDefault();
    if (
      name?.length == 0 ||
      name?.length == undefined ||
      links?.length == 0 ||
      links?.length == undefined
    ) {
      alert("Please fill the required fields");
    } else {
      // client?._id?.length == undefined || client?._id?.length == 0?
      console.log("links are:", linkform);
      await addLinkform(linkform);
      // : await updateLinkform({
      //     _id: client?._id,
      //     name: name,
      //     aadhaar: aadhaar,
      //     pan: pan,
      //     contact: contact,
      //     email: email,
      //     address: address,
      //     amount: amount,
      //     paymentstatus: paymentstatus,
      //     signature: signature,
      //     photo: photo,
      //   });
      await navigate("/mylinks");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container className="register-main-container">
        <Grid item className="add-link-second-container">
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            <CardMedia
              // image={image}
              alt="Profile Image"
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
                id="customFile"
                onChange={onImgChangePhoto}
                name="image"
              ></Input>
            </CardMedia>
            <Grid item style={{ marginLeft: "15%" }}>
              <Grid
                item
                className="input-container"
                style={{ marginTop: "5%", borderRadius: 0 }}
              >
                <Input
                  id="name"
                  label="name"
                  name="name"
                  type="text"
                  disableUnderline
                  placeholder={"Your Name"}
                  value={name}
                  onChange={onChange}
                  style={{ fontSize: "small", paddingRight: "5%" }}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                className="input-container"
                style={{ marginTop: "5%", borderRadius: 0 }}
              >
                <Input
                  id="bio"
                  label="bio"
                  name="bio"
                  type="text"
                  disableUnderline
                  placeholder={"Add bio"}
                  value={bio}
                  onChange={onChange}
                  style={{ fontSize: "small", paddingRight: "5%" }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <p>Add Links</p>
          {/* {(arr?.length == undefined || arr?.length == 0) && <AddLink arr={0} />} */}
          {arr?.map((items) => (
            <AddLink arr={arr?.length - 1} />
          ))}
          <IconButton onClick={() => handleLinks()} style={{ marginTop: "3%" }}>
            <AddLinkOutlined style={{ fontSize: "large" }} />
            Add another link
          </IconButton>{" "}
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
    </form>
  );
};

export default LinkForm;
