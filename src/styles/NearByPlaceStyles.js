import { StyleSheet } from "react-native";
import colors from "../utils/colors";
import { bold } from "ansi-colors";

const NearByPlaceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },

  subContainer: {
    flex: 1,
    padding: 10
  },

  buttonHolder: {
    marginTop: 20
  },
  buttonContainer: {
    height: 30,
    width: "100%",
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3
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
    paddingLeft: 10,
    fontFamily: "bold"
  },
  headerLogo: {
    height: 30,
    width: 30
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
  }
});

export default NearByPlaceStyles;
