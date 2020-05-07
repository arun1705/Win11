import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Dimensions } from "react-native";

export default function CreateTeamHeader({ navigation, title }) {
  return (
    <View style={styles.header}>
      <MaterialCommunityIcons
        name="arrow-left"
        color="#fff"
        onPress={() => navigation.goBack()}
        size={26}
        style={styles.iconLeft}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
  iconLeft: {
    position: "absolute",
    left: 16,
  },
});
