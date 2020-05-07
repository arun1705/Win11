import React from "react";
import { Text, View,StyleSheet } from "react-native";

export const PGScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The PG Screen!</Text>
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

export default PGScreen;
