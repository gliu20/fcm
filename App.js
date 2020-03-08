import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homescreen';
import BadgeScreen from './screens/badgescreen';
import StoryScreen from './screens/storyscreen'

export default function App() {
  return (
    <View style={styles.container}>
      <StoryScreen></StoryScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
