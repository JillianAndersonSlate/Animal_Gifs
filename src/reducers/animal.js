import { GET_GIFS_SUCCESS } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_GIFS_SUCCESS:
      return { ...state, [action.meta.animal]: action.payload };
    default:
      return state;
  }
};
