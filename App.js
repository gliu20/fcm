import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homescreen';
import BadgeScreen from './screens/badgescreen';
import StoryScreen from './screens/storyscreen'

const story = [
    { key: "1", storyImage: require('./assets/back.jpg'), storyText: "One day there was a" },
    { key: "2", storyImage: require('./assets/back.jpg'), storyText: "the next day" },
    { key: "3", storyImage: require('./assets/back.jpg'), storyText: "blah blah" },
    { key: "4", storyImage: require('./assets/back.jpg'), storyText: "and something something" },
    { key: "5", storyImage: require('./assets/back.jpg'), storyText: "slide 5" },
    { key: "6", storyImage: require('./assets/splash.png'), storyText: "slide 6" }
]

export default function App() {
    return (
        <View style={styles.container}>
            <StoryScreen story={story}></StoryScreen>
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
