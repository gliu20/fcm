import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Story from './../components/story';

class StoryScreen extends React.Component {
  render () {
    return (
        <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
            <Story storyImage={require('../assets/back.jpg')} storyText="One day there was a"></Story>
            <Story storyImage={require('../assets/back.jpg')} storyText="the next day"></Story>
            <Story storyImage={require('../assets/back.jpg')} storyText="blah blah"></Story>
            <Story storyImage={require('../assets/back.jpg')} storyText="and something something"></Story>
            <Story storyImage={require('../assets/back.jpg')} storyText="slide 5"></Story>
            <Story storyImage={require('../assets/splash.png')} storyText="slide 6"></Story>
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