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
  textStyle: {
    textAlign: "center",
    fontSize: 15,
    color: "#696969",
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
  textInputStyle:{
    marginHorizontal: 5 
  },
  textInputSpace:{
    marginVertical: 5 
  }
});
