import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { styles } from "../../shared/styles/MyInfoStyle";
import CustomButton from "../../components/Button";

const {
  Container,
  textInputStyle,
  cardContainer,
  cardInnerStyle,
  textInputBackgroundColor,
} = styles;

export const ChangePasswordScreen = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const passwordInputHandler = (password) => {
    if (password.length < 6) {
      console.log("password length is too short");
      setPassword(password);
    } else {
      setPassword(password);
      console.log("password length is good");
    }
  };

  const confirmPasswordInputHandler = (confirmPassword) => {
    if (confirmPassword !== password) {
      console.log("password did not match");
      setconfirmPassword(confirmPassword);
    } else {
      setconfirmPassword(confirmPassword);
      console.log("password matched");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={Container}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={cardContainer}>
            <Card>
              <View style={cardInnerStyle}>
                <View style={{ marginHorizontal: 15 }}>
                  <TextInput
                    mode="outlined"
                    label="Old password"
                    value={oldPassword}
                    onChangeText={(value) => setOldPassword(value)}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                    keyboardType="name-phone-pad"
                  />
                </View>

                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="Password"
                    value={password}
                    onChangeText={passwordInputHandler}
                    theme={{
                      colors: { text: "#000000", primary: "#000000" },
                    }}
                    style={textInputBackgroundColor}
                    secureTextEntry={true}
                  />
                </View>

                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="Confirm paswword"
                    value={confirmPassword}
                    onChangeText={confirmPasswordInputHandler}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                    keyboardType="email-address"
                    secureTextEntry={true}
                  />
                </View>

                <View style={textInputStyle}>
                  <CustomButton
                    title="Update Password"
                    onPress={() =>
                      alert(`Why you opened me? Go away, it's mine!`)
                    }
                    style={{ height: 40 }}
                    textStyle={{
                      fontSize: 18,
                    }}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ChangePasswordScreen;
