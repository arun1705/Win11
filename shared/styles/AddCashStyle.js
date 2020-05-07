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
  currentBalanceContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currentBalanceTextStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  dividerOuterStyle: { borderBottomColor: "black", borderBottomWidth: 1 },
  currentBalanceValueStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  addCashContainerStyle: { flexDirection: "row", alignItems: "center" },
  addCashTextStyle: {
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 15,
    marginHorizontal: 5,
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
  textInputStyle: { marginHorizontal: 5, paddingTop: 10, width: "90%" },

  dividerInnerStyle: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  amountToAddContainer: {
    marginHorizontal: 10,
    paddingTop: 10,
  },
  textRupeeStyle: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.headerBackgroundColor,
    marginLeft: 5,
  },
  rupeeButtonStyle: {
    height: 35,
    width: 100,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "black",
    marginHorizontal: 8,
  },
  promoCodeRowContent: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  customButtonStyle: {
    height: 40,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  customButtonTextStyle: {
    fontSize: 15,
    fontWeight: "700",
  },
});
