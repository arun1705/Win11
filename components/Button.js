import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Colors from "../shared/const/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
export default function CustomButton(props) {
  const {
    title = "Enter",
    style = {},
    textStyle = {},
    onPress,
    iconName,
  } = props;
  if (props.iconName) {
    return (
      <Icon.Button
        name={props.iconName}
        backgroundColor={Colors.headerBackgroundColor}
        onPress={onPress}
        style={{ justifyContent: "center" }}
      >
        <Text style={[styles.text, textStyle]}>{props.title}</Text>
      </Icon.Button>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.headerBackgroundColor
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
});
