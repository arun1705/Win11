import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { FAB } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export const PrizeBreakUpScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.Container}>
        <Text style={styles.text}>
          Note: the actual prize money may be different than the prize money
          mentioned below if there is a tie for any of the winning position or
          if the contest does not fill{" "}
        </Text>
        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
          <Text style={styles.rank}>Rank 1</Text>
          <Text style={styles.amount}>10000</Text>
          <Image
            source={require("../../assets/trophy1.png")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1
  },
  rank: {
    fontSize:18
  },
  amount:{

  },
  text:{ fontSize: 15, fontWeight: "300", color: "gray" },
  Container:{ padding: 5, flex: 1 },
  imageStyle: {
    height: hp(20),
    width: hp(20)
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export default PrizeBreakUpScreen;
