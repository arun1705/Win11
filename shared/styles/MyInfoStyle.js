import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../const/Colors";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  textInputStyle: { marginHorizontal: 15, paddingTop: 10 },
  textInputPasswordStyle: {
    marginHorizontal: 15,
    paddingTop: 10,
    width: "60%",
  },
  textChangePasswordStyle: {
    fontSize: 15,
    width: "30%",
    color: Colors.headerBackgroundColor,
    textDecorationLine: "underline",
    paddingTop: 15,
  },
  cardContainer: {
    marginVertical: 20,
    marginHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardInnerStyle: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  textInputBackgroundColor: {
    backgroundColor: "#fff",
  },

  codeTextStyle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
  },
  cardContainer2: {
    marginHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
