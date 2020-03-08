import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Badge from './components/badge';

class HomeScreen extends React.Component {
  render () {
    <View style={styles.container}>
        <Badge badge="First steps"></Badge>
        <Badge badge="Reached 100 pts"></Badge>
        <Badge badge="Five day streak"></Badge>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;