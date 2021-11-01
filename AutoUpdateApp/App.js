import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import codePush from 'react-native-code-push';

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
};

let App = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    codePush.checkForUpdate().then(update => {
      if (!update) {
        setStatus('обновлено!');
      } else {
        setStatus('Есть обнова!');
      }
    });
  }),
    [codePush];

  const handleCheckUpdates = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };

  useEffect(() => {
    codePush.notifyAppReady(message => console.log(message));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 50, margin: 10}}>pizda</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleCheckUpdates}>
          <Text style={styles.text}>Check for updates bigom</Text>
        </TouchableOpacity>
        <Text style={styles.textStatus}>{status}</Text>
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
  textStatus: {
    margin: 10,
    fontSize: 20,
    color: 'red',
  },
});

export default App;
