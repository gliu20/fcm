import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homescreen';
import BadgeScreen from './screens/badgescreen'

export default function App() {
  return (
    <View style={styles.container}>
      <BadgeScreen></BadgeScreen>
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
