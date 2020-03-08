import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Story from './../components/story';

const data = [
    {key:"1",storyImage: require('../assets/back.jpg'), storyText:"One day there was a"},    
    {key:"2",storyImage: require('../assets/back.jpg'), storyText:"the next day"},
    {key:"3",storyImage: require('../assets/back.jpg'), storyText:"blah blah"},
    {key:"4",storyImage: require('../assets/back.jpg'), storyText:"and something something"},
    {key:"5",storyImage: require('../assets/back.jpg'), storyText:"slide 5"},
    {key:"6",storyImage: require('../assets/splash.png'), storyText:"slide 6"}    
]

class StoryScreen extends React.Component {
  render () {
    return (
        <FlatList data={data} horizontal={true} pagingEnabled={true} style={styles.container} renderItem={({item}) => <Story storyImage={item.storyImage} storyText={item.storyText}></Story>}>
        </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
});

export default StoryScreen;