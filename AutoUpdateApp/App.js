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
        setStatus('Нету апдейта!');
      } else {
        console.log('ff');
        setStatus('Есть обнова!');
      }
    });
  }),
    [codePush, setStatus];

  const handleUpdate = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };
  const handleCheckUpdates = () => {
    codePush.checkForUpdate().then(update => {
      if (!update) {
        setStatus('Нету апдейта!');
      } else {
        setStatus('Есть обнова!');
      }
    });
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 50, margin: 10}}>
        Testing
      </Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonCheck}
          onPress={handleCheckUpdates}>
          <Text style={styles.text}>CheckForUpdates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleUpdate}>
          <Text style={styles.text}>Install</Text>
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
  buttonCheck: {
    margin: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buttonUpdate: {
    margin: 10,
    backgroundColor: '#000',
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
