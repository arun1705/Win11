import React from "react";
import { Text, View,StyleSheet } from "react-native";

export const SGScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The SG Screen!</Text>
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

export default SGScreen;
