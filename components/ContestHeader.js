import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import { styles } from "../shared/styles/ContestsStyle";

const {
  header,
  headerText,
  iconLeft,
  iconRight
} = styles;

export default function ContestHeader({ navigation, title }) {
  return (
    <View style={header}>
      <MaterialCommunityIcons
        name="arrow-left"
        color="#fff"
        onPress={() => navigation.pop()}
        size={26}
        style={iconLeft}
      />
      <MaterialCommunityIcons
        name="wallet"
        color="#fff"
        onPress={() => navigation.navigate("My Balance")}
        size={26}
        style={iconRight}
      />
      <Text style={headerText}>{title}</Text>
    </View>
  );
}




