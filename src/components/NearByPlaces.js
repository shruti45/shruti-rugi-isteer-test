//import libraries and files
import React, { Component } from "react";
import {
  StatusBar,
  View,
  Text,
  AsyncStorage,
  PermissionsAndroid,
  FlatList,
  ActivityIndicator
} from "react-native";
import Button from "../coreComponents/Button";
import styles from "../styles/NearByPlaceStyles";
import { GoogleSignin } from "react-native-google-signin";
import Geolocation from "@react-native-community/geolocation";
import Header from "../coreComponents/Header";
import colors from "../utils/colors";
import ListItem from "../coreComponents/ListItem";
import { LOG_OUT, LOADING, NEAR_BY_PLACES } from "../utils/constants";

//Component
class NearByPlaces extends Component {
  static navigationOptions = {
    title: " ",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null,
      location: null,
      locationDetails: null,
      lat: null,
      lng: null,
      data: null,
      loader: true
    };
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ userInfo: params.userInfo });
    await this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Example App",
          message: "Example App access to your location "
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          this.props.getNearByPlaces(
            position.coords.latitude,
            position.coords.longitude
          );
        });
      } else {
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  _signOut = async () => {
    const { navigate } = this.props.navigation;
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ userInfo: null, error: null });
      AsyncStorage.removeItem("USER");
      navigate("Launcher");
    } catch (error) {
      this.setState({
        error
      });
    }
  };

  navigateToMap(item) {
    const { navigate } = this.props.navigation;
    navigate("Map", { placeDetails: item });
  }

  renderItem = item => {
    return (
      <ListItem
        title={item.name}
        rating={item.rating}
        image={item.icon}
        type={item.types}
        onPress={() => this.navigateToMap(item)}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={colors.white}
          hidden={false}
        />
        <Header backgroundColor={colors.white}>
          <Header.LeftHeaderElem>
            <Text style={styles.headerText}>{NEAR_BY_PLACES}</Text>
          </Header.LeftHeaderElem>

          <Header.RightHeaderElem>
            <Button
              container={styles.buttonContainer}
              textStyle={styles.buttonLabel}
              onPress={this._signOut}
              title={LOG_OUT}
            />
          </Header.RightHeaderElem>
        </Header>
        <View style={styles.divider} />
        {this.props.loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={"large"} color={"#A9A9A9"} />
            <Text style={styles.loaderText}>{LOADING}</Text>
          </View>
        )}

        <View style={styles.subContainer}>
          <FlatList
            data={this.props.nearByPlaces}
            keyExtractor={(item, index) => item.title}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </View>
      </View>
    );
  }
}

//To make this component available to the app
export default NearByPlaces;
