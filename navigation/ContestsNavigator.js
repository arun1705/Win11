import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../shared/const/Colors";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "../shared/styles/ContestsStyle";

import ContestHeader from "../components/ContestHeader";
import ContestsScreen from "../screens/Contests/ContestsScreen";
import MyContestsScreen from "../screens/Contests/MyContestsScreen";
import MyTeamsScreen from "../screens/Contests/MyTeamsScreen";
import ContestsH2HScreen from "../screens/Contests/ContestsH2HScreen";
import ContestsRiskFreeScreen from "../screens/Contests/ContestsRiskFreeScreen";
import ContestsUnoScreen from "../screens/Contests/ContestsUnoScreen";
import ContestsChampionsScreen from "../screens/Contests/ContestsChampionsScreen";
import ContestsMoreScreen from "../screens/Contests/ContestsMoreScreen";
import ContestsPopularScreen from "../screens/Contests/ContestsPopularScreen";
import ContestsPracticeScreen from "../screens/Contests/ContestsPracticeScreen";
import ContestsAllScreen from "../screens/Contests/ContestsAllScreen";
import InviteCodeScreen from "../screens/Contests/InviteCodeScreen";
import CreateContestScreen from "../screens/Contests/CreateContestScreen";
import ContestsTopHeader from "../components/ContestTopHeader";

const ContestsStack = createStackNavigator();
const ContestsTopTab = createMaterialTopTabNavigator();

function ContestsStackNavigator({ navigation }) {
  return (
    <ContestsStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTitle: () => (
          <ContestHeader navigation={navigation} title="Contests" />
        ),
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <ContestsStack.Screen
        name="ContestsRoot"
        children={ContestsTopTabNavigator}
        options={{
          headerLeft: null,
        }}
      />
      <ContestsStack.Screen
        name="ContestH2h"
        component={ContestsH2HScreen}
        options={{
          headerLeft: null,
        }}
      />
      <ContestsStack.Screen
        name="ContestRiskFree"
        component={ContestsRiskFreeScreen}
        options={{
          headerLeft: null,
        }}
      />
      <ContestsStack.Screen
        name="Uno"
        component={ContestsUnoScreen}
        options={{
          headerLeft: null,
        }}
      />
      <ContestsStack.Screen
        name="Champions"
        component={ContestsChampionsScreen}
        options={{
          headerLeft: null,
        }}
      />
      <ContestsStack.Screen
        name="More"
        component={ContestsMoreScreen}
        options={{
          headerLeft: null,
        }}
      />
      <ContestsStack.Screen
        name="Popular"
        component={ContestsPopularScreen}
        options={{
          headerLeft: null,
        }}
      />
      <ContestsStack.Screen
        name="Practice"
        component={ContestsPracticeScreen}
        options={{
          headerLeft: null,
        }}
      />
      <ContestsStack.Screen
        name="All"
        component={ContestsAllScreen}
        options={{
          headerLeft: null,
        }}
      />

      <ContestsStack.Screen
        name="InviteCode"
        component={InviteCodeScreen}
        options={{
          headerTitle: "Invite Code",
          headerBackTitleVisible: false,
        }}
      />

      <ContestsStack.Screen
        name="CreateContest"
        component={CreateContestScreen}
        options={{
          headerTitle: "Create Contest",
          headerBackTitleVisible: false,
        }}
      />
    </ContestsStack.Navigator>
  );
}

function ContestsTopTabNavigator({ route }) {


  return (
    <ContestsTopHeader
      tabs={
        <ContestsTopTab.Navigator
          initialRouteName="Contests"
          tabBarOptions={{
            showIcon: "true",
            tabStyle: { height: 40 },
          }}
        >
          <ContestsTopTab.Screen name="Contests" component={ContestsScreen} />
          <ContestsTopTab.Screen
            name="My Contests"
            component={MyContestsScreen}
          />
          <ContestsTopTab.Screen name="My Teams" component={MyTeamsScreen} />
        </ContestsTopTab.Navigator>
      }
      route={route}
    />
  );
}

export default ContestsStackNavigator;
