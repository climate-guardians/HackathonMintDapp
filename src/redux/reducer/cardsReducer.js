import * as actionTypes from "../actions/actionTypes";

export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_ALL_CARDS:
      return action.payload;
    default:
      return state;
  }
}
