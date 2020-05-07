import React from "react";

import UserAccountHeader from "../components/UserAccountHeader";
import { createStackNavigator } from "@react-navigation/stack";
import ChangePasswordScreen from "../screens/UserAccount/ChangePassword";
import Colors from "../shared/const/Colors";

const UserAccountStack = createStackNavigator();

function UserAccountStackNavigator({ navigation }) {
  return (
    <UserAccountStack.Navigator
      screenOptions={{

        headerTintColor: Colors.headerTextColor,
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
      }}
    >
      <UserAccountStack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
            headerTitle: () => (
          <UserAccountHeader navigation={navigation} title="Change Password" />
        ),
        }}
      />
    </UserAccountStack.Navigator>
  );
}

export default UserAccountStackNavigator;
