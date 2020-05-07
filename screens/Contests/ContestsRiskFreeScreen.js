import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ContestsRiskFreeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The ContestRiskFreeScreen Screen!</Text>
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

export default ContestsRiskFreeScreen;
