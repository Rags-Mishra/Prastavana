import { AddLink } from "@mui/icons-material";
import AuthContext from "../context/auth/authContext";
import React, { useState, useContext, useEffect } from "react";

const MyLinks = () => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated, user,token } = authContext;
const User=JSON.parse(user);


  return (
    <>
      <h1 style={{ color: "white" }}>Welcome! {User&&User?.name}</h1>
    </>
  );
};

export default MyLinks;
