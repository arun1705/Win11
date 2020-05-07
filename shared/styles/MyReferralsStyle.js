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
  titleTextStyle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
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
  shareTextStyle: {
    paddingTop: 10,
    textAlign: "center",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  codeTextStyle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
  },
  cardContainer2:{
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
  cardContainer2ContentStyle:{
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  iconStyle:{
    position: "absolute", right:2
  }
});
