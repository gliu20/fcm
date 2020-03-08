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
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
            <Story story="One day there was a"></Story>
            <Story story="the next day"></Story>
            <Story story="blah blah"></Story>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#29f'
  },
});

export default StoryScreen;