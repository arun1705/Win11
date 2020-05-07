import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function RadioButton(props) {
  const [value, setValue] = useState(null);
  const { options } = props;

  return (
    <View>
      {options.map((item) => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                setValue(item.key);
              }}
            >
              {value === item.key && <View style={styles.checkedCircle} />}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#1c5e74",
  },
  text:{
      fontSize:18,
      fontWeight:"400"
  }
});
