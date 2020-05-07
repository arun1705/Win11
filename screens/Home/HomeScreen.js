import React from "react";
import { Text, View,StyleSheet } from "react-native";

export const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Home Screen!</Text>
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

export default HomeScreen;
