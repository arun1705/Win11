import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Platform,
} from "react-native";
import Colors from "../shared/const/Colors";
import { ToggleButton } from "react-native-paper";

export default function DatePicker({}) {
  const [stateDate, setDate] = useState(new Date(""));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  setDateHandler = (event, date) => {
    date = date || stateDate;
    setDate({ show: Platform.OS === "ios" ? true : false, date });
  };
  showHandler = (mode) => {
    setShow({ show: true, mode });
  };
  datepicker=()=>{
      this.show=('date')
  }
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
