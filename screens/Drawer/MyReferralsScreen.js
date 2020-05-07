import React from "react";
import { Text, View } from "react-native";
import { Card, Button } from "react-native-paper";
import { styles } from "../../shared/styles/MyReferralsStyle";
import Colors from "../../shared/const/Colors";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import CustomButton from "../../components/Button";

const {
  Container,
  titleTextStyle,
  cardContainer,
  cardInnerStyle,
  shareTextStyle,
  codeTextStyle,
  cardContainer2,
  cardContainer2ContentStyle,
  iconStyle,
} = styles;

export const MyReferralsScreen = (props) => {
  return (
    <View style={Container}>
      <View style={cardContainer}>
        <Card>
          <View style={cardInnerStyle}>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={titleTextStyle}>
                Kick off your friend's Win11 Journey!
              </Text>
              <Text style={{ textAlign: "left" }}>
                Get Rs.100 cash bonus after they verify their mobile number and
                20% of their contest commission for every cash contest that they
                join lifetime!
              </Text>
              <Text style={shareTextStyle}>Share your invite code</Text>
              <Text style={codeTextStyle}>Arh11012</Text>
              <View style={{ marginVertical: 8 }}>
                {/* <Button
                    icon="whatsapp"
                    mode="contained"
                    onPress={() => alert(" Button Pressed")}
                    labelStyle={{ fontSize: 15 }}
                    color={Colors.headerBackgroundColor}
                  >
                    Whatsapp
                  </Button> */}
                <CustomButton
                  title="Whatsapp"
                  onPress={() =>
                    alert(`Why you opened me? Go away, it's mine!`)
                  }
                  style={{ height: 40 }}
                  textStyle={{
                    fontSize: 15,
                  }}
                  iconName="whatsapp"
                />
              </View>
              <View>
                {/* <Button
                  icon="share"
                  mode="contained"
                  onPress={() => alert(" Button Pressed")}
                  labelStyle={{ fontSize: 15 }}
                  color={Colors.headerBackgroundColor}
                >
                  More Options
                </Button> */}
                <CustomButton
                  title="more"
                  onPress={() =>
                    alert(`Why you opened me? Go away, it's mine!`)
                  }
                  style={{ height: 40 }}
                  textStyle={{
                    fontSize: 15,
                  }}
                  iconName="share"
                />
              </View>
            </View>
          </View>
        </Card>
      </View>
      <View style={cardContainer2}>
        <Card>
          <View style={cardInnerStyle}>
            <View style={cardContainer2ContentStyle}>
              <Text style={{ fontSize: 15 }}>Your Invited Friend's</Text>
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

export default MyReferralsScreen;
