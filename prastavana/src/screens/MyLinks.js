import AuthContext from "../context/auth/authContext";
import React, { useState, useContext, useEffect } from "react";
import LinkformContext from "../context/linkform/linkformContext";
let l;
const MyLinks = () => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated, user, loadUser } =
    authContext;
  const linkformContext = useContext(LinkformContext);
  const { addLinkform, getLinkforms, linkforms, updateLinkform } =
    linkformContext;
  useEffect(() => {
    getLinkforms();
  }, []);

  return (
    <>
      <h1 style={{ color: "white" }}>Welcome! {user && user.name}</h1>
    </>
  );
};

export default MyLinks;
