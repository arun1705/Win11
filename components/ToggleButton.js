import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import Colors from "../shared/const/Colors";
import { ToggleButton } from "react-native-paper";

export default function ToggleButtonComponent({}) {
  const [selected, setSelected] = useState("");
  return (
    <ToggleButton.Group
      onValueChange={(value) => setSelected(value)}
      value={selected}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ToggleButton icon="gender-male" value="left" />
        <ToggleButton icon="gender-female" value="right" />
      </View>
    </ToggleButton.Group>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: Colors.headerBackgroundColor,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
