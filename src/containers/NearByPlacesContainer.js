import { connect } from "react-redux";
import NearByPlaces from "../components/NearByPlaces";
import { getNearByPlaces, cleartopHeadlines } from "../actions/places.actions";

const mapStateToProps = state => {
  return {
    loading: state.places.loading,
    error: state.places.error,
    status: state.places.status,
    nearByPlaces: state.places.nearByPlaces
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNearByPlaces: (lat,lang) => {
      dispatch(getNearByPlaces(lat,lang));
    },
    cleartopHeadlines: () => {
      dispatch(cleartopHeadlines());
    }

  };
};

const NearByPlacesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NearByPlaces);
export default NearByPlacesContainer;