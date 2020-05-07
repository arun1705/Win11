import React from "react";
import { Text, View,StyleSheet } from "react-native";

export const NotificationsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Notification Screen!</Text>
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

export default NotificationsScreen;
