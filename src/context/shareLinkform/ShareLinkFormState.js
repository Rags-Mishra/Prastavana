import { useContext, useReducer, useState } from "react";
import axios from "axios";
import ShareLinkFormContext from "./shareLinkFormContext";
import shareLinkFormReducer from "./shareLinkFormReducer";
import { ADD_LINKS_SUCCESS, GET_LINKS, CLEAR_ERRORS } from "../types";
let url = process.env.REACT_APP_API_URL;
console.log("url: ",url);
console.log("url: ", url);
const ShareLinkFormState = (props) => {
  const initialState = {
    loading: true,
    error: null,
    links:null,
  };

  const [state, dispatch] = useReducer(shareLinkFormReducer, initialState);

  //Get links
  const getLinksToShare=async (id)=>{
    try {
      const res=await axios.get(`${url}/api/linkform/${id}`)
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

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <ShareLinkFormContext.Provider
      value={{
        loading: state.loading,
        links: state.links,
        error: state.error,
        clearErrors,
        getLinksToShare
      }}
    >
      {props.children}
    </ShareLinkFormContext.Provider>
  );
};

export default ShareLinkFormState;
