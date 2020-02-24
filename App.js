import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Streak from './components/streaks';
import Dashboard from './components/dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Streak streak="2"></Streak>
      <Dashboard></Dashboard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
