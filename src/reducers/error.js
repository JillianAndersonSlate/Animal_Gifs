import { GET_GIFS_ERROR } from "../actions";

const initialState = {
  gifsError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GIFS_ERROR:
      return { ...state, gifsError: Boolean(action.payload) };

    default:
      return state;
  }
};
