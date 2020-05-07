import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CScreen from "../screens/BasketBall/C";
import PFScreen from "../screens/BasketBall/PF";
import PGScreen from "../screens/BasketBall/PG";
import SFScreen from "../screens/BasketBall/SF";
import SGScreen from "../screens/BasketBall/SG";
import CreateTeamHeader from "../components/CreateTeamHeader";
import Colors from '../shared/const/Colors'

const CreateTeamBasketBallTopTab = createMaterialTopTabNavigator();
const CreateTeamBasketBallStack = createStackNavigator();

function CreateTeamBasketBallStackNavigator({ navigation }) {
  return (
    <CreateTeamBasketBallStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <CreateTeamBasketBallStack.Screen
        name="CreateTeamBasketBall"
        component={CreateTeamBasketBallTopTabNavigator}
        options={() => {
          return {
            headerTitle: () => (
              <CreateTeamHeader
                navigation={navigation}
                title="CreateTeamBasketBall"
              />
            ),
          };
        }}
      />
    </CreateTeamBasketBallStack.Navigator>
  );
}

function CreateTeamBasketBallTopTabNavigator() {
  return (
    <CreateTeamBasketBallTopTab.Navigator
      initialRouteName="CreateTeamBasketBall"
      tabBarOptions={{
        showIcon: "true",
        tabStyle: { height: 40 },
      }}
    >
      <CreateTeamBasketBallTopTab.Screen name="PG" component={PGScreen} />
      <CreateTeamBasketBallTopTab.Screen name="SG" component={SGScreen} />
      <CreateTeamBasketBallTopTab.Screen name="SF" component={SFScreen} />
      <CreateTeamBasketBallTopTab.Screen name="PF" component={PFScreen} />
      <CreateTeamBasketBallTopTab.Screen name="C" component={CScreen} />
    </CreateTeamBasketBallTopTab.Navigator>
  );
}

export default CreateTeamBasketBallStackNavigator;
