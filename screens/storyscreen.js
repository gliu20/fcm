import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Story from './../components/story';

class StoryScreen extends React.Component {
  render () {
    <View style={styles.container}>
        <Story story="One day there was a"></Story>
        <Story story="the next day"></Story>
        <Story story="blah blah"></Story>
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

export default StoryScreen;