import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import codePush from 'react-native-code-push';

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
};

let App = () => {
  const [status, setStatus] = useState('');
  const [isFocused, setSetFocused] = useState(false);

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

  const handleFocus = () => {
    setSetFocused(!isFocused);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 50, margin: 10}}>
        ROBE!!!
      </Text>
      <View style={styles.container}>
        <Button
          color="green"
          title="Check For Updates"
          onFocus={handleFocus}
          onPress={handleCheckUpdates}
        />
        <View style={styles.margin} />
        <Button
          color="#000"
          style={styles.buttonUpdate}
          onPress={handleUpdate}
          title="Install"
        />
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
  margin: {
    margin: 10,
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
