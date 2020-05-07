import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../shared/const/Colors";
import PrizeBreakUpScreen from "../screens/Contests/PrizeBreakUpScreen";
import LeaderBoardScreen from "../screens/Contests/LeaderBoardScreen";
import ContestHeader from "../components/ContestHeader";
import ContestsTopHeader from "../components/ContestTopHeader";


const ContestTopTab = createMaterialTopTabNavigator();
const ContestStack = createStackNavigator();

function ContestStackNavigator({ navigation }) {
  return (
    <ContestStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <ContestStack.Screen
        name="Contest"
        children={ContestTopTabNavigator}
        options={() => {
          return {
            headerTitle: () => (
              <ContestHeader navigation={navigation} title="Contest" />
            ),
          };
        }}
      />
    </ContestStack.Navigator>
  );
}

function ContestTopTabNavigator({route}) {
  return (
    <ContestsTopHeader
      tabs={
        <ContestTopTab.Navigator
          initialRouteName="Prize BreakUp"
          tabBarOptions={{
            showIcon: "true",
            tabStyle: { height: 40 },
          }}
        >
          <ContestTopTab.Screen
            name="Prize BreakUp"
            component={PrizeBreakUpScreen}
          />
          <ContestTopTab.Screen
            name="Leaderboard"
            component={LeaderBoardScreen}
          />
        </ContestTopTab.Navigator>
      }
      route={route}
    />
  );
}
export default ContestStackNavigator;
