import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './screens/homescreen';
import BadgeScreen from './screens/badgescreen';
import StoryScreen from './screens/storyscreen'

const streak = 2;// TODO add props to move data down

const story = [
    { key: "1", storyImage: require('./assets/back.jpg'), storyText: "One day there was a" },
    { key: "2", storyImage: {uri: 'https://facebook.github.io/react/logo-og.png'}, storyText: "the next day" },
    { key: "3", storyImage: require('./assets/back.jpg'), storyText: "blah blah" },
    { key: "4", storyImage: require('./assets/back.jpg'), storyText: "and something something" },
    { key: "5", storyImage: require('./assets/back.jpg'), storyText: "slide 5" },
    { key: "6", storyImage: require('./assets/splash.png'), storyText: "slide 6" }
];

const badge = [
    { key:"1", badgeText: "Run around a lot" },
    { key:"2", badgeText: "Won 2 times" },
    { key:"3", badgeText: "5 day streak" },
    { key:"4", badgeText: "10 day streak" },
    { key:"5", badgeText: "30 day streak" },
];


class App extends React.Component {
    state = {currScreen: "home"};

    changeView (view) {
        if (view !== "home" && view !== "badges" && view !== "story") {
            throw new Error("Invalid view type. View must be either home, badges, or story")
        }

        this.setState(() => ({currScreen: view}))
    }

    render () {
        return (
            <View style={styles.container}>
                <Button title="Go Home" 
                    onPress={() => {
                        this.changeView("home")
                    }}
                    style={styles.homeBtn}
                    ></Button>
                <HomeScreen switchView={this.changeView.bind(this)} hidden={this.state.currScreen !== "home"}></HomeScreen>
                <BadgeScreen switchView={this.changeView.bind(this)} hidden={this.state.currScreen !== "badges"} badges={badge}></BadgeScreen>
                <StoryScreen switchView={this.changeView.bind(this)} hidden={this.state.currScreen !== "story"} story={story}></StoryScreen>
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1
    },
    homeBtn: {
        width: "100%"
    }
});
