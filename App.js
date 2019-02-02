import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    var user = { name: 'Joe', address: { zip: 90210 }};
    var user2 = { name: 'Jane' };
    var zip = user?.address?.zip
    var zip2 = user2?.address?.zip
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{zip}</Text>
        <Text>{zip2}</Text>
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
