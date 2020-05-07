import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, TextInput, Switch } from "react-native-paper";
import { styles } from "../../shared/styles/WithdrawalStyle";
import RadioButton from "../../components/RadioButton";
import CustomButton from "../../components/Button";
const {
  Container,
  card1TextStyle,
  card1UnderlinedTet,
  cardContainer,
  cardInnerStyle,
  cardContainer2,
  card2TextStyle,
  cardContainer3,
  card3rowContentStyle,
  rupeeText,
  textInputStyle,
  card3TextStyle,
  radioButtonContentStyle,
  radioButtonTextStyle,
  radioButtonView,
  buttonStyle,
  buttonText,
} = styles;

const options = [
  {
    key: "payTm",
    text: "Paytm",
  },
  {
    key: "bank",
    text: "Bank",
  },
  {
    key: "upi",
    text: "UPI",
  },
];

export const WithdrawalScreen = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [isSwitchOn, _onToggleSwitch] = useState("false");

  const setEnteredAmountInputHandler = (enteredAmount) => {
    setEnteredAmount(enteredAmount.replace(/[^0-9/]/g, ""));
  };
  const switchHandler = (isSwitchOn) => {
    _onToggleSwitch({ isSwitchOn: !isSwitchOn });
  };
  return (
    <View style={Container}>
      <View style={cardContainer}>
        <Card>
          <View style={cardInnerStyle}>
            <View>
              <Text style={card1TextStyle}>
                If you want to change bank account details
              </Text>
              <Text
                style={card1UnderlinedTet}
                onPress={() => alert(" Button Pressed")}
              >
                Click here
              </Text>
            </View>
          </View>
        </Card>
      </View>

      <View style={cardContainer2}>
        <Card>
          <View style={cardInnerStyle}>
            <View>
              <Text style={card2TextStyle}>
                Maximum of Rs. 50000 per day in normal mode
              </Text>
              <Text style={card2TextStyle}>
                Maximum of Rs. 25000 per day in instant mode
              </Text>
              <Text style={card2TextStyle}>Maximum one withdrawal per day</Text>
            </View>
          </View>
        </Card>
      </View>

      <View style={cardContainer3}>
        <Card>
          <View style={cardInnerStyle}>
            <View style={card3rowContentStyle}>
              <Text style={rupeeText}>{"\u20B9"}</Text>
              <View style={textInputStyle}>
                <TextInput
                  mode="outlined"
                  placeholder="Amount"
                  label="Amount"
                  value={enteredAmount}
                  onChangeText={setEnteredAmountInputHandler}
                  theme={{ colors: { text: "#000000", primary: "#1c5e74" } }}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View>
              <Text style={card3TextStyle}>Preferred withdrawal method</Text>
            </View>
            <View style={radioButtonView}>
              <RadioButton options={options} />
            </View>
            <View style={radioButtonContentStyle}>
              <Text style={radioButtonTextStyle}>Want Instant Withdrawal</Text>
              <Switch
                value={isSwitchOn}
                onValueChange={switchHandler}
                style={{ marginVertical: 5 }}
              />
            </View>
            <CustomButton
              title="Withdraw"
              onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
              style={buttonStyle}
              textStyle={buttonText}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};

export default WithdrawalScreen;
