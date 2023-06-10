import { useReducer, useContext } from "react";
import axios from "axios";
import LinkformContext from "./linkformContext";
import linkformReducer from "./linkformReducer";
import AuthContext from "../auth/authContext";

import {
  GET_LINKFORMS,
  ADD_LINKFORM,
  DELETE_LINKFORM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LINKFORM,
  FILTER_LINKFORMS,
  CLEAR_FILTER,
  LINKFORM_ERROR,
  CLEAR_LINKFORMS,
} from "../types";

let url = "http://localhost:5000";

const LinkformState = (props) => {
  const initialState = {
    linkforms: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(linkformReducer, initialState);
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const getLinkforms = async () => {
    try {
      const res = await axios.get(`${url}/api/linkform/${user?._id}`);

      dispatch({
        type: GET_LINKFORMS,
        payload: res.data,
      });
      // return res.data;
    } catch (err) {
      // dispatch({
      //     type: LINKFORM_ERROR,
      //     payload: err.response.msg
      // });
      return err;
    }
  };

  // Add Contact
  const addLinkform = async (linkform) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const res = await axios.post(
        `${url}/api/linkform/${user?._id}`,
        linkform,
        config
      );
      dispatch({
        type: ADD_LINKFORM,
        payload: res?.data,
      });
    } catch (err) {
      dispatch({
        type: LINKFORM_ERROR,
        payload: err?.response?.msg,
      });
    }
  };

  // Delete Contact
  const deleteLinkform = async (id) => {
    try {
      await axios.delete(`${url}/api/linkform/${id}`);

      dispatch({
        type: DELETE_LINKFORM,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LINKFORM_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update Contact
  const updateLinkform = async (linkform) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `${url}/api/linkform/${linkform._id}`,
        linkform,
        config
      );

      dispatch({
        type: UPDATE_LINKFORM,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LINKFORM_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear Contacts
  const clearLinkforms = () => {
    dispatch({ type: CLEAR_LINKFORMS });
  };

  // Set Current Contact
  const setCurrent = (linkform) => {
    dispatch({ type: SET_CURRENT, payload: linkform });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contacts
  const filterLinkforms = (text) => {
    dispatch({ type: FILTER_LINKFORMS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <LinkformContext.Provider
      value={{
        linkforms: state.linkforms,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addLinkform,
        deleteLinkform,
        setCurrent,
        clearCurrent,
        updateLinkform,
        filterLinkforms,
        clearFilter,
        getLinkforms,
        clearLinkforms,
      }}
    >
      {props.children}
    </LinkformContext.Provider>
  );
};

export default LinkformState;
