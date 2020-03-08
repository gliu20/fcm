import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Story from './../components/story';

class StoryScreen extends React.Component {
  render () {
    return (
        <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="and something something"></Story>
            <Story story="slide 5"></Story>
            <Story story="slide 6"></Story>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
});

export default StoryScreen;