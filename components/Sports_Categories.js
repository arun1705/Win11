import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
// import { styles } from "../shared/styles/ContestsStyle";
import Colors from "../shared/const/Colors";
import Matches from "../components/Matches";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TabView, TabBar } from "react-native-tab-view";
import { acc } from "react-native-reanimated";

const initialLayout = { width: Dimensions.get("window").width };

export default function Sports_Categories({ tabs }) {
  let categories = tabs.result.sport_categories;
  let games = tabs.result.games;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(categories);

  const renderScene = ({ route }) => {
    const filtered_data = games.filter(function (el) {
      return el.tournament.sport_category_id === route.categories_id;
    });
    if (categories.some((item) => item.Key === route.Key)) {
      return <Matches games={filtered_data} />;
    } else {
      return (
        <View style={styles.screen}>
          <Text>No matches available now</Text>
        </View>
      );
    }
  };


  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{ backgroundColor: Colors.headerBackgroundColor }}
      style={{ backgroundColor: "white" }}
      tabStyle={{ width:100, height: 60 }}
      labelStyle={{ color: "black", fontWeight: "400", fontSize: 10 }}
      renderIcon={({ route, focused, color }) => (
        <MaterialCommunityIcons
          name={route.icon}
          color={Colors.headerBackgroundColor}
          size={26}
        />
      )}
      onTabPress={({ route, preventDefault }) => {
    if (route.key === 'football') {
      preventDefault();
    }
  }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
