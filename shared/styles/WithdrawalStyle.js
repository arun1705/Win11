import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { material, systemWeights } from "react-native-typography";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  card1TextStyle: {
    fontSize: 20,
    fontWeight: "300",
    marginHorizontal: 5,
  },
  card1UnderlinedTet: {
    fontSize: 15,

    color: "#1c5e74",
    textDecorationLine: "underline",
    paddingTop: 10,
    marginHorizontal: 5,
  },
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
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
  card2TextStyle: {
    fontSize: 15,
    fontWeight: "300",
    marginHorizontal: 5,
  },
  card3rowContentStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  cardContainer2: {
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rupeeText: {
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 15,
    marginHorizontal: 15,
  },
  textInputStyle: {
    paddingTop: 10,
    width: "70%",
  },
  cardContainer3: {
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  card3TextStyle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  radioButtonView: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 35,
    paddingTop: 10,
  },
  radioButtonContentStyle: {
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  radioButtonTextStyle: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  buttonStyle: {
    height: 40,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "700",
  },
});
