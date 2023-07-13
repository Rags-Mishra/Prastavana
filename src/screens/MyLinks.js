import AuthContext from "../context/auth/authContext";
import React, { useState, useContext, useEffect } from "react";

const MyLinks = () => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated, user } = authContext;
console.log(user);
  return (
    <>
      <h1 style={{ color: "white" }}>Welcome! {user._id}</h1>
    </>
  );
};

export default MyLinks;
