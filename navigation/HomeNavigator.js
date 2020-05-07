import * as React from "react";
import { View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyBalanceScreen from "../screens/Home/MyBalanceScreen";
import AddCashScreen from "../screens/Balance/AddCashScreen";
import WithdrawalScreen from "../screens/Balance/WithdrawalScreen";
import MoreScreen from "../screens/Home/MoreScreen";
import FootBall from "../screens/FootBall/FootBall";
import BasketBall from "../screens/BasketBall/BasketBall";
import Cricket from "../screens/Cricket/Cricket";
import UpcomingScreen from "../screens/Home/UpcomingScreen";
import LiveScreen from "../screens/Home/LiveScreen";
import CompletedScreen from "../screens/Home/CompletedScreen";
import MyReferralsScreen from "../screens/Drawer/MyReferralsScreen";
import MyInfoScreen from "../screens/Drawer/MyInfoScreen";

import ContestsStackNavigator from "./ContestsNavigator";
import ContestStackNavigator from "./ContestNavigator";
import CreateTeamFootBallNavigator from "./CreateTeamFootBallNavigator";
import CreateTeamCricketStackNavigator from "./CreateTeamCricketNavigator";
import CreateTeamBasketBallNavigator from "./CreateTeamBasketBallNavigator";
import UserAccountStackNavigator from "./UserAccountNavigator";

import { MaterialCommunityIcons } from "react-native-vector-icons";
import Header from "../components/Header";
import Colors from "../shared/const/Colors";
import { result } from "../data/dummydata";
import Sports_Categories from "../components/Sports_Categories";

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const HomeRootStack = createStackNavigator();
const MyReferralStack = createStackNavigator();
const MyInfoStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MyMatchesStack = createStackNavigator();
const MyBalanceStack = createStackNavigator();
const MoreStack = createStackNavigator();

const Drawer = createDrawerNavigator();

function HomeRootStackScreen() {
  return (
    <HomeRootStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeRootStack.Screen
        name="HomeBottomTab"
        children={HomeBottomTabNavigator}
      />
      <HomeRootStack.Screen
        name="ContestsStack"
        children={ContestsStackNavigator}
      />
      <HomeRootStack.Screen
        name="ContestStack"
        children={ContestStackNavigator}
      />
      <HomeRootStack.Screen
        name="CreateTeamFootBallStack"
        component={CreateTeamFootBallNavigator}
      />
      <HomeRootStack.Screen
        name="CreateTeamCricketStack"
        component={CreateTeamCricketStackNavigator}
      />
      <HomeRootStack.Screen
        name="CreateTeamBasketBallStack"
        component={CreateTeamBasketBallNavigator}
      />
      <HomeRootStack.Screen
        name="UserAccountStack"
        component={UserAccountStackNavigator}
      />
    </HomeRootStack.Navigator>
  );
}
function MyReferralStackScreens({ navigation }) {
  return (
    <MyReferralStack.Navigator
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <MyReferralStack.Screen
        options={() => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="My Referrals" />
            ),
          };
        }}
        name="MyReferral"
        component={MyReferralsScreen}
      />
    </MyReferralStack.Navigator>
  );
}

function MyInfoStackScreens({ navigation }) {
  return (
    <MyInfoStack.Navigator
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <MyInfoStack.Screen
        options={() => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="My Info & Settings" />
            ),
          };
        }}
        name="MyInfo"
        component={MyInfoScreen}
      />
    </MyInfoStack.Navigator>
  );
}

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      headerMode="float"
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <HomeStack.Screen
        name="Home"
        children={HomeTopTabNavigator}
        options={() => {
          return {
            headerTitle: () => <Header navigation={navigation} title="WIN11" />,
            headerRight: () => (
              <View style={{ paddingHorizontal: 16 }}>
                <MaterialCommunityIcons
                  name="bell"
                  color="white"
                  onPress={() => navigation.toggleDrawer()}
                  size={26}
                />
              </View>
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

function MyMatchesStackScreen({ navigation }) {
  return (
    <MyMatchesStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <MyMatchesStack.Screen
        name="MyMatches"
        children={MyMatchesTopTabNavigator}
        options={() => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="My Matches" />
            ),
          };
        }}
      />
    </MyMatchesStack.Navigator>
  );
}

function MyBalanceStackScreen({ navigation }) {
  return (
    <MyBalanceStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <MyBalanceStack.Screen
        name="MyBalance"
        component={MyBalanceScreen}
        options={() => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="My Balance" />
            ),
          };
        }}
      />
      <MyBalanceStack.Screen
        name="AddCash"
        component={AddCashScreen}
        options={{
          headerTitle: "Add Cash",
          headerBackTitleVisible: false,
        }}
      />
      <MyBalanceStack.Screen
        name="Withdrawal"
        component={WithdrawalScreen}
        options={{
          headerTitle: "Withdrawal",
          headerBackTitleVisible: false,
        }}
      />
    </MyBalanceStack.Navigator>
  );
}

function MoreStackScreen({ navigation }) {
  return (
    <MoreStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <MoreStack.Screen
        name="More"
        component={MoreScreen}
        options={() => {
          return {
            headerTitle: () => <Header navigation={navigation} title="More" />,
          };
        }}
      />
    </MoreStack.Navigator>
  );
}

function HomeTopTabNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="Cricket"
      tabBarOptions={{
        showIcon: "true",
        tabStyle: { height: 60 },
      }}
    >
      <TopTab.Screen
        name="FootBall"
        component={FootBall}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="soccer"
              color={Colors.headerBackgroundColor}
              size={26}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="BasketBall"
        component={BasketBall}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="basketball"
              color={Colors.headerBackgroundColor}
              size={26}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="Cricket"
        component={Cricket}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cricket"
              color={Colors.headerBackgroundColor}
              size={26}
            />
          ),
        }}
      />
    </TopTab.Navigator>
  );
}

function DynamicTopTabNavigator() {
  // let categories = {
  //   football: "Football",
  //   nba: "Basketball",
  //   baseball: "Baseball",
  //   cricket: "Cricket",
  //   handball: "Handball",
  // };
  return <Sports_Categories tabs={result} />;
}

function MyMatchesTopTabNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="Cricket"
      tabBarOptions={{
        showIcon: "true",
        tabStyle: { height: 60 },
      }}
    >
      <TopTab.Screen
        name="FootBall"
        children={MyMatchesTabNavigator}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="soccer"
              color={Colors.headerBackgroundColor}
              size={26}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="BasketBall"
        component={MyMatchesTabNavigator}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="basketball"
              color={Colors.headerBackgroundColor}
              size={26}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="Cricket"
        component={MyMatchesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cricket"
              color={Colors.headerBackgroundColor}
              size={26}
            />
          ),
        }}
      />
    </TopTab.Navigator>
  );
}

function HomeBottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      labeled="false"
      barStyle={{ backgroundColor: Colors.headerBackgroundColor }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="My Matches"
        component={MyMatchesStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="My Balance"
        component={MyBalanceStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="more" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function MyMatchesTabNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="Upcoming"
      tabBarOptions={{
        tabStyle: { height: 50 },
      }}
    >
      <TopTab.Screen name="Upcoming" component={UpcomingScreen} />
      <TopTab.Screen name="Live" component={LiveScreen} />
      <TopTab.Screen name="Completed" component={CompletedScreen} />
    </TopTab.Navigator>
  );
}

function HomeNavigator() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Drawer.Navigator initialRouteName="HomeRoot">
        <Drawer.Screen
          name="HomeRoot"
          component={HomeRootStackScreen}
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Drawer.Screen
          name="MyReferrals"
          component={MyReferralStackScreens}
          options={{
            drawerLabel: "My Referrals",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="share" color={color} size={26} />
            ),
          }}
        />
        <Drawer.Screen
          name="MyInfo"
          component={MyInfoStackScreens}
          options={{
            drawerLabel: "My Info & Settings",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigator;
