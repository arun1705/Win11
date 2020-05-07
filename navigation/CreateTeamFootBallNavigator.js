import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import GKScreen from "../screens/FootBall/GK";
import DFScreen from "../screens/FootBall/DEF";
import MIDScreen from "../screens/FootBall/MID";
import STScreen from "../screens/FootBall/ST";
import CreateTeamHeader from "../components/CreateTeamHeader";
import Colors from "../shared/const/Colors";
import CreateTeamTopHeader from "../components/CreateTeamTopHeader";
const CreateTeamFootBallTopTab = createMaterialTopTabNavigator();
const CreateTeamFootBallStack = createStackNavigator();
import ScrollableTabView, {
  ScrollableTabBar,
} from "react-native-scrollable-tab-view";

function CreateTeamFootBallStackNavigator({ navigation }) {
  return (
    <CreateTeamFootBallStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              style={{ marginLeft: 15 }}
              color="#fff"
            />
          </TouchableOpacity>
        ),
      }}
    >
      <CreateTeamFootBallStack.Screen
        name="CreateTeamFootBall"
        component={CreateTeamFootBallTopTabNavigator}
        options={() => {
          return {
            headerTitle: () => (
              <CreateTeamHeader
                navigation={navigation}
                title="CreateTeamFootBall"
              />
            ),
          };
        }}
      />
    </CreateTeamFootBallStack.Navigator>
  );
}

function CreateTeamFootBallTopTabNavigator({ route }) {
  let player_positions = [
    {
      id: 25,
      sport_category_id: 5,
      name: "GK",
      full_name: "Goal-Keeper",
      code: "G",
      icon: "img/gk.png",
      min_players_per_team: 1,
      max_players_per_team: 1,
      created: "2019-04-20T17:22:58+00:00",
      modified: "2019-04-20T17:25:45+00:00",
    },
    {
      id: 26,
      sport_category_id: 5,
      name: "DEF",
      full_name: "Defenders",
      code: "D",
      icon: "img/def.png",
      min_players_per_team: 3,
      max_players_per_team: 5,
      created: "2019-04-20T17:25:05+00:00",
      modified: "2019-04-20T17:25:05+00:00",
    },
    {
      id: 27,
      sport_category_id: 5,
      name: "MID",
      full_name: "Mid-Fielders",
      code: "M",
      icon: "img/mid.png",
      min_players_per_team: 3,
      max_players_per_team: 5,
      created: "2019-04-20T17:25:39+00:00",
      modified: "2019-04-20T17:25:39+00:00",
    },
    {
      id: 28,
      sport_category_id: 5,
      name: "ST",
      full_name: "Forwards",
      code: "F",
      icon: "img/fwd.png",
      min_players_per_team: 1,
      max_players_per_team: 3,
      created: "2019-04-20T17:26:11+00:00",
      modified: "2019-04-20T17:26:11+00:00",
    },
  ];
  return (
    <CreateTeamTopHeader
      // tabs={
      //   <CreateTeamFootBallTopTab.Navigator
      //     initialRouteName="GK"
      //     tabBarOptions={{
      //       showIcon: "true",
      //       tabStyle: { height: 40 },
      //     }}
      //   >
      //     <CreateTeamFootBallTopTab.Screen name="GK" component={GKScreen} />
      //     <CreateTeamFootBallTopTab.Screen name="DF" component={DFScreen} />
      //     <CreateTeamFootBallTopTab.Screen name="MID" component={MIDScreen} />
      //     <CreateTeamFootBallTopTab.Screen name="ST" component={STScreen} />
      //   </CreateTeamFootBallTopTab.Navigator>
      // }
      tabs={player_positions}
      route={route}
    />
  );
}

export default CreateTeamFootBallStackNavigator;
