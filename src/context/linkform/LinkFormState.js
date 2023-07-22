import { useContext, useReducer, useState } from "react";
import axios from "axios";
import LinkFormContext from "./linkFormContext";
import linkFormReducer from "./linkFormReducer";
import { ADD_LINKS_SUCCESS, GET_LINKS, CLEAR_ERRORS } from "../types";
import AuthContext from "../auth/authContext";
let url = "http://localhost:5000";
console.log("url: ", url);
const LinkFormState = (props) => {
  const authContext=useContext(AuthContext);
  const{user}=authContext;
  const initialState = {
    linkform: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(linkFormReducer, initialState);

  // Add Links
  const addlinks = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${url}/api/linkform/${JSON.parse(user)._id}`, formData, config);
      dispatch({
        type: ADD_LINKS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      alert("Incorrect Information");
    }
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <LinkFormContext.Provider
      value={{
        loading: state.loading,
        linkform: state.linkform,
        error: state.error,
        addlinks,
        clearErrors,
      }}
    >
      {props.children}
    </LinkFormContext.Provider>
  );
};

export default LinkFormState;
