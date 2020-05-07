import React from "react";
import { Text, View,StyleSheet } from "react-native";

export const WKScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The WK Screen!</Text>
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

export default WKScreen;
