import { ADD_LINKS_SUCCESS, CLEAR_ERRORS, GET_LINKS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_LINKS:{
      return{
        ...state,
        links: action.payload,
        loading:false
      }
    }
  

    case ADD_LINKS_SUCCESS:
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
