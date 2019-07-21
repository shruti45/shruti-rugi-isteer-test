import { SUCCESS, REQUEST, ERROR, API_KEY } from "../utils/constants";
export const GET_NEAR_BY_PLACES_REQUEST = "GET_NEAR_BY_PLACES_REQUEST";
export const GET_NEAR_BY_PLACES_SUCCESS = "GET_NEAR_BY_PLACES_SUCCESS";
export const GGET_NEAR_BY_PLACES_FAILURE = "GGET_NEAR_BY_PLACES_FAILURE";

export const CLEAR_NEAR_BY_PLACES = "CLEAR_NEAR_BY_PLACES";

export function getNearByPlacesRequest() {
  return {
    type: GET_NEAR_BY_PLACES_REQUEST,
    status: REQUEST
  };
}
export function getNearByPlacesSuccess(nearByPlaces) {
  return {
    type: GET_NEAR_BY_PLACES_SUCCESS,
    status: SUCCESS,
    nearByPlaces
  };
}
export function getNearByPlacesFailure(error) {
  return {
    type: GGET_NEAR_BY_PLACES_FAILURE,
    status: ERROR,
    error
  };
}

export function getNearByPlaces(lat, lang) {
  return async (dispatch, getState, api) => {
    dispatch(getNearByPlacesRequest());
    try {
      const result = await api.get(
        `maps/api/place/nearbysearch/json?location=${lat},${lang}&radius=1500&type=restaurant&keyword=cruise&key=${API_KEY}`
      );
      const resultJson = await result.json();
      console.log("resultJson==", resultJson);
      dispatch(getNearByPlacesSuccess(resultJson.results));
    } catch (e) {
      console.log("resultJson==err", e);
      dispatch(getNearByPlacesFailure(e.message));
    }
  };
}

export function clearNearByPlaces(error) {
  return {
    type: CLEAR_NEAR_BY_PLACES
  };
}
