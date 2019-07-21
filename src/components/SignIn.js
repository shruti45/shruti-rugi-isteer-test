import React, { Component } from "react";
import { StatusBar, View, Text, ScrollView, AsyncStorage } from "react-native";
import styles from "../styles/SignInStyle";
import colors from "../utils/colors";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";
import config from "../utils/config";
import { StackActions, NavigationActions } from "react-navigation";

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "NearByPlaces" })]
});
// create a component
class SignIn extends Component {
  static navigationOptions = {
    title: " ",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null
    };
  }

  async componentDidMount() {
    await this._configureGoogleSignIn();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: config.webClientId,
      offlineAccess: false
    });
  }

  _signIn = async () => {
    const { navigate } = this.props.navigation;
    try {
      let res = await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      if (userInfo) {
        await AsyncStorage.setItem("USER", JSON.stringify(userInfo));
        this.props.navigation.dispatch(resetAction);
      }
    } catch (error) {
      alert(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={colors.white}
          hidden={false}
        />

        <GoogleSigninButton
          style={{ width: 212, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Auto}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

export default SignIn;
SignIn.propTypes = {};
