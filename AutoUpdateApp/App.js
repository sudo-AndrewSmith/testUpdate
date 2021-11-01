import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

let App = () => {
  const handleCheckUpdates = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };

  return (
    <View style={{flex: 1}}>
      <Text>pizda</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleCheckUpdates}>
          <Text style={styles.text}>Check for updates bigom</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

App = codePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
  },
  text: {
    margin: 10,
    fontSize: 20,
    color: '#fff',
  },
});

export default App;
