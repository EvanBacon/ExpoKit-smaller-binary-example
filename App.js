import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset, GLView } from 'expo';
export default class App extends React.Component {
  render() {
    Asset.fromModule(require('./assets/icon.png'));
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
