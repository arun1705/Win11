import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const GKScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
        <Text>Select 1 Goal-Keeper</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default GKScreen;
