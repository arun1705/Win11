import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WKScreen from "../screens/Cricket/WK";
import BATScreen from "../screens/Cricket/BAT";
import ALLScreen from "../screens/Cricket/ALL";
import BOWScreen from "../screens/Cricket/BOW";
import CreateTeamHeader from "../components/CreateTeamHeader";
import Colors from '../shared/const/Colors'

const CreateTeamCricketTopTab = createMaterialTopTabNavigator();
const CreateTeamCricketStack = createStackNavigator();

function CreateTeamCricketStackNavigator({ navigation }) {
  return (
    <CreateTeamCricketStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <CreateTeamCricketStack.Screen
        name="CreateTeamCricket"
        component={CreateTeamCricketTopTabNavigator}
        options={() => {
          return {
            headerTitle: () => (
              <CreateTeamHeader
                navigation={navigation}
                title="CreateTeamCricket"
              />
            ),
          };
        }}
      />
    </CreateTeamCricketStack.Navigator>
  );
}

function CreateTeamCricketTopTabNavigator() {
  return (
    <CreateTeamCricketTopTab.Navigator
      initialRouteName="CreateTeamCricket"
      tabBarOptions={{
        showIcon: "true",
        tabStyle: { height: 40 },
      }}
    >
      <CreateTeamCricketTopTab.Screen name="WK" component={WKScreen} />
      <CreateTeamCricketTopTab.Screen name="BAT" component={BATScreen} />
      <CreateTeamCricketTopTab.Screen name="ALL" component={ALLScreen} />
      <CreateTeamCricketTopTab.Screen name="BOW" component={BOWScreen} />
    </CreateTeamCricketTopTab.Navigator>
  );
}

export default CreateTeamCricketStackNavigator;
