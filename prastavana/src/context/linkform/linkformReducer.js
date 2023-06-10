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

export default (state, action) => {
  switch (action.type) {
    case GET_LINKFORMS:
      return {
        ...state,
        linkforms: action.payload,
        loading: false,
      };
    case ADD_LINKFORM:
      return {
        ...state,
        linkforms: action.payload,
        ...state.linkforms,
        loading: false,
      };
    case UPDATE_LINKFORM:
      return {
        ...state,
        linkforms: state.linkforms.map((linkform) =>
          linkform._id === action.payload._id ? action.payload : linkform
        ),
        loading: false,
      };
    case DELETE_LINKFORM:
      return {
        ...state,
        linkforms: state.linkforms.filter(
          (linkform) => linkform._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_LINKFORMS:
      return {
        ...state,
        linkforms: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_LINKFORMS:
      return {
        ...state,
        filtered: state.linkforms.filter((linkform) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return linkform.address.match(regex) || linkform.pincode.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case LINKFORM_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
