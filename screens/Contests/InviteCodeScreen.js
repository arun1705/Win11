import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Card, Button, TextInput } from "react-native-paper";
import { styles } from "../../shared/styles/InviteCodeStyles";
import Colors from "../../shared/const/Colors";
import CustomButton from "../../components/Button";

const { Container, textStyle, cardContainer, cardInnerStyle } = styles;

export const InviteCodeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const numberInputHandler = (inputText) => {};
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={Container}>
        <View style={{ paddingTop: 25 }}>
          <Text style={textStyle}>
            If you have a contest invite code,enter it and join
          </Text>
        </View>
        <View style={cardContainer}>
          <Card>
            <View style={cardInnerStyle}>
              <TextInput
                mode="outlined"
                label="Invite code"
                value={text}
                onChangeText={(text) => setText(text)}
                theme={{ colors: { text: "#000000", primary: "#000000" } }}
              />
            </View>
            <View style={cardInnerStyle}>
              {/* <Button
                mode="contained"
                onPress={() => alert(" Button Pressed")}
                labelStyle={{ fontSize: 18 }}
                color={Colors.headerBackgroundColor}
              >
                Join This Contest
              </Button> */}
              <CustomButton
                title="Join This Contest"
                onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
                style={{}}
                textStyle={{
                  fontSize: 18,
                }}
              />
            </View>
          </Card>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InviteCodeScreen;
