import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import Header from "../coreComponents/Header";
import backButton from "../images/backarrow_blue.png";
import colors from "../utils/colors";
import styles from "../styles/Mapstyles";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default class Map extends React.Component {
  static navigationOptions = {
    title: " ",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      placeDetails: null,
      region: null
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    console.log(
      "placeDetails===prams",
      params.placeDetails && params.placeDetails.geometry.location.lng
    );
    this.setState({
      placeDetails: params.placeDetails,
      region: {
        latitude: parseFloat(
          params.placeDetails && params.placeDetails.geometry.location.lat
        ),
        longitude: parseFloat(
          params.placeDetails && params.placeDetails.geometry.location.lng
        ),
        latitudeDelta: 0.0462,
        longitudeDelta: 0.0261
      }
    });
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    console.log(
      "placeDetails===",
      this.state.placeDetails && this.state.placeDetails.geometry.location.lng
    );
    console.log("region===", this.state.region);

    let { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={colors.white}
          hidden={true}
        />
        <Header backgroundColor={"transparent"}>
          <Header.LeftHeaderElem>
            <TouchableOpacity
              style={styles.headerLogoContainer}
              onPress={() => goBack()}
            >
              <Image source={backButton} style={styles.headerLogo} />
            </TouchableOpacity>
          </Header.LeftHeaderElem>
        </Header>
        <View style={styles.mapContainer}>
          {this.state.placeDetails && this.state.placeDetails.geometry && (
            <MapView
              style={styles.map}
              showsUserLocation={true}
              showsMyLocationButton={true}
              zoomEnabled={true}
              region={this.state.region}
              // onRegionChange={this.onRegionChange}
            >
              <Marker
                coordinate={{
                  latitude: this.state.placeDetails.geometry.location.lat,
                  longitude: this.state.placeDetails.geometry.location.lng
                }}
              />
            </MapView>
          )}
        </View>
      </View>
    );
  }
}
