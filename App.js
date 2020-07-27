import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
  return ( 
    <View style={styles.container}>
      {/* command + /누르면 자동으로 주석되는 듯  */}
      <Text>Hello, world!!</Text> 
      <StatusBar style="auto" />
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
  textBig: {
    fontSize : 32,
  },
  textRed: {
    color : 'red',
  },
});

