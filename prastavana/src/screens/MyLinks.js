import AuthContext from "../context/auth/authContext";
import React, { useState, useContext, useEffect } from "react";

const MyLinks = () => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated, user } = authContext;

  return (
    <>
      <h1 style={{ color: "white" }}>Welcome! {user && user.name}</h1>
    </>
  );
};

export default MyLinks;
