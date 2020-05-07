import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ContestsH2HScreen = ({navigation,route}) => {
  let contest = route.params.league_category;

  return (
    <View style={styles.screen}>
      <Text>The H2H Screen!</Text>
      <Text>{contest}</Text>
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

export default ContestsH2HScreen;
