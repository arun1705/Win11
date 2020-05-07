import React from "react";
import { Text, View } from "react-native";
import { Card, Button } from "react-native-paper";
import { styles } from "../../shared/styles/MyBalanceStyle";
import Colors from "../../shared/const/Colors";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ToolTipComp from "../../components/ToolTip";

const {
  Container,
  balanceTextStyle,
  rupeeTextStyle,
  cardContainer,
  cardInnerStyle,
  cardContainer2,
  cardContainer3,
  cardContainer2ContentStyle,
  iconStyle,
  buttonStyle,
  dividerStyle,
  textStyle,
  rowContentStyle,
  minRedeemTextStyle,
  cardTextStyle,
} = styles;

export const MyBalanceScreen = ({navigation}) => {
  return (
    <View style={Container}>
      <View style={cardContainer}>
        <Card>
          <View style={cardInnerStyle}>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={balanceTextStyle}>Total Balance</Text>
              <Text style={rupeeTextStyle}>{"\u20B9"} 20000</Text>
              <View
                style={{
                  marginVertical: 8,
                }}
              >
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate("AddCash")}
                  labelStyle={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: Colors.headerBackgroundColor,
                  }}
                  style={buttonStyle}
                >
                  Add Cash
                </Button>
              </View>
              <View style={dividerStyle} />
              <View style={rowContentStyle}>
                <Text style={textStyle}>Deposited</Text>
                <ToolTipComp title="Money Deposited by you that you can use to join any contests but can't withdraw" />
              </View>
              <View>
                <Text style={textStyle}>{"\u20B9"} 0</Text>
              </View>
              <View style={dividerStyle} />
              <View style={rowContentStyle}>
                <Text style={textStyle}>Winnings</Text>
                <ToolTipComp title="Money that you can withdraw or reuse to join any contest" />
              </View>
              <View>
                <Text style={textStyle}>{"\u20B9"} 0</Text>
                <Text style={minRedeemTextStyle}>
                  Minimum Rs. 150 before you can withdraw
                </Text>
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate("Withdrawal")}
                  labelStyle={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: Colors.headerBackgroundColor,
                  }}
                  style={buttonStyle}
                >
                  Withdraw
                </Button>
                <View style={dividerStyle} />
                <View style={rowContentStyle}>
                  <Text style={textStyle}>Bonus</Text>
                  <ToolTipComp title="Money that you can use to join any public contest" />
                </View>
                <View>
                  <Text style={textStyle}>{"\u20B9"} 0</Text>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </View>
      <View style={cardContainer2}>
        <Card>
          <View style={cardInnerStyle}>
            <View style={cardContainer2ContentStyle}>
              <Text style={cardTextStyle}>My Recent Transactions</Text>
              <MaterialCommunityIcons
                name="arrow-right"
                color="black"
                onPress={() => alert(" Button Pressed")}
                size={26}
                style={iconStyle}
              />
            </View>
          </View>
        </Card>
      </View>
      <View style={cardContainer3}>
        <Card>
          <View style={cardInnerStyle}>
            <View style={cardContainer2ContentStyle}>
              <Text style={cardTextStyle}>My Recent Withdrawals</Text>
              <MaterialCommunityIcons
                name="arrow-right"
                color="black"
                onPress={() => alert(" Button Pressed")}
                size={26}
                style={iconStyle}
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default MyBalanceScreen;
