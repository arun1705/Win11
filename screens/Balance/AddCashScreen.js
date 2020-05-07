import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { styles } from "../../shared/styles/AddCashStyle";
import CustomButton from "../../components/Button";
const {
  Container,
  currentBalanceTextStyle,
  currentBalanceContainerStyle,
  cardContainer,
  cardInnerStyle,
  currentBalanceValueStyle,
  dividerOuterStyle,
  addCashContainerStyle,
  addCashTextStyle,
  textInputStyle,
  dividerInnerStyle,
  amountToAddContainer,
  textRupeeStyle,
  rupeeButtonStyle,
  promoCodeRowContent,
  customButtonStyle,
  customButtonTextStyle,
} = styles;

export const AddCashScreen = ({ navigation }) => {
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const setEnteredAmountInputHandler = (enteredAmount) => {
    setEnteredAmount(enteredAmount.replace(/[^0-9/]/g, ""));
  };

  return (
    <View style={Container}>
      <View style={currentBalanceContainerStyle}>
        <Text style={currentBalanceTextStyle}>Current Balance</Text>
        <Text style={currentBalanceValueStyle}>{"\u20B9"}0</Text>
      </View>
      <View style={dividerOuterStyle} />
      <View style={cardContainer}>
        <Card>
          <View style={cardInnerStyle}>
            <Text>Add cash to your account</Text>
            <View style={addCashContainerStyle}>
              <Text style={addCashTextStyle}>{"\u20B9"}</Text>
              <View style={textInputStyle}>
                <TextInput
                  mode="outlined"
                  placeholder="0"
                  value={enteredAmount}
                  onChangeText={setEnteredAmountInputHandler}
                  theme={{ colors: { text: "#000000", primary: "#1c5e74" } }}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={dividerInnerStyle} />
            <Text>Amount to add</Text>
            <View style={amountToAddContainer}>
              <View style={{ flexDirection: "row" }}>
                <Button
                  mode="contained"
                  onPress={() =>
                    alert(`Why you opened me? Go away, it's mine!`)
                  }
                  labelStyle={textRupeeStyle}
                  style={rupeeButtonStyle}
                >
                  {"\u20B9"} {"100"}
                </Button>
                <Button
                  mode="contained"
                  onPress={() =>
                    alert(`Why you opened me? Go away, it's mine!`)
                  }
                  labelStyle={textRupeeStyle}
                  style={rupeeButtonStyle}
                >
                  {"\u20B9"} {"200"}
                </Button>
                <Button
                  mode="contained"
                  onPress={() =>
                    alert(`Why you opened me? Go away, it's mine!`)
                  }
                  labelStyle={textRupeeStyle}
                  style={rupeeButtonStyle}
                >
                  {"\u20B9"} {"300"}
                </Button>
              </View>
            </View>
            <View style={dividerInnerStyle} />
            <Text>Apply Promo Code</Text>
            <View style={promoCodeRowContent}>
              <TextInput
                mode="outlined"
                label="Promo Code"
                value={promoCode}
                onChangeText={(value) => setPromoCode(value)}
                theme={{ colors: { text: "#000000", primary: "#1c5e74" } }}
                keyboardType="name-phone-pad"
              />
            </View>
            <CustomButton
              title="Add Cash"
              onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
              style={customButtonStyle}
              textStyle={customButtonTextStyle}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};
export default AddCashScreen;
