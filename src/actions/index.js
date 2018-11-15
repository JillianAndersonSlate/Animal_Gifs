const API_KEY = "D31L73ySufmBJ3YBDkmbVnH9TuWXuvMa";
const ROOT_URL = `https://api.giphy.com/v1/gifs/search?&api_key=${API_KEY}&q=`;

export const GET_GIFS_LOADING = "GET_GIFS_LOADING";
export const GET_GIFS_SUCCESS = "GET_GIFS_SUCCESS";
export const GET_GIFS_ERROR = "GET_GIFS_ERROR";

export const getGifs = selectedAnimal => dispatch => {
  dispatch({
    type: GET_GIFS_ERROR,
    payload: ""
  });
  dispatch({
    type: GET_GIFS_LOADING,
    payload: true
  });

  return fetch(`${ROOT_URL}${selectedAnimal}`)
    .then(response => response.json())
    .then(data => {
      // data will be an array with gif objects https://developers.giphy.com/docs/#gif-object
      dispatch({
        type: GET_GIFS_SUCCESS,
        payload: data.data,
        meta: { animal: selectedAnimal }
      });
      dispatch({
        type: GET_GIFS_LOADING,
        payload: false
      });
    })
    .catch(error => {
      dispatch({
        type: GET_GIFS_ERROR,
        payload: error
      });
      dispatch({
        type: GET_GIFS_LOADING,
        payload: false
      });
    });
};
