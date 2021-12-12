import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";

const rootReducer = combineReducers({
  // Reducers
  cardsReducer,
});

export default rootReducer;
