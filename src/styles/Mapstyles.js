import { StyleSheet, Dimensions } from "react-native";
import colors from "../utils/colors";
var { width, height } = Dimensions.get("window");
const Map = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  mapContainer: {
    flex: 1,
    width: width,
    height: height,
    alignItems: "center"
  },
  buttonHolder: {
    marginTop: 20
  },
  buttonContainer: {
    height: 50,
    width: "100%",
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center"
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.dividerColor
  },
  headerText: {
    color: colors.balck,
    fontSize: 20,
    paddingLeft: 10
  },
  headerLogo: {
    height: 25,
    width: 25
  },
  headerLogoContainer: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loaderText: {
    marginTop: 10,
    fontSize: 14,
    color: "black"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default Map;
