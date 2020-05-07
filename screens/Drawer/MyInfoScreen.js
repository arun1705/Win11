import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Card, TextInput} from "react-native-paper";
import { styles } from "../../shared/styles/MyInfoStyle";
import CustomButton from "../../components/Button";

const {
  Container,
  textInputStyle,
  textInputPasswordStyle,
  cardContainer,
  cardInnerStyle,
  textInputBackgroundColor,
  textChangePasswordStyle,
} = styles;

export const MyInfoScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [country, setCountry] = useState("");

  const nameInputHandler = (name) => {
    setName(name.replace(/[^A-Za-z]/gi, ""));
  };
  const emailIdInputHandler = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      console.log("Email is Not Correct");
      setEmail(email);
      return false;
    } else {
      setEmail(email);
      console.log("Email is Correct");
    }
  };
  const passwordInputHandler = (password) => {
    if (password.length < 6) {
      console.log("password length is too short");
      setPassword(password);
    } else {
      setPassword(password);
      console.log("password length is good");
    }
  };
  const dobInputHandler = (dob) => {};
  const mobileNoInputHandler = (mobileNo) => {
    setMobileNo(mobileNo.replace(/[^0-9/]/g, ""));
  };
  const addressLine1InputHandler = (addressline1) => {};
  const addressLine2InputHandler = (addressline2) => {};
  const cityInputHandler = (city) => {
    setCity(city.replace(/[^A-Za-z]/gi, ""));
  };
  const pinCodeInputHandler = (pinCode) => {
    setPinCode(pinCode.replace(/[^0-9/]/g, ""));
  };
  const countryInputHandler = (country) => {};
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
                    label="Name"
                    value={name}
                    onChangeText={nameInputHandler}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                    keyboardType="name-phone-pad"
                  />
                </View>
                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="Email ID"
                    value={email}
                    onChangeText={emailIdInputHandler}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                    keyboardType="email-address"
                  />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={textInputPasswordStyle}>
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
                  <Text
                    style={textChangePasswordStyle}
                    onPress={() =>
                      navigation.navigate("UserAccountStack", {
                        screen: "ChangePassword",
                      })
                    }
                  >
                    change password
                  </Text>
                </View>
                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="Date Of Birth"
                    value={dob}
                    onChangeText={dobInputHandler}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                  />
                </View>
                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="Mobile No"
                    value={mobileNo}
                    onChangeText={mobileNoInputHandler}
                    maxLength={10}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                    keyboardType="numeric"
                  />
                </View>
                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="Address Line 1"
                    multiline
                    value={addressLine1}
                    onChangeText={(value) => setAddressLine1(value)}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                  />
                </View>
                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="Address Line 2"
                    multiline
                    value={addressLine2}
                    onChangeText={(value) => setAddressLine2(value)}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                  />
                </View>
                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="City"
                    value={city}
                    onChangeText={cityInputHandler}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                  />
                </View>
                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="PinCode"
                    value={pinCode}
                    onChangeText={pinCodeInputHandler}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                    keyboardType="numeric"
                  />
                </View>
                <View style={textInputStyle}>
                  <TextInput
                    mode="outlined"
                    label="Country"
                    value={country}
                    onChangeText={countryInputHandler}
                    theme={{ colors: { text: "#000000", primary: "#000000" } }}
                    style={textInputBackgroundColor}
                  />
                </View>
                <View style={textInputStyle}>
                  {/* <Button
                    mode="contained"
                    onPress={() => alert(" Button Pressed")}
                    labelStyle={{ fontSize: 18 }}
                    color={Colors.headerBackgroundColor}
                  >
                    Update Profile
                  </Button> */}
                  <CustomButton
                    title="Update Profile"
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

export default MyInfoScreen;
