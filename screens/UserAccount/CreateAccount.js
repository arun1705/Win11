import React from "react";
import { Text, View,StyleSheet } from "react-native";

export const CreateAccountScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Create Account Screen!</Text>
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

export default CreateAccountScreen;
