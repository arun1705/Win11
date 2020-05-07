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
  balanceTextStyle: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    textTransform: "uppercase",
  },
  rupeeTextStyle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
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
  rowContentStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "300",
    textAlign: "left",
    textTransform: "uppercase",
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
  cardContainer2ContentStyle: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconStyle: {
    position: "absolute",
    right: 2,
  },
  cardContainer3: {
    marginVertical: 10,
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
  buttonStyle:{
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  dividerStyle:{
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  minRedeemTextStyle:    {
    paddingTop: 15,
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    textTransform: "none",
  },
  cardTextStyle:{
    fontSize: 20, fontWeight: "300" 
  }
});
