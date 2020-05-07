import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Card, Switch, TextInput } from "react-native-paper";
import { styles } from "../../shared/styles/CreateContestStyles";

const { Container, textInputStyle, cardContainer, cardInnerStyle,textInputSpace } = styles;

export const CreateContestScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [size, setSize] = useState("");
  const [isSwitchOn, _onToggleSwitch] = useState("false");

  const nameInputHandler = (inputText) => {};
  const amoutInputHandler = (amount) => {};
  const sizeInputHandler = (size) => {};
  const switchHandler = (isSwitchOn) => {};
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={Container}>
        <View style={cardContainer}>
          <Card>
            <View style={cardInnerStyle}>
              <View style={textInputStyle}>
                <TextInput
                  mode="outlined"
                  label="Contest name"
                  value={name}
                  onChangeText={nameInputHandler}
                  theme={{ colors: { text: "#000000", primary: "#000000" } }}
                  style={{ backgroundColor: "#fff" }}
                />
                <Text style={textInputSpace}>
                  Give Contest a name(optional)
                </Text>
              </View>
              <View style={textInputStyle}>
                <TextInput
                  mode="outlined"
                  label="Winning amount(Rs)"
                  value={amount}
                  onChangeText={amoutInputHandler}
                  theme={{ colors: { text: "#000000", primary: "#000000" } }}
                  style={{ backgroundColor: "#fff" }}
                />
                <Text style={textInputSpace}>min(0)</Text>
              </View>
              <View style={textInputStyle}>
                <TextInput
                  mode="outlined"
                  label="Contest Size"
                  value={size}
                  onChangeText={sizeInputHandler}
                  theme={{ colors: { text: "#000000", primary: "#000000" } }}
                  style={{ backgroundColor: "#fff" }}
                />
                <Text style={textInputSpace}>min(2)</Text>
              </View>
              <View
                style={{
                  marginHorizontal: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ marginVertical: 15 }}>
                  Allow friends to join with multiple teams
                </Text>
                <Switch
                  value={isSwitchOn}
                  onValueChange={switchHandler}
                  style={textInputSpace}
                />
              </View>
            </View>
          </Card>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateContestScreen;
