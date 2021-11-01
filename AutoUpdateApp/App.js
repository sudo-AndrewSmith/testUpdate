import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import codePush from 'react-native-code-push';

let App = () => {
  return (
    <View>
      <Text>pizda</Text>
    </View>
  );
};

App = codePush(App);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
