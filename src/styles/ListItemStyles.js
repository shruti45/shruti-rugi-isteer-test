import { StyleSheet } from "react-native";
import { IMAGE_BACKGROUND_COLOR } from "../utils/constants";
import colors from "../utils/colors";
const ListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.dividerColor,
    borderRadius: 3,
    alignItems: "center",
    padding: 10,
    marginBottom: 10
  },
  contentHolder: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  titleHolder: {
    flex: 1,
    paddingLeft: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  author: {
    fontSize: 12,
    marginTop: 10
  },
  imageHolder: {
    width: 90,
    height: 90,
    backgroundColor: IMAGE_BACKGROUND_COLOR
  },
  image: { width: "100%", height: "100%" },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  },
  buttonContainer: {
    height: 40,
    width: "100%",
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center"
  }
});
export default ListItemStyles;
