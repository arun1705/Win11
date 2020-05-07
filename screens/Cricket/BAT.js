import React from "react";
import { Text, View,StyleSheet } from "react-native";

export const BATScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The BAT Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BATScreen;
