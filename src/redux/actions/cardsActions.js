import * as actionTypes from "./actionTypes";

export function getCardsSuccess(cards) {
  return {
    type: actionTypes.GET_ALL_CARDS,
    payload: cards,
  };
}

// todo replace with plants meta data
export function getCards() {
  return function (dispatch) {
    let url = "https://royaleapi.github.io/cr-api-data/json/cards.json";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCardsSuccess(result)));
  };
}
