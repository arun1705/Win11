import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ContestsPopularScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Popular Screen!</Text>
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

export default ContestsPopularScreen;
