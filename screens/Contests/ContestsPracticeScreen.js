import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ContestsPracticeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Practice Screen!</Text>
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

export default ContestsPracticeScreen;
