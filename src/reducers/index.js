import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import animalReducer from "./animal";
import errorReducer from "./error";
import loadingReducer from "./loading";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const rootReducer = combineReducers({
  animal: animalReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default createStoreWithMiddleware(rootReducer, {});
