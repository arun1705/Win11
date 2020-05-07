import React from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';
export const MyContestsScreen =({ route, navigation })=> {
  return (
    <View style={styles.screen}>
      <Text>The MyContests Screen!</Text>
      <Button
        title="go to create team"
        onPress={() => {
          if (route.params.name === "FootBall") {
            navigation.navigate("CreateTeamFootBallStack");
          }
          if (route.params.name === "Cricket") {
            navigation.navigate("CreateTeamCricketStack");
          }
          if (route.params.name === "BasketBall") {
            navigation.navigate("CreateTeamBasketBallStack");
          }
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyContestsScreen;
