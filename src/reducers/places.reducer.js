import * as placeActions from "../actions/places.actions";

const places = (
  state = {
    loading: false,
    nearByPlaces: null,
    status: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case placeActions.GET_NEAR_BY_PLACES_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    }
    case placeActions.GET_NEAR_BY_PLACES_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        nearByPlaces: action.nearByPlaces
      });
    }
    case placeActions.GGET_NEAR_BY_PLACES_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        error: action.error
      });
    }
    case placeActions.CLEAR_NEAR_BY_PLACES: {
      return Object.assign({}, state, {
        nearByPlaces: null
      });
    }
    default:
      return state;
  }
};
export default places;
