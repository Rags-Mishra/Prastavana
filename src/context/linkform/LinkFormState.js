import { useContext, useReducer, useState } from "react";
import axios from "axios";
import LinkFormContext from "./linkFormContext";
import linkFormReducer from "./linkFormReducer";
import { ADD_LINKS_SUCCESS, GET_LINKS, CLEAR_ERRORS } from "../types";
import AuthContext from "../auth/authContext";
let url = process.env.REACT_APP_API_URL;
console.log("url: ",url);
console.log("url: ", url);
const LinkFormState = (props) => {
  const authContext=useContext(AuthContext);
  const{user}=authContext;
  const initialState = {
    linkform: null,
    loading: true,
    error: null,
    links:null,
  };

  const [state, dispatch] = useReducer(linkFormReducer, initialState);

  //Get links
  const getLinks=async ()=>{
    try {
      const res=await axios.get(`${url}/api/linkform/${JSON.parse(user)._id}`)
      console.log("links data: ",res.data)
      dispatch({
        type:GET_LINKS,
        payload:res.data,
      })
    } catch (error) {
      alert("No account found")
      console.log(error);
    }
  }
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
        links: state.links,
        error: state.error,
        addlinks,
        clearErrors,
        getLinks
      }}
    >
      {props.children}
    </LinkFormContext.Provider>
  );
};

export default LinkFormState;
