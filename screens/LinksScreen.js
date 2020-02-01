import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Streak: 2 days</Text>
      <Text>Award 1</Text>
      <Text>Award 2</Text>
      <Text>Award 3</Text>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Achievements',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
