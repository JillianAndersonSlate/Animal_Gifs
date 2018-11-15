import { GET_GIFS_LOADING } from "../actions";

const initialState = {
  gifsLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GIFS_LOADING:
      return { ...state, gifsLoading: action.payload };

    default:
      return state;
  }
};
